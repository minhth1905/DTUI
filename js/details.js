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

function onMockupLoaded(mockups) {
    var id = GetURLParameter("id");
    var mockup = findMockup(mockups, id);
    $("#template-name").text(mockup.name);
    $("#template-img").attr("src", getImage(mockup));
}
