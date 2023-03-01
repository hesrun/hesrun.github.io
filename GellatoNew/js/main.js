let scTop;
let HeaderH = $('.main-header').height();

$('.catalog-nav__btn').click(function(){
    $('.catalog-nav').toggleClass('catalog-nav_active');
    $('body').toggleClass('hidden');
    $('.catalog-nav__drop').fadeToggle(300);
    $('.fa-solid ').toggleClass('fa-bars fa-xmark')
})


/* ------------------------------- mobile menu ------------------------------ */
$('.main-header__lang-current').click(function(){
    $(this).toggleClass('active').next().toggle();
}) 

$('.header-mobile__lang-current').click(function(){
    $(this).next().slideToggle(100);
}) 

$('.header-mobile__menu-open').click(function(){
    $(this).toggleClass('active').find('.fa-solid ').toggleClass('fa-bars fa-xmark');
    $('.header-mobile__nav').fadeToggle(300);
    $('.header-mobile__bottom').toggleClass('active');
})

$('.has-sub').click(function(){
    $(this).next().fadeIn();
    return false;
})
$('.header-mobile__close-sub').click(function(){
    $(this).parent().fadeOut();
})

/* ------------------------------- mobile menu end ------------------------------ */


function Device(x) {
    if (!x.matches) {
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
    } else {
        console.log('gfgf');
        $(window).scroll(function(){
            scTop = $(this).scrollTop();
            if (scTop > 65){
                $('.header-mobile__bottom').addClass('sticky')
            }
            else {
                $('.header-mobile__bottom').removeClass('sticky')
            }
        })
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)");
  Device(x);
  x.addListener(Device);