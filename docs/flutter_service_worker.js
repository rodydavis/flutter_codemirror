'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c5b79177bf1724ed47c9afac9df92bec",
"index.html": "66c989648561e2a20d8b0af27e4407b1",
"/": "91f74a33b9232251058426d1e16e9dce",
"main.dart.js": "6858e8e87bb428c4a28cb7bd30d5392b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"packages/codemirror/codemirror.js": "d3729dcacef334554006c3661fc55304",
"packages/codemirror/mode/scheme/index.html": "5510cd58a1db10826c110ba911a86ce0",
"packages/codemirror/mode/scheme/scheme.js": "0fc503a25d764fdac4ed522d8768241e",
"packages/codemirror/mode/modelica/index.html": "905477dfcb434c1b584ac52b1368251c",
"packages/codemirror/mode/modelica/modelica.js": "7e69f8eae5c1662b4b70530554cf2ad1",
"packages/codemirror/mode/idl/index.html": "940f421490431f7e6e41d87d3ebb03a4",
"packages/codemirror/mode/idl/idl.js": "4b46d631df5a4cc5dad83affeddbdf44",
"packages/codemirror/mode/pascal/index.html": "c124c461ab2ca7681e7308efd4728c1d",
"packages/codemirror/mode/pascal/pascal.js": "d9c30b45999d6aae5b3fde670f8909ab",
"packages/codemirror/mode/nsis/index.html": "88ddb9ed7ef1d5e161ea7046bd385fb4",
"packages/codemirror/mode/nsis/nsis.js": "19d7c50fd9739837d2bf7230b5b78ab2",
"packages/codemirror/mode/haml/haml.js": "9126311dd4c0ff3bd8c124fe858cd468",
"packages/codemirror/mode/haml/index.html": "5ebc8f0ce7202bbc0d3e6e0f6ed47446",
"packages/codemirror/mode/haml/test.js": "62a27f480e18436cc1356b17ea5f4b36",
"packages/codemirror/mode/toml/index.html": "da16ace8cecdd5c380f60b1aaa05662a",
"packages/codemirror/mode/toml/toml.js": "0e07868dbada8579805ecc5cb559facf",
"packages/codemirror/mode/pig/index.html": "316cdae3e6d9fa663b1bae3e1563c6be",
"packages/codemirror/mode/pig/pig.js": "f0594d1b74a14591ea748f60ca6b7625",
"packages/codemirror/mode/gas/index.html": "1bbacadd921f72217763bcbfa02459a1",
"packages/codemirror/mode/gas/gas.js": "ad141bbf1a50963b44f5d21f9189a01a",
"packages/codemirror/mode/index.html": "0a495d844aaf99d48d5a9bdc870323f1",
"packages/codemirror/mode/go/index.html": "7bb7f1b3378653a495c2f3589d82c11c",
"packages/codemirror/mode/go/go.js": "e24980e5c7fc0bf42cc8036e0731aa1b",
"packages/codemirror/mode/apl/index.html": "6a5aa97831e16df3e7ca3085f441f1bd",
"packages/codemirror/mode/apl/apl.js": "d7cbcce7ff7c5fff33a5e8a54ff7d47b",
"packages/codemirror/mode/textile/index.html": "fead3b3af49a617aade4aab42ce1f9e6",
"packages/codemirror/mode/textile/test.js": "950a566cdfff93fcc106574572eb874a",
"packages/codemirror/mode/textile/textile.js": "9faee705f8f5d82df302109bbe43def9",
"packages/codemirror/mode/turtle/index.html": "b077c6be2df45f08b8f8f29fb7779619",
"packages/codemirror/mode/turtle/turtle.js": "5e76936f993ecbbf4c3b0e26da739a4b",
"packages/codemirror/mode/sparql/index.html": "d10f523804b278e8118e37c447a36761",
"packages/codemirror/mode/sparql/sparql.js": "edf0d999a83bf030e34732b7959346ea",
"packages/codemirror/mode/troff/index.html": "f9f8a2646dc3cac3fd90d1c726d4b8e4",
"packages/codemirror/mode/troff/troff.js": "90b51117d5eb648ced4618970e25ece6",
"packages/codemirror/mode/cmake/cmake.js": "57b16ee4ada3e31f53f201e868ece4a8",
"packages/codemirror/mode/cmake/index.html": "9e205c47b3fec149df24382dddc6fc0b",
"packages/codemirror/mode/htmlembedded/htmlembedded.js": "0b281dfc1e15f23234b991cf8f6da3a8",
"packages/codemirror/mode/htmlembedded/index.html": "ff27f74ce715388c1e2506aad07b9f2f",
"packages/codemirror/mode/xquery/index.html": "b8a5e0870a0215beba13dbd53224b834",
"packages/codemirror/mode/xquery/test.js": "a5931923c9d3e1bb4b3c4ee8b2fce6ec",
"packages/codemirror/mode/xquery/xquery.js": "8f78acc036709d56e548214d632b9e75",
"packages/codemirror/mode/python/index.html": "cc4697201669450bd57f72610c3f0a9c",
"packages/codemirror/mode/python/test.js": "8aca4ca712a80317d39975d9c9b99a6e",
"packages/codemirror/mode/python/python.js": "ebf3e1c4b18af361e875dbbf02db2bce",
"packages/codemirror/mode/css/less.html": "29b11c736736608d5991123c348729d5",
"packages/codemirror/mode/css/index.html": "2da548d28b236bbcc748f5241c5f88bc",
"packages/codemirror/mode/css/gss.html": "5ea562b08334dd7d2c8068223147bd53",
"packages/codemirror/mode/css/test.js": "eb18dc7194f463a78161441c72160734",
"packages/codemirror/mode/css/scss.html": "9e13364687dfdbaf9d3172f6997b8c87",
"packages/codemirror/mode/css/less_test.js": "483de24cc51ca580145dae70fcd0a274",
"packages/codemirror/mode/css/gss_test.js": "7f155ac871433e686811f1b7b7e50e20",
"packages/codemirror/mode/css/scss_test.js": "b7bdef17f36908032c2cc78ce4417052",
"packages/codemirror/mode/css/css.js": "0cb3d98d007054d1430105fedf2a09b5",
"packages/codemirror/mode/clojure/index.html": "ea755dac0ff301e0dc765fefbb0b841c",
"packages/codemirror/mode/clojure/test.js": "b745c1fdca68cb0e607ec6727c3766c7",
"packages/codemirror/mode/clojure/clojure.js": "8bbe92a60ecb200d47c43d6d12415bc5",
"packages/codemirror/mode/spreadsheet/index.html": "9418c8d05c640830bf7cb85206914bfa",
"packages/codemirror/mode/spreadsheet/spreadsheet.js": "004ce3c7a1a00df5b221fd47eb68d162",
"packages/codemirror/mode/asn.1/index.html": "d099c6313c284429a2018877c2d5ed45",
"packages/codemirror/mode/asn.1/asn.1.js": "4b702a508813c01cbdfe77ef57809b64",
"packages/codemirror/mode/z80/index.html": "1cf4c358ad009d674fef1c0ed4b0d713",
"packages/codemirror/mode/z80/z80.js": "8d39d6f5922dcfc6bfbc5ffecf6a3963",
"packages/codemirror/mode/jinja2/index.html": "7893bce5cc622587746bfb94362eae98",
"packages/codemirror/mode/jinja2/jinja2.js": "1fcc9eafe80bc20def0be1543d0e235f",
"packages/codemirror/mode/gherkin/index.html": "acb1143a8d6f005940e7e6c031550345",
"packages/codemirror/mode/gherkin/gherkin.js": "9667b1bfd1fc9eca1301ecb53645836b",
"packages/codemirror/mode/asterisk/index.html": "05b5910195ee3d64729ec2227f148b88",
"packages/codemirror/mode/asterisk/asterisk.js": "b457947aa1bc9e58ba9f2fb7565678ef",
"packages/codemirror/mode/dockerfile/index.html": "490d10fabbebb0fd706be69c142a3732",
"packages/codemirror/mode/dockerfile/test.js": "9299aa49db961cce058ace71b3236402",
"packages/codemirror/mode/dockerfile/dockerfile.js": "f760b649b086deb82110f93dd3eae166",
"packages/codemirror/mode/dart/index.html": "dccfab9885dddd654f90aadca17e2c43",
"packages/codemirror/mode/dart/dart.js": "899ec5db2a3a09dc840c6011015b863d",
"packages/codemirror/mode/shell/shell.js": "fe74b517348e537d88f6b40991a75e2b",
"packages/codemirror/mode/shell/index.html": "32b74701d3b562617892febb3f1d4408",
"packages/codemirror/mode/shell/test.js": "d1fa34adbb0e4fd0c502198bf6384965",
"packages/codemirror/mode/yacas/index.html": "f27b46f7ccf2ce965c8f2d1a07c54c3f",
"packages/codemirror/mode/yacas/yacas.js": "6c11cc682b8fcb21419469c3a906c6d6",
"packages/codemirror/mode/markdown/index.html": "5977f59160cb8f643d0dc98af3f4bb66",
"packages/codemirror/mode/markdown/test.js": "2e48c32a9da6b4a4d46e0e7542922010",
"packages/codemirror/mode/markdown/markdown.js": "02b3b26799bcee9424ff51c82ba72b2a",
"packages/codemirror/mode/haxe/index.html": "f3d19b8a8241344b467a71c95a3dc20e",
"packages/codemirror/mode/haxe/haxe.js": "5af7fe8db245e97ef2c6332da3927a0c",
"packages/codemirror/mode/soy/index.html": "705ed09c54230e8bf345c8f2b8d6120c",
"packages/codemirror/mode/soy/test.js": "4bdb1599f1e4934a1be08341675d9836",
"packages/codemirror/mode/soy/soy.js": "9485e6ae0c3c3baf5abbd362f4723438",
"packages/codemirror/mode/perl/perl.js": "d6559e56332254a40d515ff9a9ebd7e4",
"packages/codemirror/mode/perl/index.html": "ab6c559729b9a485965321e81f2d67c7",
"packages/codemirror/mode/smalltalk/smalltalk.js": "07875194563e8daeed0f2e7eb45800c1",
"packages/codemirror/mode/smalltalk/index.html": "8e23ea1fac6b7a9142efd41486ae55d8",
"packages/codemirror/mode/dylan/index.html": "14d778975cc964d933fabc37197d0b78",
"packages/codemirror/mode/dylan/test.js": "ac590a4d493aac0a36326a2ce4ed3a4c",
"packages/codemirror/mode/dylan/dylan.js": "6426d9ef2266586cd2353edb64593bba",
"packages/codemirror/mode/stylus/index.html": "ddeee00bb4e8008f9bccc261a93718af",
"packages/codemirror/mode/stylus/stylus.js": "a5e0bab1fa0974b23e15f79509e3c0f2",
"packages/codemirror/mode/vue/index.html": "82d45847a9b014d14778b0566a7e474e",
"packages/codemirror/mode/vue/vue.js": "4f1a255edf96df0cee91ac59c2df58f1",
"packages/codemirror/mode/rust/index.html": "741d4e2e2514d33fb0b69fc6dce8b784",
"packages/codemirror/mode/rust/test.js": "9b2f5021eb8db1a7c4cc6148e9f45588",
"packages/codemirror/mode/rust/rust.js": "6ca6f71a56e029e08c4c1646d3e00cd1",
"packages/codemirror/mode/rst/index.html": "b5b0150b244a0e2ba3da0318f36ca45c",
"packages/codemirror/mode/rst/rst.js": "e4d9314592b730b63269d63e73494ce0",
"packages/codemirror/mode/tiddlywiki/index.html": "3247e1664382c2533a7584aa9e4384c0",
"packages/codemirror/mode/tiddlywiki/tiddlywiki.js": "994a6304082d54d6edbb4bfc50556950",
"packages/codemirror/mode/tiddlywiki/tiddlywiki.css": "e745b2150c79295cfb93a210d34f2587",
"packages/codemirror/mode/pug/index.html": "488e98529b244efebc3559ea23c20885",
"packages/codemirror/mode/pug/pug.js": "f19df8b29279f674542ebc9932e913e8",
"packages/codemirror/mode/erlang/index.html": "be51ca38b68b1034e45039579ec2d1b2",
"packages/codemirror/mode/erlang/erlang.js": "e45b259e4f4aa45591c3f070ad77f808",
"packages/codemirror/mode/r/index.html": "132aaeb38d853043975ab32196851bac",
"packages/codemirror/mode/r/r.js": "695e3d65e57c05133b35bab43b966acf",
"packages/codemirror/mode/mathematica/index.html": "74124b979be30bd104c208dfffb916fc",
"packages/codemirror/mode/mathematica/mathematica.js": "7b44360dfca0597516150633462bdadd",
"packages/codemirror/mode/yaml-frontmatter/index.html": "5ae1095a0f1746d531564d04ab0bf93b",
"packages/codemirror/mode/yaml-frontmatter/yaml-frontmatter.js": "01947c115936ab9fecbe3d90157db74e",
"packages/codemirror/mode/diff/index.html": "a3cd44459363fbb7ede52d7bbb5d85ef",
"packages/codemirror/mode/diff/diff.js": "4a24c3a0fab0170ad3b43801b5419700",
"packages/codemirror/mode/elm/index.html": "0e6c871ee2f09b3551734f7f443c2a37",
"packages/codemirror/mode/elm/elm.js": "e2769b21107516174bc7d5c5e70cf01a",
"packages/codemirror/mode/crystal/index.html": "d19d967e3282c365b784017c5a229463",
"packages/codemirror/mode/crystal/crystal.js": "5be153c311aedd177d739bc00d7b0519",
"packages/codemirror/mode/cypher/index.html": "ad129a0c1734a6d63e0b79086a5d8934",
"packages/codemirror/mode/cypher/test.js": "fbd1ff92e8a173045e2d1765e6646bc3",
"packages/codemirror/mode/cypher/cypher.js": "25fec6bc090b7d92193d6e248ccdf8bc",
"packages/codemirror/mode/htmlmixed/htmlmixed.js": "c5e1660e5df7066b0a82eb374c91f964",
"packages/codemirror/mode/htmlmixed/index.html": "78d8da72ee63a905c536a215622d9bae",
"packages/codemirror/mode/ebnf/ebnf.js": "35e8be27ae3804de8c2c0c017db41ab7",
"packages/codemirror/mode/ebnf/index.html": "614a0a4ea367486c660478386222a6a5",
"packages/codemirror/mode/webidl/index.html": "585c6ba26b3b291acbf7ae492cae8aef",
"packages/codemirror/mode/webidl/webidl.js": "85598e1f9b5bf0ca8cb9dd40358ac09d",
"packages/codemirror/mode/smarty/smarty.js": "9ec193880a5c8ec63fb9d16880650900",
"packages/codemirror/mode/smarty/index.html": "43ee20cd2f5ac2ff39ef2cc94c0aace8",
"packages/codemirror/mode/stex/index.html": "7c62cf3750bfdaf1d8974d92b510832b",
"packages/codemirror/mode/stex/test.js": "746ce9f2fe858502edebcaf4f81a8fb6",
"packages/codemirror/mode/stex/stex.js": "2a42b803a09b6492c740627aa8231119",
"packages/codemirror/mode/haskell/index.html": "bb95a94733c750dfdbbdcb3804f67d66",
"packages/codemirror/mode/haskell/haskell.js": "188e9cdc1e099ae35528b1bbc9517634",
"packages/codemirror/mode/factor/index.html": "c67b4e60b43cfa0a755dec26be85b73c",
"packages/codemirror/mode/factor/factor.js": "3186f1b451657d5c4344df8e92780128",
"packages/codemirror/mode/php/index.html": "546317423e0da50407404812213bc600",
"packages/codemirror/mode/php/test.js": "ca8bfbf518ae49382b6ea5e84eb7d69c",
"packages/codemirror/mode/php/php.js": "b6d8069073b93d7b2d1dc7ab048d3e37",
"packages/codemirror/mode/pegjs/pegjs.js": "7582424092d95bdff83f77a6805ab812",
"packages/codemirror/mode/pegjs/index.html": "612df95034314e503cacddbc6e0f6d8f",
"packages/codemirror/mode/lua/index.html": "9ce3117fddbb2a33f85c35d9d508be49",
"packages/codemirror/mode/lua/lua.js": "1f5dbbc50ba53d099783a5be6542f5be",
"packages/codemirror/mode/velocity/index.html": "eea078ceb6f581d34b3c69ed6621ee87",
"packages/codemirror/mode/velocity/velocity.js": "2a19cd8c0e4ae0839124369e341cc07e",
"packages/codemirror/mode/xml/index.html": "560f44abd8e87ca5e8969719ecef7808",
"packages/codemirror/mode/xml/test.js": "dc77e42882c5232e4e61ca00bd7b1a70",
"packages/codemirror/mode/xml/xml.js": "e7180867a4312e2e75b2d87253b631d4",
"packages/codemirror/mode/solr/solr.js": "ed95af17d1b7404b6e84929dd0c1a051",
"packages/codemirror/mode/solr/index.html": "7ca18b10ab6c9d4784a47c3816edbc15",
"packages/codemirror/mode/mbox/mbox.js": "ee9589d866520062650ca9783551911e",
"packages/codemirror/mode/mbox/index.html": "19c718609fc5374f7cecd8ef8ad1faf2",
"packages/codemirror/mode/mllike/index.html": "7b518c687782ed52fa6ab58f6166c0f7",
"packages/codemirror/mode/mllike/mllike.js": "a781c2896b17759df680731ab7d0e43e",
"packages/codemirror/mode/vb/index.html": "36389be6cc7728a4ed9b438a62d42097",
"packages/codemirror/mode/vb/vb.js": "7b663384478c4fe1c3afe23447f0092f",
"packages/codemirror/mode/powershell/powershell.js": "707589d82c18c14b4abdfe096770118b",
"packages/codemirror/mode/powershell/index.html": "35e09923a5acf7d61dc5dd8fb70083d4",
"packages/codemirror/mode/powershell/test.js": "4c94d1b1e8d55906451e4d3459ce0cf3",
"packages/codemirror/mode/tornado/index.html": "6590f0793faf59fb5936f22570b17021",
"packages/codemirror/mode/tornado/tornado.js": "bb1ba60fa4280201ed5b0cbfcc4d9c13",
"packages/codemirror/mode/vhdl/vhdl.js": "7949a965bd92fd63af031dac7aedacf6",
"packages/codemirror/mode/vhdl/index.html": "b026a421e673fd482839cd91feffa17a",
"packages/codemirror/mode/tiki/index.html": "91504be8fd1e7eb9899339950524243c",
"packages/codemirror/mode/tiki/tiki.css": "fd660fbbcbd4927ccef28657446cc9f1",
"packages/codemirror/mode/tiki/tiki.js": "4088a9d20b0d104414bbbf5f0423df7d",
"packages/codemirror/mode/clike/index.html": "0ef4d4930a2857af2c8eef8df93dd2e8",
"packages/codemirror/mode/clike/test.js": "6b9fba249936dfa23ddc656679482a43",
"packages/codemirror/mode/clike/scala.html": "9ffbd3a81a136e2fbb7b5b55b88f4337",
"packages/codemirror/mode/clike/clike.js": "c10e194a59fbf098b87f7746bdfe3972",
"packages/codemirror/mode/tcl/index.html": "158304a33509b65399dfcfd3ecd39da9",
"packages/codemirror/mode/tcl/tcl.js": "f8785eae22fa4b58fda177c9452127be",
"packages/codemirror/mode/brainfuck/index.html": "8c3692c7f6888499ac2078721377f71c",
"packages/codemirror/mode/brainfuck/brainfuck.js": "79a74e59c62be8da0bfa4363e206deca",
"packages/codemirror/mode/ttcn/index.html": "fc9fce3757b7ff4a98f0364e0b11ef40",
"packages/codemirror/mode/ttcn/ttcn.js": "c9bd4f760a3eff8cda6aee1db1d13003",
"packages/codemirror/mode/dtd/index.html": "207dc0d27abf2da156f146765a95dd9a",
"packages/codemirror/mode/dtd/dtd.js": "5cd6c2cf2d8bc3e0d622b962e1b6776e",
"packages/codemirror/mode/octave/index.html": "0dc2de9e49cce9538a751bc2170e1c68",
"packages/codemirror/mode/octave/octave.js": "1ec9829ad20c8bc20ca8b9d2bb84fb2e",
"packages/codemirror/mode/properties/index.html": "d264adb079c93dd7add65e7298dd107c",
"packages/codemirror/mode/properties/properties.js": "723d7fbb9ab346d9d35523cb5db79fa1",
"packages/codemirror/mode/verilog/verilog.js": "029e82668a6184a399c38d8e18b3d9cd",
"packages/codemirror/mode/verilog/index.html": "b4834221650ab692883a5ef55880b7f8",
"packages/codemirror/mode/verilog/test.js": "c0f2f5de6d2f56c08f856adf41b18d87",
"packages/codemirror/mode/handlebars/index.html": "06b9d68f270641a5031212b1639e07bf",
"packages/codemirror/mode/handlebars/handlebars.js": "9f3d66612a1d1847a382e12b66820ba4",
"packages/codemirror/mode/nginx/index.html": "d643fc4dc36284180bf6494483de6525",
"packages/codemirror/mode/nginx/nginx.js": "56f0ced02c986ad95bd051d40d5acc9e",
"packages/codemirror/mode/http/index.html": "cfa54788ea5c8d0b4e01d727f72d3452",
"packages/codemirror/mode/http/http.js": "fdef58cb3d8f5b40c73cfb30e59a6446",
"packages/codemirror/mode/asciiarmor/index.html": "49190d2103bd8b41bb8f51a192debbac",
"packages/codemirror/mode/asciiarmor/asciiarmor.js": "eb55333e89f85097bc8bcfa81c9ab964",
"packages/codemirror/mode/swift/index.html": "e64c9675aaeac8de84ccc0e6f2710b32",
"packages/codemirror/mode/swift/test.js": "2ad46959f2198ea2cff554a7da87b073",
"packages/codemirror/mode/swift/swift.js": "338629d0c688e6ce0ad450f1b347a19e",
"packages/codemirror/mode/meta.js": "5c883bdcbff46d373f1941f1b8f2ef4f",
"packages/codemirror/mode/sas/index.html": "0dd6a278eaab3101cc5ae7b010bc1c8b",
"packages/codemirror/mode/sas/sas.js": "aba6e79d51c702f66d9f26b681c5f91f",
"packages/codemirror/mode/sieve/sieve.js": "aa8e65eed7830808be110984a49931af",
"packages/codemirror/mode/sieve/index.html": "5f943aaace5176a9499b9e439aace92b",
"packages/codemirror/mode/livescript/index.html": "113831f1d2a787f40fd062c2eb946f4f",
"packages/codemirror/mode/livescript/livescript.js": "e54e2cfca3d3785fe4c620d2757ccf12",
"packages/codemirror/mode/commonlisp/index.html": "d3585e510eb8e76d91a564347d30d344",
"packages/codemirror/mode/commonlisp/commonlisp.js": "748ed4c3f785fa4b87b04f0e0b3959d4",
"packages/codemirror/mode/fcl/index.html": "e3f6461e977013cd4a5750920bb50bee",
"packages/codemirror/mode/fcl/fcl.js": "b5949770e3c1e433f5fad87c42095632",
"packages/codemirror/mode/yaml/index.html": "59cd0f490ffc1efd240d03e4a99c11a0",
"packages/codemirror/mode/yaml/yaml.js": "d33b338351908a41680b332d817f9209",
"packages/codemirror/mode/fortran/index.html": "da5aadd93447db658ca43d8591a1f7fa",
"packages/codemirror/mode/fortran/fortran.js": "a08f5fda6468965a4704248792f9c246",
"packages/codemirror/mode/julia/index.html": "6035e60c9619cb211f7e0bf27f555fcb",
"packages/codemirror/mode/julia/julia.js": "ff479eba27839acb9c5870afc640771f",
"packages/codemirror/mode/oz/index.html": "02b33d2189f6ec27d60c92cab1f60446",
"packages/codemirror/mode/oz/oz.js": "db9d7b2807ddada66dfd0f511a6d573d",
"packages/codemirror/mode/groovy/index.html": "2965b271320673182f0f4dcf624ed0b8",
"packages/codemirror/mode/groovy/groovy.js": "26b789365d2a15df00a6f59639533d1f",
"packages/codemirror/mode/coffeescript/index.html": "72edb2edaa76b4020ff1d7d99d19d514",
"packages/codemirror/mode/coffeescript/coffeescript.js": "dfa749e618ff05efb6e50ae7883adfaf",
"packages/codemirror/mode/wast/index.html": "5cdba226c70a4a0615d8bc9bae95019e",
"packages/codemirror/mode/wast/test.js": "8fb1063aa30a0f5a213fe5d53b2ddf90",
"packages/codemirror/mode/wast/wast.js": "02a2459af28d934f51b3a39911c180fa",
"packages/codemirror/mode/slim/index.html": "5fb1ed83c40d3f0a6cfa604eb445991e",
"packages/codemirror/mode/slim/slim.js": "7f884377bdb85c39cf25c5ccc0a31cd0",
"packages/codemirror/mode/slim/test.js": "b1070a72a7a750f8668ff306f4b3f6fd",
"packages/codemirror/mode/javascript/typescript.html": "85c64fa97eb3aea7253ff8007a4b11ac",
"packages/codemirror/mode/javascript/index.html": "88e30c080bbf6d30bd250ff2da7fc6e6",
"packages/codemirror/mode/javascript/test.js": "18d94cbd901157a12ce89d714a6348b2",
"packages/codemirror/mode/javascript/javascript.js": "7118da6d8cbfcdd09d9db3cdce135c8d",
"packages/codemirror/mode/javascript/json-ld.html": "5ec91152ceead8349f5367899d70de90",
"packages/codemirror/mode/mscgen/index.html": "c41e8fed0875ca721e9d47d7e34515a7",
"packages/codemirror/mode/mscgen/mscgen_test.js": "2ba2bcdb6fd13857b4eed754f5d914f8",
"packages/codemirror/mode/mscgen/mscgen.js": "89887b24983b67c922120c4137a1f761",
"packages/codemirror/mode/mscgen/msgenny_test.js": "b33d638ea274747c76a1f88198081e1e",
"packages/codemirror/mode/mscgen/xu_test.js": "d25439d4a2f0e64d627e23ded2832a51",
"packages/codemirror/mode/twig/index.html": "2c9007e02760873c5b4859f65706090e",
"packages/codemirror/mode/twig/twig.js": "01afc25826dbe2ca75ff215e7c30710b",
"packages/codemirror/mode/eiffel/index.html": "adfe7ccedd8312f77433ce7f3bdf8ab6",
"packages/codemirror/mode/eiffel/eiffel.js": "7f937e01339a793003b83da8ec77be4f",
"packages/codemirror/mode/cobol/index.html": "b6b468a854d75bd7e985980c72a62fb4",
"packages/codemirror/mode/cobol/cobol.js": "8c768a22236e0138045ed89799a93d61",
"packages/codemirror/mode/sass/index.html": "227723e3b0d14a9068ecd64cf6399f20",
"packages/codemirror/mode/sass/test.js": "22a496e75a436f1c82a6b3eec2da0bb7",
"packages/codemirror/mode/sass/sass.js": "328be5ba718ab58d2e9e4460783d0288",
"packages/codemirror/mode/rpm/index.html": "6c190897dd9eeb450c381bdb97cba11e",
"packages/codemirror/mode/rpm/changes/index.html": "1b70f8a3f1c2d8d43b27f49b1df7f8cf",
"packages/codemirror/mode/rpm/rpm.js": "2d8c369ef93ac930f8ef08c879e8aa63",
"packages/codemirror/mode/mumps/index.html": "b1593a19b047a84e40caf333510577fe",
"packages/codemirror/mode/mumps/mumps.js": "169aa8086cdc923b96ec45208f697f40",
"packages/codemirror/mode/vbscript/index.html": "9b0d8d3ddb3c750f86fc240696d51d51",
"packages/codemirror/mode/vbscript/vbscript.js": "7b6de5261a49ab3c832a90e4983b6a9b",
"packages/codemirror/mode/ttcn-cfg/index.html": "4eae1bd9a14ea7fe511f8b4a13b6b6bb",
"packages/codemirror/mode/ttcn-cfg/ttcn-cfg.js": "bb04f7a901457f04cf3ed7a8a0f87d65",
"packages/codemirror/mode/forth/index.html": "c9c8e076b5b4568ba2beeea9e8e9feca",
"packages/codemirror/mode/forth/forth.js": "8510f1145a1b153c316f0606e1ad374c",
"packages/codemirror/mode/puppet/index.html": "1c148d153160e7197a599c0c4647696b",
"packages/codemirror/mode/puppet/puppet.js": "c3aafd16fbdc1a6dcbb1dbfdb31183c1",
"packages/codemirror/mode/django/index.html": "11399e3feef8495d4e8d6e2eb87d4503",
"packages/codemirror/mode/django/django.js": "1f660d46bb1ddb833b87fd6189abb4f4",
"packages/codemirror/mode/d/index.html": "44197449b97a36dcd74434530e3ac18b",
"packages/codemirror/mode/d/test.js": "dd29d1c65c916e4c2f38a82e323108d3",
"packages/codemirror/mode/d/d.js": "8c190818ce282cf9cbd83ccad3507b70",
"packages/codemirror/mode/q/index.html": "6b1e9d13c2436232db2deee55dffd49a",
"packages/codemirror/mode/q/q.js": "3f7e78ee46fa43d774686489b39b77e0",
"packages/codemirror/mode/jsx/jsx.js": "ffb351f9d703ba77639ae164e0987bb1",
"packages/codemirror/mode/jsx/index.html": "bebca20eff9ae8d82b2649619efb85a3",
"packages/codemirror/mode/jsx/test.js": "551fd738e0d46be2b08084c11932a1f1",
"packages/codemirror/mode/protobuf/index.html": "2e852f94f33edaf7f14b18d053cab3e9",
"packages/codemirror/mode/protobuf/protobuf.js": "849ad39ab76ea5657ce47e3edcc66a31",
"packages/codemirror/mode/gfm/index.html": "9049167f1628b5c43062f3d7eb6622c0",
"packages/codemirror/mode/gfm/test.js": "19628730fa1ddd394d9079417015fa8a",
"packages/codemirror/mode/gfm/gfm.js": "11b5a43c797f117e29475c8d6e3afd98",
"packages/codemirror/mode/ecl/index.html": "82fa311ae4aba13c88655c6025f999ea",
"packages/codemirror/mode/ecl/ecl.js": "c7abe57f6fd714f061681c5cce5c58d6",
"packages/codemirror/mode/ruby/index.html": "60faf7dbc6ed8218a7ecc5313379cbac",
"packages/codemirror/mode/ruby/test.js": "401c383ae5913940e1b0e1c4da3ad68c",
"packages/codemirror/mode/ruby/ruby.js": "d153c723dc23c4a03958818db16e4c89",
"packages/codemirror/mode/mirc/index.html": "6d3d0fd1d9456b0d47e4db730b5eef6e",
"packages/codemirror/mode/mirc/mirc.js": "4f3f6fe737a0a37a5c6bed2d113f372d",
"packages/codemirror/mode/haskell-literate/index.html": "f279b09c73d466de4fdbca9165b03a50",
"packages/codemirror/mode/haskell-literate/haskell-literate.js": "f90fcf952ebbc37024825c0378cf781a",
"packages/codemirror/mode/ntriples/index.html": "83f290e275bdbbd5ec172e64571aec74",
"packages/codemirror/mode/ntriples/ntriples.js": "842f359573c053063bfddd1c980f3cac",
"packages/codemirror/mode/sql/index.html": "91f74a33b9232251058426d1e16e9dce",
"packages/codemirror/mode/sql/sql.js": "82a49e157fefcaaf6d9253455c8241ca",
"packages/codemirror/codemirror.css": "e14233d23fee51f1b6f22ad2ba647069",
"packages/codemirror/theme/icecoder.css": "75c94576d53c64cc92cd84f4ca2db274",
"packages/codemirror/theme/material-ocean.css": "fd2c53a0057c36df05f00d6cd73191cd",
"packages/codemirror/theme/xq-light.css": "3d6e922075daca6b0f8cace5c4a441af",
"packages/codemirror/theme/the-matrix.css": "3cc8ba485ddf4f8b7128debab1c664d4",
"packages/codemirror/theme/neo.css": "2886072b53043c167e6f8765606c705c",
"packages/codemirror/theme/lesser-dark.css": "d10b455f6c2790a9889755cd089d4137",
"packages/codemirror/theme/3024-day.css": "73c8f41583b4b71dbe1e5eac5c96f1a9",
"packages/codemirror/theme/hopscotch.css": "b924ed31af30b1c68e5a01fc3c9b0553",
"packages/codemirror/theme/liquibyte.css": "f9b47b8807f6472cb292114e0e69edf5",
"packages/codemirror/theme/midnight.css": "2696d4e2830c1bf32e17b49727cee186",
"packages/codemirror/theme/duotone-light.css": "8f5b2f0dfd4c6f38fd753b7d87954868",
"packages/codemirror/theme/elegant.css": "0a4227e805a9d5f73a55dd248c1b052d",
"packages/codemirror/theme/mbo.css": "55ff4bdd8a92c3dcbfd5421c532b3059",
"packages/codemirror/theme/nord.css": "cf1d3224d0e1272d96a0395368f26430",
"packages/codemirror/theme/material.css": "a40a918802530d402db8e194bab31ba7",
"packages/codemirror/theme/ttcn.css": "81cd4e786c819d0af356740e5024e453",
"packages/codemirror/theme/mdn-like.css": "07c2ae05cb4ae14d5445b543aca4b789",
"packages/codemirror/theme/xq-dark.css": "3de4363e29db5a4e58e8bb3e6d23fee8",
"packages/codemirror/theme/base16-light.css": "9c40338a652bd2293c35eab3c2cadab4",
"packages/codemirror/theme/yonce.css": "76a77ae36b82353c301f47c573052b66",
"packages/codemirror/theme/gruvbox-dark.css": "2a76022ff4c347a04c566df8a3ffbd96",
"packages/codemirror/theme/isotope.css": "7bb44bff5190c427de5ae750d6369633",
"packages/codemirror/theme/material-darker.css": "ec3bed26db530efd410358b94032d9c5",
"packages/codemirror/theme/ambiance.css": "8996c0efee66bcc2fe2f52763b9da6e8",
"packages/codemirror/theme/darcula.css": "c87f6374b9e4d49dfea1d5c8b3a4ebfc",
"packages/codemirror/theme/paraiso-dark.css": "3c24cee0dfac767713840b24e8359c99",
"packages/codemirror/theme/lucario.css": "e1d25281a0300914a8f3b2ee9f2a5b58",
"packages/codemirror/theme/erlang-dark.css": "ff1cf820cb27d21dc9c5b65cab7c4a8c",
"packages/codemirror/theme/colorforth.css": "a4497729649571f95f2fbd660fc3e0f7",
"packages/codemirror/theme/twilight.css": "4c9c1070a2d03127c217f39bcb5a9c33",
"packages/codemirror/theme/3024-night.css": "745180be9a932f24c6c0dd4ebdf5a0ed",
"packages/codemirror/theme/vibrant-ink.css": "62e4abf3c908bbcdae55bc270b942801",
"packages/codemirror/theme/monokai.css": "01f520b8bd3533f2ca06b6dc4a0886b7",
"packages/codemirror/theme/idea.css": "ff87f4fad8fa110765f12d5af30aca66",
"packages/codemirror/theme/dracula.css": "41905bdb70daf702a6089a4b094e3e21",
"packages/codemirror/theme/base16-dark.css": "84b6347918411d58d7f9b65a7ee87f65",
"packages/codemirror/theme/zenburn.css": "5c6c0c11489f09296e4522771ebd9f01",
"packages/codemirror/theme/shadowfox.css": "04f429186495a99c1d69e82b361a747c",
"packages/codemirror/theme/neat.css": "6b19894b9787c6791c250a95d0d4f8d6",
"packages/codemirror/theme/blackboard.css": "cf9366960ff65c8101793bc64fe13e88",
"packages/codemirror/theme/moxer.css": "0e71eed5ad381591e741745d092039f8",
"packages/codemirror/theme/tomorrow-night-eighties.css": "5ceb5531fbe074d5190b55e8c725051e",
"packages/codemirror/theme/night.css": "fb6733bae4b418acc71e54423a8cce6f",
"packages/codemirror/theme/paraiso-light.css": "e245bbfd22b4f61efe526ff13903f19e",
"packages/codemirror/theme/eclipse.css": "1e58608d9e179397a43f51d8973f647f",
"packages/codemirror/theme/railscasts.css": "a5e7682d89da46244e5464d9572e24d8",
"packages/codemirror/theme/tomorrow-night-bright.css": "777d36e1c5bbfeb3bf2ca8dd607eee93",
"packages/codemirror/theme/solarized.css": "8abc9a364ebf7c00a44b72c1d92488a4",
"packages/codemirror/theme/seti.css": "225db574f347785986fe6bff476ccc49",
"packages/codemirror/theme/ayu-dark.css": "3e94a83580af1936a6ad6b38ccaf6621",
"packages/codemirror/theme/panda-syntax.css": "9ca57cb364b1c72cd8f15603425f0df1",
"packages/codemirror/theme/abcdef.css": "b58c93881a92a0991d427679181aa6b2",
"packages/codemirror/theme/duotone-dark.css": "8c1e7bcddd0ffe9049941a5983cca37f",
"packages/codemirror/theme/cobalt.css": "3428fab27f67b7795284457d84c3b1b9",
"packages/codemirror/theme/ayu-mirage.css": "048659c7669ab4ac3c418e4aee533e32",
"packages/codemirror/theme/rubyblue.css": "7e608c21084c30b01de49c3e4eca05fc",
"packages/codemirror/theme/pastel-on-dark.css": "4066167a1a40fdb6a2b80f56dc8060dd",
"packages/codemirror/theme/ambiance-mobile.css": "256f2dd130b80c6afaa40fddf700d12a",
"packages/codemirror/theme/material-palenight.css": "c7f1232b8e8d8894ce9a4b3556574742",
"packages/codemirror/theme/bespin.css": "cc414e4ec18bc89b3c79935b0e27fc20",
"packages/codemirror/theme/yeti.css": "ca86cdbcc6672dbc7ef69007c9a37fc1",
"packages/codemirror/theme/oceanic-next.css": "677084b334831e83d67ff7413a83bd2e",
"packages/codemirror/theme/ssms.css": "02ff81d8fbd29d5aa6f205452440da4c",
"packages/codemirror/keymap/sublime.js": "6932832a8d037acadc316e53265a45fe",
"packages/codemirror/keymap/emacs.js": "ad9996d596456b524bdedd489f8a2e69",
"packages/codemirror/keymap/vim.js": "8f9fae1c2a23598bedb2b2ad1a77c6e3",
"packages/codemirror/addon/hint/anyword-hint.js": "736f4c0aa67db12cf39097f3d1790c8b",
"packages/codemirror/addon/hint/show-hint.css": "49647712414ff96d5846de9736b5dbd3",
"packages/codemirror/addon/hint/show-hint.js": "a4b9ee4eff28f484aa38253ed805eac5",
"packages/codemirror/addon/hint/xml-hint.js": "908d7e99c8c07d401e788ef00485707e",
"packages/codemirror/addon/hint/html-hint.js": "35e9e7388ff9d518a0b7bbe9f84eb220",
"packages/codemirror/addon/hint/sql-hint.js": "85ade153b28be7a1d65e3defef3d4204",
"packages/codemirror/addon/hint/css-hint.js": "1049d08c9c74c2ed27e738f0da2a2e80",
"packages/codemirror/addon/hint/javascript-hint.js": "12a6b852141825b4063bdad12ae14ce4",
"packages/codemirror/addon/lint/json-lint.js": "dcfd194ca63e175996aaea2b3a58b598",
"packages/codemirror/addon/lint/coffeescript-lint.js": "140f1a44841627e860cafd955e89f4e7",
"packages/codemirror/addon/lint/yaml-lint.js": "eabad9dfc99d98d6995c37fce194c28c",
"packages/codemirror/addon/lint/lint.js": "38aee26c6cc0230caaaf91d98a0f82eb",
"packages/codemirror/addon/lint/lint.css": "38bcf3d24ae7346e744b1eeebe8aa106",
"packages/codemirror/addon/lint/javascript-lint.js": "6b44c033c0c0da17a4d040162376ff1e",
"packages/codemirror/addon/lint/css-lint.js": "6a6166008cb94a6d62e05dc2cab7fc16",
"packages/codemirror/addon/lint/html-lint.js": "4ce658b4b1c2cacb8a2685effa0ed4eb",
"packages/codemirror/addon/scroll/annotatescrollbar.js": "dc0594f492c4dbdf733629462d93bd6f",
"packages/codemirror/addon/scroll/simplescrollbars.js": "13948e6ef35e3c3d2c65de096af58721",
"packages/codemirror/addon/scroll/simplescrollbars.css": "0352ba51fd6a422fe6cc44925e33ad88",
"packages/codemirror/addon/scroll/scrollpastend.js": "92a24e9251be0dc620c11cb61919293f",
"packages/codemirror/addon/mode/multiplex_test.js": "f313de7a57a77f621db3901b372dd4c7",
"packages/codemirror/addon/mode/overlay.js": "4f8e4dcaeb7c237cbe4f1f69972cdc8a",
"packages/codemirror/addon/mode/simple.js": "f4afab5587907ec45562d004c6b9564f",
"packages/codemirror/addon/mode/loadmode.js": "a8f6bf0583e09f72f9ba4fb67934c8ff",
"packages/codemirror/addon/mode/multiplex.js": "c132001d1069500044698fa187886c8d",
"packages/codemirror/addon/merge/merge.js": "d3d64e702fa39b42e79b7f16737eee97",
"packages/codemirror/addon/merge/merge.css": "d4009e57cbbb2c969147cf233671ba42",
"packages/codemirror/addon/comment/continuecomment.js": "fb48559dde9c182746377b2184baa044",
"packages/codemirror/addon/comment/comment.js": "4db2ea23b206be3a25db7cc4503f7688",
"packages/codemirror/addon/search/matchesonscrollbar.js": "b7dfa5fd6a57e306bf7ce99542819883",
"packages/codemirror/addon/search/jump-to-line.js": "941fc6db726493ed92283c6cfbb07e6c",
"packages/codemirror/addon/search/match-highlighter.js": "f766ada296450e3104861a96c3124f9c",
"packages/codemirror/addon/search/searchcursor.js": "b23aa921bb6f30235bf58d81b53087af",
"packages/codemirror/addon/search/search.js": "493c2f9141b28cf8504febf3e6c117a2",
"packages/codemirror/addon/search/matchesonscrollbar.css": "00ea2770c568a848190bcf52e4241276",
"packages/codemirror/addon/dialog/dialog.js": "678f0365b883edd0669a1f8cd30de72d",
"packages/codemirror/addon/dialog/dialog.css": "c89dce10b44d2882a024e7befc2b63f5",
"packages/codemirror/addon/edit/continuelist.js": "f74799082011d798b51464171ba76233",
"packages/codemirror/addon/edit/closetag.js": "35e0152da763f2191d124d5f7da2bd98",
"packages/codemirror/addon/edit/matchtags.js": "d0c67185e94d3a096299b680c0fca7d6",
"packages/codemirror/addon/edit/closebrackets.js": "01ab336f9f0dabd53067d50340509e0d",
"packages/codemirror/addon/edit/matchbrackets.js": "0b6e5e59b34f51f8086bd1e39092bc12",
"packages/codemirror/addon/edit/trailingspace.js": "81d50700cee8c27e0e311de3650851bc",
"packages/codemirror/addon/wrap/hardwrap.js": "93b4e50b967a2f31b18bd769f86a8664",
"packages/codemirror/addon/fold/xml-fold.js": "b88e73a8e7bdc8b032adfd5047dfe2c5",
"packages/codemirror/addon/fold/foldgutter.js": "2e6a4ca9c0f057daaecbc330d8f96bc0",
"packages/codemirror/addon/fold/brace-fold.js": "553db85a7c6ca20c789294d14dcdab45",
"packages/codemirror/addon/fold/comment-fold.js": "9b289797886789d2ce7f40e3f7408c9e",
"packages/codemirror/addon/fold/foldgutter.css": "38bb68770b6f7ebaa7adea770a68e0b1",
"packages/codemirror/addon/fold/markdown-fold.js": "6e3228db96bbadbb93c79922ecd88ce0",
"packages/codemirror/addon/fold/foldcode.js": "c5738021d8e4f05999da94c1cbdfbd18",
"packages/codemirror/addon/fold/indent-fold.js": "5017f49481f30946bd4229a6d05d5fcc",
"packages/codemirror/addon/display/rulers.js": "38aaf61e611edfe39883f46f89b0b91b",
"packages/codemirror/addon/display/autorefresh.js": "a8525e557b32a9ff330db311f444058b",
"packages/codemirror/addon/display/fullscreen.css": "1a278e72b51528270f8ce9ec991929a1",
"packages/codemirror/addon/display/placeholder.js": "77081e1f1910c1a8516271597f6df100",
"packages/codemirror/addon/display/panel.js": "4db87a29275267eb92ffb2178339a4ba",
"packages/codemirror/addon/display/fullscreen.js": "744a9a476b90075936f58ebb8b35ac85",
"packages/codemirror/addon/selection/selection-pointer.js": "ae80c5e4d54f8ccb07c6373e66f523a4",
"packages/codemirror/addon/selection/active-line.js": "30fc5d6c1847dc207bd0e38c0e97e789",
"packages/codemirror/addon/selection/mark-selection.js": "c0240b66ae29bda93e80be5e60c9ed8d",
"packages/codemirror/addon/tern/tern.css": "4d57ced774b5f3fa9f00dfa398e74819",
"packages/codemirror/addon/tern/worker.js": "6866b3b6f236f5ae8b89e15b5cf167e1",
"packages/codemirror/addon/tern/tern.js": "be96bd33924874f09dc1290c8b6d6ef0",
"packages/codemirror/addon/runmode/runmode.node.js": "927bbe34a90959bc1c2120abb9872880",
"packages/codemirror/addon/runmode/runmode-standalone.js": "15fecabab6f4e1bf560920f8b063507d",
"packages/codemirror/addon/runmode/colorize.js": "c8fb49ed714798e04bc3d0289b19efa4",
"packages/codemirror/addon/runmode/runmode.js": "da396eed45497ab0e4dcf016ba087ad0",
"manifest.json": "e47c7a73cce1dc7e5fa0bf2aef97741b",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "4b2293304ba8860c34425a0a87371651",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "27206588da6d3d24f71ec64067b75eb0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
