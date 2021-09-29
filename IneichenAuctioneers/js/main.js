$(document).ready(function() {
    var scTop = 0;
    $(window).scroll(function(){
        scTop = $(this).scrollTop();
        if (scTop > 300) {
            $('.header').addClass('header_mini')
        } else {
            $('.header').removeClass('header_mini')
        }
    })
});