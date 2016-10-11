/**
 * Created by nguye on 10/9/2016.
 */
$(function () {
    $("#buttom-search").click(function () {
        var tmp = $("#input-search").val();
        location.href = "Search.html?key=" + tmp;
    });
});

function onMockupLoaded(mockups) {
    randomMockupId(mockups, 20);
}

$("#tag-list").find("a").each(function () {
    var key = $(this).text();
    $(this).attr("href", "Search.html?key=" + encodeURI(key));
});