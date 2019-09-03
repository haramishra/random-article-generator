$(document).ready(function () {
    var appi = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
    var ppi = "&format=json&origin=*";

    $('#button').click(function () {
        var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#search").val() + "&format=json&origin=*";
        console.log(api);
        $.getJSON(api, function (json) {

            for (var i = 0; i < json[1].length; i++) {

                $('#txts').append("<div id = 'text'>" + json[1][i] + '<br>' + json[2][i] + '<br>' + '<a href="' + json[3][i] + '" target = "blank">' + 'click for more info' + '</a>' + '<br>' + '<br>' + '</div>');
                $('#text').slideUp(2000);

            }
        });

    });

});

function fun() {
    $("#txts").text(" ");
}