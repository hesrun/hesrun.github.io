var scTop = 0;


$(window).scroll(function(){
    scTop = $(this).scrollTop();
    if (scTop > 200) {
        $('.main-header.clear').addClass('white');
        if (scTop > 800) {
            $('.main-header').addClass('mini');
        } else {
            $('.main-header').removeClass('mini');    
        }
    } else {
        $('.main-header.clear').removeClass('white');
    }
})