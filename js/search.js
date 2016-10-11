$('.show-menu').click(function () {
    $('#menu-phone').slideToggle('slow');
});

var _mockups;

function onMockupLoaded(mockups) {
    _mockups = mockups;
    var length = mockups.length;
    $(".number-template").text(length + " ");
    randomMockup(mockups, 20);
}

function reload() {
    $("#template").empty();
    randomMockup(_mockups, 20);
}

var menu = $("#menu");
function selectCategory(category) {
    menu.find("li[category=\"" + category + "\"]").each(function () {
        $(this).addClass("selected");
    });
    menu.find("li").each(function () {
        var _category = $(this).attr("category");
        if (category == _category) {
            $(this).addClass("selected");
        } else {
            $(this).removeClass("selected");
        }
    });
}

var key = GetURLParameter("key");
if (!!key) {
    $(".value-search").val(decodeURI(key));
}

var category = GetURLParameter("category");
if (!!category) {
    selectCategory(category);
}

menu.find("li").click(function () {
    var _category = $(this).attr("category");
    if (!!_category) {
        selectCategory(_category);
        reload();
        history.pushState({}, null, "Search.html");
    }
});

var paging_holder = $("#paging-holder");
function selectPage(page) {
    paging_holder.find(".current").removeClass("current");
    $(page).addClass("current");
    var p = $(page).find("a").text();
    if (p == 1) {
        paging_holder.find(".page-jump.back").addClass("disabled");
        paging_holder.find(".page-jump.next").removeClass("disabled");
    } else if (p == 10) {
        paging_holder.find(".page-jump.back").removeClass("disabled");
        paging_holder.find(".page-jump.next").addClass("disabled");
    } else {
        paging_holder.find(".page-jump.back").removeClass("disabled");
        paging_holder.find(".page-jump.next").removeClass("disabled");
    }
    reload();
    $("html, body").animate({scrollTop: 0}, "slow");
}

paging_holder.find("li").click(function () {
    if ($(this).hasClass("page-number") && !$(this).hasClass("current")) {
        selectPage(this);
    } else if ($(this).hasClass("page-jump") && !$(this).hasClass("disabled")) {
        var id = $(this).attr("id");
        if (id == "first-page") {
            selectPage(paging_holder.find(".page-number").first());
        } else if (id == "previous-page") {
            selectPage(paging_holder.find(".current").prev());
        } else if (id == "next-page") {
            selectPage(paging_holder.find(".current").next());
        } else if (id == "last-page") {
            selectPage(paging_holder.find(".page-number").last());
        }
    }
});

$(".tag-list").find("a").click(function () {
    var key = $(this).text();
    $(".value-search").val(key);
    reload();
});

$("#sortby").find("a").click(function () {
    reload();
});

$("#search").find("a").click(function () {
    reload();
});