/**
 * Created by nguye on 10/9/2016.
 */

function onMockupLoaded(mockups) {
    var id = GetURLParameter("id");
    var mockup = findMockup(mockups, id);
    $("#template-name").text(mockup.name);
    $("#template-img").attr("src", getImage(mockup));
}
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
