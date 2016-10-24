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

function randomMockup(mockups, size, id) {
    var ids = [];
    for (var box = 0; box < size; box++) {
        var rand_id = randomMockupId(mockups, ids);
        ids.push(rand_id);
        var mockup = findMockup(mockups, rand_id);
        var rand_like = Math.round(Math.random() * 999);
        var rand_see = Math.round(Math.random() * 999);
        var rand_down = Math.round(Math.random() * 999);
        $(id).append($("<div>").addClass("shakira-box").attr("mockup-id", mockup.id)
            .append($("<img>").addClass("preview").attr("src", getPreviewImage(mockup)))
            .append($("<div>").addClass("icon_0")
                .append($("<img>").attr("src", getCategoryIcon24x24(mockup))))
            .append($("<div>").addClass("shakira-content")
                .append($("<h2>").addClass("shakira-header").text(mockup.short_name))
                .append($("<p>").addClass("shakira-body")
                    .append($("<i>").addClass("fa fa-thumbs-o-up"))
                    .append(rand_like)
                    .append($("<i>").addClass("fa fa-eye"))
                    .append(rand_see)
                    .append($("<i>").addClass("fa fa-download"))
                    .append(rand_down)
                )
            )
        )
    }
    $(".shakira-box").click(function () {
        var id = $(this).attr("mockup-id");
        window.location.href = "details.html?id=" + id;
    });
}

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