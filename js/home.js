/**
 * Created by nguye on 10/9/2016.
 */
$("#searchBtn").click(function () {
    window.location.href = "Search.html";
});

function onMockupLoaded(mockups) {
    var ids = [];
    for (var box = 0; box < 20; box++) {
        var rand_id = randomMockupId(mockups, ids);
        ids.push(rand_id);
        var mockup = findMockup(mockups, rand_id);
        $("#template").append($("<div>").addClass("shakira-box").attr("mockup-id", mockup.id)
            .append($("<img>").addClass("preview").attr("src", getPreviewImage(mockup)))
            .append($("<div>").addClass("icon_0")
                .append($("<img>").attr("src", getCategoryIcon24x24(mockup))))
            .append($("<div>").addClass("shakira-content")
                .append($("<h2>").addClass("shakira-header").text(mockup.short_name))
                .append($("<p>").addClass("shakira-body")
                    .append($("<i>").addClass("fa fa-thumbs-o-up"))
                    .append("13,86")
                    .append($("<i>").addClass("fa fa-eye"))
                    .append("12,56")
                    .append($("<i>").addClass("fa fa-download"))
                    .append("11,54")
                )
            )
        )
    }
    $(".shakira-box").click(function () {
        var id = $(this).attr("mockup-id");
        window.location.href = "details.html?id=" + id;
    });
}