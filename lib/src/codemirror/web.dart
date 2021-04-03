import 'dart:html' as html;
import 'dart:ui' as ui;

import 'package:codemirror/codemirror.dart';
import 'package:flutter/material.dart';

import 'impl.dart';

class CodeMirrorView extends CodeMirrorViewImpl {
  CodeMirrorView({
    Key key,
    @required this.onCreate,
    @required this.onValue,
    @required this.options,
  }) : super(key: key);

  final CodeMirrorOptions options;
  final ValueChanged<EditorController> onCreate;
  final void Function(String val) onValue;

  static final _widgetMap = Map<Key, html.Element>();
  static const String viewType = 'code-editor';

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(
      builder: (context, setState) {
        final key = this.key;
        if (_widgetMap[key] == null) {
          _widgetMap[key] = html.DivElement();
        }
        final html.HtmlElement element = _widgetMap[key];
        // ignore: undefined_prefixed_name
        ui.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
          return element;
        });
        final editor = CodeMirror.fromElement(element);
        this.onCreate(EditorController(
          setOptions: (val) {
            editor.setMode(val.mode);
            editor.setTheme(val.theme);
            editor.setReadOnly(val.readOnly);
            editor.setLineNumbers(val.lineNumbers);
          },
          setValue: (val) => editor.getDoc().setValue(val),
          refresh: () async {
            await Future.delayed(const Duration(milliseconds: 50));
            editor.refresh();
          },
        ));
        editor.onChange.listen((event) {
          this.onValue(event);
        });
        return IgnorePointer(
          ignoring: true,
          child: LayoutBuilder(
            builder: (context, dimens) {
              editor.setSize(dimens.maxWidth, dimens.maxHeight);
              return HtmlElementView(
                key: this?.key,
                viewType: viewType,
              );
            },
          ),
        );
      },
    );
  }
}
