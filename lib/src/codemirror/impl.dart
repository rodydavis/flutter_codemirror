import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CodeMirrorOptions {
  const CodeMirrorOptions({
    this.mode = 'dart',
    this.theme = 'material',
    this.lineNumbers = true,
    this.readOnly = false,
  });
  final String mode;
  final String theme;
  final bool lineNumbers;
  final bool readOnly;

  CodeMirrorOptions copyWith({
    String mode,
    String theme,
    bool lineNumbers,
    bool readOnly,
  }) {
    return CodeMirrorOptions(
      mode: mode ?? this.mode,
      theme: theme ?? this.theme,
      lineNumbers: lineNumbers ?? this.lineNumbers,
      readOnly: readOnly ?? this.readOnly,
    );
  }
}

class EditorController {
  EditorController({
    @required this.setValue,
    @required this.setOptions,
    @required this.refresh,
  });
  final void Function(String val) setValue;
  final void Function(CodeMirrorOptions val) setOptions;
  final void Function() refresh;
}

abstract class CodeMirrorViewImpl extends StatelessWidget {
  CodeMirrorViewImpl({Key key}) : super(key: key);
  CodeMirrorOptions get options;
  ValueChanged<EditorController> get onCreate;
  void Function(String val) get onValue;
  String getHtml(String raw) {
    String _html = raw;
    _html = _html.replaceAll('VERSION', '5.60.0');
    _html = _html.replaceAll('EDITOR_THEME', options.theme);
    _html = _html.replaceAll('EDITOR_MODE', options.mode);
    return Uri.dataFromString(_html, mimeType: 'text/html').toString();
  }
}
