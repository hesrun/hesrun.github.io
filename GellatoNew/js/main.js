let scTop;
let HeaderH = $('.main-header').height();

$('.catalog-nav__btn').click(function(){
    $('.catalog-nav').toggleClass('catalog-nav_active');
    $('body').toggleClass('hidden');
    $('.catalog-nav__drop').fadeToggle(300);
    $('.fa-solid ').toggleClass('fa-bars fa-xmark')
})

$('.main-header__lang-current').click(function(){
    $(this).toggleClass('active').next().toggle();
}) 


function Device(x) {
    if (!x.matches) { // If media query matches
        $(window).scroll(function(){
            scTop = $(this).scrollTop();
            if (scTop > 300){
                $('.main-header').addClass('main-header_sticky');
                $('.main-header__logo').after($('.catalog-nav') );
                $('body').css({
                    paddingTop: HeaderH
                })
            }
            else {
                $('.main-header').removeClass('main-header_sticky');
                $('.main-header__nav').prepend($('.catalog-nav') );
                $('body').removeAttr('style');
            }
        })
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)");
  Device(x);
  x.addListener(Device);