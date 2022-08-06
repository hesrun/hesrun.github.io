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

    $('.tabs-list__item').click(function(){
        var TabId = $(this).attr("href");
        console.log(TabId);
        return false;
    });

    $('.tabs-list__item').click(function(event) {
        var selectTab = $(this).attr("href");
        $('.tabs-list__item').removeClass('tabs-list__item_active');
        $(this).addClass('tabs-list__item_active');
        $('.tabs-blocks__item').removeClass('tabs-blocks__item_active');
        $(selectTab).addClass('tabs-blocks__item_active');
    });


    $('.c-select select').each(function(){
        $(this).select2({
            minimumResultsForSearch: -1,
            width: '100%',
        });
    })

    $('.mobile-menu__link_sub').click(function() {
        $(this).next().slideToggle();
        return false;
    });

    $('.burger-btn').click(function () {
        $('body, html').toggleClass('noscroll');
        $(this).toggleClass('burger-btn_active');
        $('.mobile-menu').fadeToggle().toggleClass('mobile-menu_show');
        return false;
    })
    

    $('#SearchOpen').click(function() {
        $('.header__search').fadeIn();
        return false;
    });
    $('#SearchClose').click(function() {
        $('.header__search').fadeOut();
        return false;
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
            $(this).parents('.c-field').addClass('active');
        })       
    });

    $('.faq__title').click(function(){
        $(this).toggleClass('faq__title_active');
        $(this).next().slideToggle(500);
        return false;
    })

    

    


    $('.c-dropdown__button').click(function () {
        $(this).next().slideToggle(200);
        return false;
    })

    jQuery('img.img-convert').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });

});
