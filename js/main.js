$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40){
            $('.navbar').addClass("fixed-top");
            $('.navbar .navbar-brand img').attr('src','images/logo-theme.svg');
            $('.navbar .navbar-toggler img').attr('src','images/icons/menu-theme.png');
        }
        else {
            $('.navbar').removeClass("fixed-top");
            $('.navbar .navbar-brand img').attr('src', 'images/logo.png');
            $('.navbar .navbar-toggler img').attr('src', 'images/icons/menu.svg');
        }
    });
});