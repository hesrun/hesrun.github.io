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
    });

    $('.lot-item__favorite').click(function() {
        $(this).toggleClass('lot-item__favorite_active')
        return false;
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
            $(this).parent().addClass('active');
        })       
    });
    
});
