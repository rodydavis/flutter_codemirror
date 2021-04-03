import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

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

  static final _widgetMap = Map<Key, WebViewController>();

  @override
  Widget build(BuildContext context) {
    if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView();
    return FutureBuilder<String>(
        future: rootBundle.loadString('assets/codemirror.html'),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Center(child: CircularProgressIndicator());
          }
          return LayoutBuilder(
            builder: (context, dimens) {
              return StatefulBuilder(
                builder: (context, setState) {
                  return WebView(
                    key: this?.key,
                    debuggingEnabled: true,
                    initialUrl: getHtml(snapshot.data),
                    onWebViewCreated: (controller) {
                      final key = this.key;
                      if (_widgetMap[key] == null) {
                        _widgetMap[key] = controller;
                      }
                    },
                    onPageFinished: (url) {
                      final _controller = _widgetMap[key];
                      _controller.evaluateJavascript(
                        'editor.setSize(${dimens.maxWidth},${dimens.maxHeight})',
                      );
                      this.onCreate(EditorController(
                        setOptions: (val) async {
                          await _controller.evaluateJavascript(
                            'editor.setOption("mode", "${val.mode}")',
                          );
                          await _controller.evaluateJavascript(
                            'editor.setOption("theme", "${val.theme}")',
                          );
                          await _controller.evaluateJavascript(
                            'editor.setOption("readOnly", ${val.readOnly})',
                          );
                          await _controller.evaluateJavascript(
                            'editor.setOption("lineNumbers", ${val.lineNumbers})',
                          );
                          await Future.delayed(
                            const Duration(milliseconds: 200),
                          );
                          await _controller.evaluateJavascript(
                            'editor.refresh()',
                          );
                          if (this.options.mode != val.mode ||
                              this.options.theme != val.theme) {
                            await _controller.loadUrl(getHtml(snapshot.data));
                          }
                        },
                        setValue: (val) {
                          final raw = Uri.encodeComponent(val);
                          _controller.evaluateJavascript(
                              'editor.setValue(decodeURIComponent("$raw"))');
                        },
                        refresh: () async {
                          final delay = const Duration(milliseconds: 50);
                          await Future.delayed(delay);
                          _controller.evaluateJavascript(
                            'editor.refresh()',
                          );
                        },
                      ));
                    },
                    javascriptMode: JavascriptMode.unrestricted,
                    javascriptChannels: {
                      JavascriptChannel(
                        name: 'MessageInvoker',
                        onMessageReceived: (event) =>
                            this.onValue(event.message),
                      ),
                    },
                  );
                },
              );
            },
          );
        });
  }
}
