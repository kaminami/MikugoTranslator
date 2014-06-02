var Mikugo

(function(Mikugo) {
    var Translator = (function() {
        function Translator() {
        };

        Translator.prototype.requestUrl = function(sentence) {
            var url = 'http://aikelab.net/mikugo/api.cgi';
            var options = [
                'chouon=Y',
                'bunsetsu=Y',
                'romaji=Y',
                'encoding=UTF-8',
                'type=jsonp'
            ];
            var encodedSentence = encodeURIComponent(sentence);

            var requestUrl = url + '?' + options.join('&') + '&sentence=' + encodedSentence;
            return requestUrl;
        };

        Translator.prototype.translate = function(sentence, resultCallback) {
            var self = this;

            var url = this.requestUrl(sentence);
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'jsonp',
                success: function(rawResult){
                    resultCallback(rawResult.result)
                }
            });
        };

        return Translator;
    })();
    Mikugo.Translator = Translator;

})(Mikugo || (Mikugo = {}));