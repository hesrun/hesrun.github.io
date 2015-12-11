$(document).ready(function() {
	var slider = $('.banner-slider').bxSlider({
		mode: 'fade',
        pager: false,
        controls: false,
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            $('.active-slide').removeClass('active-slide');
            $('.banner-slider > li').eq(currentSlideHtmlObject).addClass('active-slide')
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
})