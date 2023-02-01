var scTop = 0;

$('#menuOpen').click(function(){
    $(this).toggleClass('active');
    $('#mainNav').fadeToggle();
})

$('.c-select select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});

$('.c-field').each(function() {
    var field = $(this);
    var input = field.find('.c-field__input');
    function checkInput() {
        var valueLength = input.val().length;
        console.log(valueLength);
        if (valueLength > 0 ) {
            field.addClass('active')
        } else {
            field.removeClass('active')
        }
    }
    $('.c-field__input').blur(function() {
        checkInput()
    })
    $('.c-field__input').focus(function() {
        checkInput();
        $(this).parents('.c-field').addClass('active');
    })       
});

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    headerH = $('.main-header').height();
    if (scTop > 500) {
        $('.main-header').addClass('main-header_mini main-header_in')
        $('body').css("padding-top", headerH)
    } else {
        $('.main-header').removeClass('main-header_mini main-header_in')
        $('body').removeAttr('style');
    }
})