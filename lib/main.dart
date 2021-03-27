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
      theme: ThemeData(primarySwatch: Colors.blue),
      home: EditorExample(),
    );
  }
}

class EditorExample extends StatelessWidget {
  const EditorExample({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: false,
        title: Text(TITLE),
      ),
      body: Editor(
        onCreate: (editor) {
          editor.getDoc().setValue(EXAMPLE_CODE);
        },
      ),
    );
  }
}
