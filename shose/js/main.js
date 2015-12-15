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
    })
    $('#CloseSearch').click(function(){
        $('.page-wrap').addClass('show-search');
        $('.search-layout').addClass('search-out')
            .on('animationend webkitanimationend oanimationend', function () {
                $('.page-wrap').removeClass('show-search');
                $(this).addClass('hidden').removeClass('search-out');
            });
    })
})