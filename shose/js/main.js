$(document).ready(function() {
	var slider = $('.banner-slider').bxSlider({
		mode: 'fade',
        pager: false,
        controls: false,
        auto: true,
        pause: 9000,
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.active-slide').removeClass('active-slide');
            $('.banner-slider > li').eq(currentSlideHtmlObject).addClass('active-slide')
            $('.banner-links a, .banner-pag > div').removeClass('active');
            $('.banner-links a').eq(currentSlideHtmlObject).addClass('active');
            $('.banner-pag > div').eq(currentSlideHtmlObject).addClass('active');
        },
        onSliderLoad: function () {
            $('.banner-slider > li').eq(0).addClass('active-slide')
        },
	});
    $('.banner-links a').click(function(){
        currentLink = $(this).parent().index();
        console.log(currentLink);
        $('.banner-links a, .banner-pag > div').removeClass('active');
        $(this).addClass('active');
        $('.banner-pag > div').eq(currentLink).addClass('active');
        slider.goToSlide(currentLink);
        return false;
    })

    $('#SearchBtn').click(function(){
        $('.page-wrap').addClass('show-search');
        $('.search-layout').removeClass('hidden').addClass('search-in')
            .on('animationend webkitanimationend oanimationend', function () {
                $('.page-wrap').removeClass('show-search');
                $(this).removeClass('search-in').removeClass('hidden')
            });
    });
    $('#CloseSearch').click(function(){
        $('.page-wrap').addClass('show-search');
        $('.search-layout').addClass('search-out')
            .on('animationend webkitanimationend oanimationend', function () {
                $('.page-wrap').removeClass('show-search');
                $(this).addClass('hidden').removeClass('search-out');
            });
    });

    $('.filter-select').click(function(){
        var list = $(this).find('ul');
        if (list.is(":hidden")) {
            $('.filter-select ul').slideUp(200)
            list.slideDown(200)
        } else {
            list.slideUp(200)
        }
    })
    $('.filter-select a').click(function(){
        var text = $(this).text(),
            plhold = $(this).parent().parent().siblings("p");
        plhold.text(text);
        $(this).parent().parent().slideUp(200);
        return false;
    })

    $('.sorting').click(function(){
        $(this).find('ul').slideToggle(200);
    })

    $('.change-layout input').change(function(){
        var InpB = $('#BlockL'),
            InpL = $('#ListL');
        if (InpL.is(':checked')) {
            $('.catalog .row .col-sm-4').removeClass('col-sm-4').addClass('col-xs-12').find('.item').addClass('row-layout');
        } else
        if (InpB.is(':checked')) {
            $('.catalog .row .col-xs-12').removeClass('col-xs-12').addClass('col-sm-4').find('.item').removeClass('row-layout');
        }
    });

    $('.toggle-menue').click(function(){
        $(this).next().slideToggle(200);
    })
})