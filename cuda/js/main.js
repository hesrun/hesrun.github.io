$(window).load(function () {
	wow = new WOW(
	    {
	      boxClass:     'wow',      
	      animateClass: 'animated', 
	      offset:       100,          
	      mobile:       true,       
	      live:         true        // default
	    }
	  )
	  wow.init();
});

$(document).ready(function (){

	$('.nav-toggle').click(function () {
		$('.main-nav').slideToggle(400);
	})

	$('#MoveTop').click(function(){
		var body = $("html, body");
		body.animate({scrollTop:0}, '1000', 'swing');
	})

	$('#Navigation').singlePageNav();


	$('#SkillsList').appear(function(){
		$('.progress').each(function () {
			var ProgC = $(this).attr("attr-color"),
				ProgP = $(this).attr("attr-perc");
			console.log(ProgP);
			$(this).circleProgress({
		        value: ProgP,
		        size: 160,
		        startAngle: -Math.PI / 2,
		        fill: { color: ProgC }
		    }).on('circle-animation-progress', function(event, progress, stepValue) {
			    $(this).find('.percents span').html(parseInt(100 * stepValue));
		    })
		});
	})
	

	$('#MixContainer').mixItUp();

	$('.field input, .field textarea').focus(function () {
		$(this).next().addClass('active')
	})
	$('.field input, .field textarea').blur(function () {
		var fildvar = $(this).val();
		if (fildvar) {
			$(this).next().addClass('active')
		} else {
			$(this).next().removeClass('active')
		}
	});

	function FixedHead () {
		var WinSC = $(this).scrollTop();
		if (WinSC > 300) {
			$('.main-head').addClass('fixed');
		} else {
			$('.main-head').removeClass('fixed');
		}
	};

	function MoveTop () {
		var WinSC = $(this).scrollTop();
		if (WinSC > 1000) {
			$('#MoveTop').addClass('active');
		} else {
			$('#MoveTop').removeClass('active');
		}
	};

	function ColapseHead () {
		var WinW = $(this).width();
		if (WinW < 768) {
			$('.main-head').addClass('colapsed');
		} else {
			$('.main-head').removeClass('colapsed');
		}
	};


	FixedHead ();
	ColapseHead ();
	MoveTop ();

	$(window).scroll(function () {
		FixedHead ();
		MoveTop ();
	})
	$(window).resize(function () {
		ColapseHead ();
	})

});