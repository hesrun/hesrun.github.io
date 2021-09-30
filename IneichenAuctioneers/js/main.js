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
    $('.auction-item').each(function(){
        AOS.init({
            once: true
        });
    })
    $('.lot-item').each(function(){
        AOS.init({
            once: true
        });
    })

    $('.lot-item__favorite').click(function() {
        $(this).toggleClass('lot-item__favorite_active')
        return false;
    })
});