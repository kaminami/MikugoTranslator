MikugoTranslator
================

ミク語変換 (http://aikelab.net/mikugo/) を利用するためのラッパーライブラリ。

## Requirements
* jQuery


## Example
```JavaScript

var sentence = 'ミク語変換を利用するためのラッパーライブラリ。';
var translator = new Mikugo.Translator();
translator.translate(sentence, function(translated) {
    console.log(translated);
    // mi ku go he n ka n o 　 ri yo o su ru ta me no 　 ra a pa a ra i bu ra ri
});
```


## License
MIT