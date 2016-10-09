/**
 * Created by nguye on 10/9/2016.
 */
$("#searchBtn").click(function () {
    window.location.href = "Search.html";
});

$(".shakira-box").click(function () {
    var name = $(this).find(".shakira-header").text();
    var src = $(this).find(".preview").attr('src');
    window.location.href = "details.html?name=" + name + "&src=" + src;
});