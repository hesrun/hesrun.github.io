var scTop = 0;


$(window).scroll(function(){
    scTop = $(this).scrollTop();
    if (scTop > 400) {
        $('.main-header').addClass('mini');
    } else {
        $('.main-header').removeClass('mini');    
    }
})

$('.burger-btn').click(function(){
    $('.side-menu').toggleClass('open');
})

$('#ShowSearch').click(function(){
    $('#HeadSearch').fadeIn(300);
    return false;
})
$('#HeadSearch .close').click(function(){
    $('#HeadSearch').fadeOut(300);
    return false;
})