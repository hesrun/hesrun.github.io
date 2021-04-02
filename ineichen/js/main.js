var scTop = 0,
    header = $('.main-header');

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    console.log(scTop);
    if (scTop > 400) {
        header.addClass('white');
        if (scTop > 800) {
            header.addClass('mini');
        } else {
            header.removeClass('mini');    
        }
    } else {
        header.removeClass('white');
    }
})