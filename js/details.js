/**
 * Created by nguye on 10/9/2016.
 */

function onMockupLoaded(mockups) {
    var id = GetURLParameter("id");
    var mockup = findMockup(mockups, id);
    $("#template-name").text(mockup.name);
    $("#template-img").attr("src", getImage(mockup));
}
