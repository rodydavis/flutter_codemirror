import 'package:codemirror/codemirror.dart';
import 'package:flutter/material.dart';

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
  CodeMirror editor;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: Text(TITLE),
        actions: [
          StringListDropDown(
            value: editor?.getKeyMap(),
            items: CodeMirror.KEY_MAPS,
            onChanged: (val) {
              if (mounted)
                setState(() {
                  editor.setKeyMap(val);
                  editor.refresh();
                });
            },
          ),
          Container(width: 4),
          StringListDropDown(
            value: editor?.getTheme(),
            items: CodeMirror.THEMES,
            onChanged: (val) {
              if (mounted)
                setState(() {
                  editor.setTheme(val);
                  editor.refresh();
                });
            },
          ),
        ],
      ),
      body: Editor(
        onCreate: (editor) {
          this.editor = editor;
          this.editor.getDoc().setValue(EXAMPLE_CODE);
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
    return Container(
      child: DropdownButton<String>(
        value: value,
        underline: Container(),
        items: items
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
