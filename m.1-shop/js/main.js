$(document).ready(function () {

	$('.menue-btn').click(function(){
		$('.burger-btn').toggleClass('close');
		var menue = $('.main-nav');
		if (menue.is(":hidden")) {
			$('.menue-btn > span').text('скрыть меню');
		} else {
			$('.menue-btn > span').text('Меню');
		}
		menue.slideToggle(200);
		$('body').toggleClass('overflow');
	})

	$('.filter-btn').click(function(){
		$('.fiters').fadeIn(200);
		$('body').addClass('overflow');
	})
	$('button.cancle').click(function(){
		$('.fiters').fadeOut(200);
		$('body').removeClass('overflow');
	})

	$('.filter-item span').click(function(){
		$(this).toggleClass('flip').next().slideToggle(400);
	})

	$('#ToRecall').click(function() {
		$('html, body').addClass('modal-show');
		$('#RecallWin').fadeIn(300);
		$('body').addClass('overflow');
		return false;
	})
	$('#Findlow').click(function() {
		$('html, body').addClass('modal-show');
		$('#LowerWin').fadeIn(300);
		$('body').addClass('overflow');
		return false;
	})

	$('.btn-grey').click(function(){
		$('html, body').removeClass('modal-show');
		$('.overlay').fadeOut(300);
		$('body').removeClass('overflow');
	})
})