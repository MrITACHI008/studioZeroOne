$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
    });
});


const menu = document.getElementById('bar');
const items = document.getElementById('navbar');

items.style.right = "-360px"

menu.onclick = function(e) {
    if (items.style.right === "-360px") {
        items.style.right = "0";
    } else {
        items.style.right = "-360px";
    }
};