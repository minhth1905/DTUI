/**
 * Created by nguye on 10/9/2016.
 */
$("#searchBtn").click(function () {
    var temp = $("#input-search").val().trim();
    if (temp != "") {
        location.href = "Search.html?key=" + encodeURI(temp);
    }
});

$("#input-search").on("keyup", function (event) {
    if (event.keyCode == 13) {
        $("#searchBtn").click();
    }
});

function onMockupLoaded(mockups) {
    randomMockup(mockups, 20, "#template");
}

$("#tag-list").find("a").each(function () {
    var key = $(this).text();
    $(this).attr("href", "Search.html?key=" + encodeURI(key));
});