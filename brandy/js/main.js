jQuery(window).load(function(){
	$(".preloader").addClass('fadeOutUpBig');
});
$(document).ready(function(){
	//переменные
	WinH = $(window).height();
	$('#home').height(WinH);

	//моб меню
	function Colapsed () {
		WinW = $(window).width();
		if (WinW < 992) {
			$('.header').addClass('colapsed')
		} else {
			$('.header').removeClass('colapsed')
		}
	}

	Colapsed ();
	$(window).resize(function(){
		Colapsed ();
	})
	$('.nav-toggler').click(function(){
		$('.head-nav').slideToggle(500);
	})

	
	//вов анимации
	var wow = new WOW ({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       120,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true        // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();
	//фикс хедер
	$(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('.header').addClass('fixed')
        } else {
            $('.header').removeClass('fixed')
        }
    });
	//сортировка работ
	$('#works-pallet').mixItUp();
	//прокрутка
	$('#MainNav').singlePageNav({
		offset: 50,
		speed: 1200,
		currentClass: 'active',
		easing: 'easeInOutExpo',
		updateHash: true,
	});
	//считалка
	$(".facts-overlay .row").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 0,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
});