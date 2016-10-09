/**
 * Created by nguye on 10/9/2016.
 */
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

$("#template-name").text(decodeURI(GetURLParameter("name")));
$("#template-img").attr("src", decodeURI(GetURLParameter("src")));