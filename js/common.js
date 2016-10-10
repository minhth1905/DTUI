/**
 * Created by nguye on 10/9/2016.
 */
function findMockup(mockups, id) {
    for (var i = 0; i < mockups.length; i++) {
        if (mockups[i].id == id) {
            return mockups[i];
        }
    }
}

function getCategoryIcon24x24(mockup) {
    return "images/icons/24x24/" + mockup.category + ".png";
}

function getPreviewImage(mockup) {
    return "images/mockups/" + mockup.category + "/" + mockup.preview_filename;
}

function getImage(mockup) {
    return "images/mockups/" + mockup.category + "/" + mockup.preview_filename;
}

$.getJSON("json/mockups.json", function (mockups) {
    onMockupLoaded(mockups);
});

function randomMockupId(mockups, excludes) {
    var rand_id;
    do {
        rand_id = Math.round(Math.random() * (mockups.length - 1) + 1);
    } while (contains(excludes, rand_id));
    return rand_id;
}

function contains(array, id) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == id) {
            return true;
        }
    }
    return false;
}

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