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
    $('.main-header__nav').append( $('.main-header__tools > .button') );
        console.log('Media Query Matched!')
    } else {
        $('.main-header__tools').append( $('.main-header__nav > .button') );
        console.log('Media Query failed!')
    }
}
mediaQuery.addListener(handleTabletChange)
// Initial check
handleTabletChange(mediaQuery)
