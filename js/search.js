/**
 * Created by nguye on 10/10/2016.
 */
$('.show-menu').click(function () {
    $('#menu-phone').slideToggle('slow');
});

function onMockupLoaded(mockups) {
    var key_param = GetURLParameter("key");
    if (!!key_param) {
        $(".value-search").val(decodeURI(key_param.trim()));
    }

    var category_param = GetURLParameter("category");
    $("#menu").find("li").each(function () {
        var category = $(this).attr("category");
        if (category == category_param) {
            $(this).addClass("selected");
        } else {
            $(this).removeClass("selected");
        }
        var key = $(".value-search").val();
        $(this).find("a").attr("href", "Search.html?category=" + category + "&key=" + encodeURI(key));
    });

    $("#tag-list").find("a").each(function () {
        var key = $(this).text();
        $(this).attr("href", "Search.html?category=" + category_param + "&key=" + encodeURI(key));
    });

    var p_param = GetURLParameter("p");
    if (!!p_param) {
        p_param = 1;
    }
    if (p_param == 1) {
        $("#first-page").addClass("disabled");
        $("#previous-page").addClass("disabled");
        $("#next-page").removeClass("disabled");
        $("#last-page").removeClass("disabled");
    } else if (p_param > 1 && p_param < 10) {
        $("#first-page").removeClass("disabled");
        $("#previous-page").removeClass("disabled");
        $("#next-page").removeClass("disabled");
        $("#last-page").removeClass("disabled");
    } else if (p_param == 10) {
        $("#first-page").removeClass("disabled");
        $("#previous-page").removeClass("disabled");
        $("#next-page").addClass("disabled");
        $("#last-page").addClass("disabled");
    }
    $(".page-number").each(function () {
        var p = $(this).find("a").text();
        if (p == p_param) {
            $(this).addClass("current-page");
            $(this).find("a").attr("href", null);
        } else {
            $(this).removeClass("current-page");
            $(this).find("a").attr("href", "Search.html?p=" + p + "&category=" + category_param + "&key=" + key_param);
        }
    });
}
