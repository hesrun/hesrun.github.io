let ShowMore = 1;
let CollapseHeight = $('.collapse-content').innerHeight();

$('#openSearch').click(function(){
    $('.main-header__search').addClass('main-header__search_open');
    return false;
})
$('#closeSearch').click(function(){
    $('.main-header__search').removeClass('main-header__search_open');
    return false;
})

$('.main-header__burger').click(function(){
    $(this).toggleClass('main-header__burger_active');
    $('.main-header__nav').fadeToggle(100);
})

$('.dropdown__button').click(function () {
    $(this).next().slideToggle(200);
    return false;
})

const mediaQuery = window.matchMedia('(max-width: 576px)')
function handleTabletChange(e) {
// Check if the media query is true
if (e.matches) {
    $('.main-header__nav').append($('.main-header__tools') );
    $('.collapse-content').css({
        height: 300,
        overflow: 'hidden',
        transition: 'height 0.3s'
    })
    } else {
        $('.main-header__cols').append( $('.main-header__tools') );
        $('.collapse-content').removeAttr('style');
    }
}
mediaQuery.addListener(handleTabletChange)
// Initial check
handleTabletChange(mediaQuery)



$('.collapse-content-btn .button').click(function(){
    $(this).toggleClass('active');
    $('.collapse-content').toggleClass('open');
    if (ShowMore == 1) {
        $('.collapse-content').height(CollapseHeight);
        $(this).text('Show less');
        ShowMore = 0;
    } else {
        $('.collapse-content').height(300);
        $(this).text('Show more');
        ShowMore = 1;
    }
    return false;
})