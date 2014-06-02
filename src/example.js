window.onload = function() {
    document.getElementById('translateButton').onclick = function(event) {
        $("#translated").empty();
        var sentence = $("#sentence").val().trim();

        var translator = new Mikugo.Translator();
        translator.translate(sentence, function(translated) {
            console.log(translated);
            $("#translated").text(translated);
        });
    };
}