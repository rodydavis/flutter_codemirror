import 'dart:html' as html;
import 'dart:ui' as ui;

import 'package:codemirror/codemirror.dart';
import 'package:flutter/material.dart';

class Editor extends StatefulWidget {
  Editor({
    Key key,
    @required this.onCreate,
    this.mode = 'dart',
    this.theme = 'monokai',
    this.lineNumbers = true,
    this.readOnly = false,
  }) : super(key: key);
  final ValueChanged<CodeMirror> onCreate;
  final String mode, theme;
  final bool lineNumbers, readOnly;

  @override
  EditorState createState() => EditorState();
}

class EditorState extends State<Editor> {
  static final _widgetMap = Map<Key, html.Element>();
  static const String viewType = 'code-editor';
  CodeMirror editor;

  @override
  void initState() {
    super.initState();
    final key = widget.key;
    if (_widgetMap[key] == null) {
      _widgetMap[key] = html.DivElement();
    }
    html.Element element = _widgetMap[key];
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
      // Element Updates
      return element;
    });
    editor = CodeMirror.fromElement(element);
    widget.onCreate(editor);
    editor.setMode(widget.mode);
    editor.setTheme(widget.theme);
    editor.setReadOnly(widget.readOnly);
    editor.setLineNumbers(widget.lineNumbers);
    update();
  }

  Doc get activeDoc => editor.getDoc();

  void update() {
    editor.refresh();
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      ignoring: true,
      child: LayoutBuilder(
        builder: (context, dimens) {
          editor.setSize(dimens.maxWidth, dimens.maxHeight);
          return HtmlElementView(
            key: widget?.key,
            viewType: viewType,
          );
        },
      ),
    );
  }
}
