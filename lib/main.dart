import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'src/editor.dart';
import 'src/example.dart';

void main() => runApp(MyApp());

const TITLE = 'Flutter + CodeMirror';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: TITLE,
      theme: ThemeData(
        primaryColor: Colors.blue,
      ),
      home: EditorExample(),
    );
  }
}

class EditorExample extends StatefulWidget {
  const EditorExample({Key key}) : super(key: key);

  @override
  _EditorExampleState createState() => _EditorExampleState();
}

class _EditorExampleState extends State<EditorExample> {
  CodeMirrorOptions options = CodeMirrorOptions();
  EditorController controller;
  String _code;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: Text(TITLE),
        actions: [
          StringListDropDown(
            value: options.mode,
            items: Editor.MODES,
            onChanged: (val) {
              if (mounted)
                setState(() {
                  options = options.copyWith(mode: val);
                  controller?.setOptions(options);
                });
            },
          ),
          Container(width: 4),
          StringListDropDown(
            value: options.theme,
            items: Editor.THEMES,
            onChanged: (val) {
              if (mounted)
                setState(() {
                  options = options.copyWith(theme: val);
                  controller?.setOptions(options);
                });
            },
          ),
          Container(width: 4),
          IconButton(
            icon: Icon(Icons.file_copy),
            onPressed: () {
              Clipboard.setData(ClipboardData(text: _code));
              ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Code copied to clipboard!')));
            },
          ),
        ],
      ),
      body: Editor(
        options: this.options,
        onCreate: (val) {
          this.controller = val;
          this.controller.setOptions(this.options);
          this.controller.setValue(EXAMPLE_CODE);
        },
        onValue: (val) {
          _code = val;
        },
      ),
    );
  }
}

class StringListDropDown extends StatelessWidget {
  const StringListDropDown({
    Key key,
    @required this.items,
    @required this.onChanged,
    this.value,
  }) : super(key: key);
  final List<String> items;
  final ValueChanged<String> onChanged;
  final String value;

  @override
  Widget build(BuildContext context) {
    final List<String> _items = List.from(items);
    _items.sort();
    return Container(
      child: DropdownButton<String>(
        value: value,
        underline: Container(),
        items: _items
            .map((e) => DropdownMenuItem(
                  child: Text(
                    e,
                    style: TextStyle(color: Colors.black),
                  ),
                  value: e,
                ))
            .toList(),
        onChanged: onChanged,
      ),
    );
  }
}
