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

  static List<String> MODES = const <String>[
    "apl",
    "gfm",
    "ntriples",
    "spreadsheet",
    "asciiarmor",
    "gherkin",
    "octave",
    "sql",
    "asn.1",
    "go",
    "oz",
    "stex",
    "asterisk",
    "groovy",
    "pascal",
    "stylus",
    "brainfuck",
    "haml",
    "pegjs",
    "swift",
    "clike",
    "handlebars",
    "perl",
    "tcl",
    "clojure",
    "haskell",
    "php",
    "textile",
    "cmake",
    "haskell-literate",
    "pig",
    "tiddlywiki",
    "cobol",
    "haxe",
    "powershell",
    "tiki",
    "coffeescript",
    "htmlembedded",
    "properties",
    "toml",
    "commonlisp",
    "htmlmixed",
    "protobuf",
    "tornado",
    "crystal",
    "http",
    "pug",
    "troff",
    "css",
    "idl",
    "puppet",
    "ttcn",
    "cypher",
    "index.html",
    "python",
    "ttcn-cfg",
    "d",
    "javascript",
    "q",
    "turtle",
    "dart",
    "jinja2",
    "r",
    "twig",
    "diff",
    "jsx",
    "rpm",
    "vb",
    "django",
    "julia",
    "rst",
    "vbscript",
    "dockerfile",
    "livescript",
    "ruby",
    "velocity",
    "dtd",
    "lua",
    "rust",
    "verilog",
    "dylan",
    "markdown",
    "sas",
    "vhdl",
    "ebnf",
    "mathematica",
    "sass",
    "vue",
    "ecl",
    "mbox",
    "scheme",
    "wast",
    "eiffel",
    "meta.js",
    "shell",
    "webidl",
    "elm",
    "mirc",
    "sieve",
    "xml",
    "erlang",
    "mllike",
    "slim",
    "xquery",
    "factor",
    "modelica",
    "smalltalk",
    "yacas",
    "fcl",
    "mscgen",
    "smarty",
    "yaml",
    "forth",
    "mumps",
    "solr",
    "yaml-frontmatter",
    "fortran",
    "nginx",
    "soy",
    "z80",
    "gas",
    "nsis",
    "sparql",
  ];

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
    _settings();
    update();
  }

  void _settings() {
    editor.setMode(widget.mode);
    editor.setTheme(widget.theme);
    editor.setReadOnly(widget.readOnly);
    editor.setLineNumbers(widget.lineNumbers);
  }

  Doc get activeDoc => editor.getDoc();

  void update() {
    editor.refresh();
    if (mounted) setState(() {});
  }

  @override
  void didUpdateWidget(covariant Editor oldWidget) {
    if (oldWidget.mode != widget.mode) editor.setMode(widget.mode);
    if (oldWidget.theme != widget.theme) editor.setTheme(widget.theme);
    if (oldWidget.lineNumbers != widget.lineNumbers)
      editor.setLineNumbers(widget.lineNumbers);
    if (oldWidget.readOnly != widget.readOnly)
      editor.setReadOnly(widget.readOnly);
    super.didUpdateWidget(oldWidget);
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
