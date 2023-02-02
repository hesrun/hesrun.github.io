var scTop = 0;

$('#menuOpen').click(function(){
    $(this).toggleClass('active');
    $('#mainNav').fadeToggle();
    $('body').toggleClass('overflow-hidden');
    
})

$('#searchClose').click(function(){
    $('#search').fadeOut();
    $('body').toggleClass('overflow-hidden');
})

$('#searchOpen').click(function(){
    $('#search').fadeIn();
    $('body').toggleClass('overflow-hidden');
    return false
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

if (window.matchMedia('(max-width: 1024px)').matches) {
    $('#mainNav h4').click(function(){
        $(this).next().slideToggle(300);
    })
}


$(document).on('wheel', function(e){
    headerH = $('.main-header').height();
    scTop = $(this).scrollTop();
	if (e.originalEvent.wheelDelta >= 0) {
		console.log('UP')
        if (scTop <= 800 && $('.main-header').hasClass('main-header_in')) {
            $('.main-header').addClass('main-header_out').removeClass('main-header_in');
            setTimeout(function(){
                console.log('sdfgfsfdgsf')
                $('.main-header').removeClass('main-header_mini main-header_out');
                $('body').removeAttr('style');
            }, 300);
        }
	} else {
        console.log('DOWN')
        if (scTop > 800) {
            $('.main-header').addClass('main-header_mini main-header_in')
            $('body').css("padding-top", headerH)
        }
	}
});