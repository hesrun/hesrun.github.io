$(document).ready(function() {
	var Win = $(window),
	Head = $('.main-header');
	//выпад список
	$(".slide-list span").click(function(){
		$(this).next().slideToggle(400);
	})
	$(".slide-list ul li").click(function(){
		var listText = $(this).text();
		$(".slide-list span").text(listText);
		$(this).parent().slideUp(400)
	})
	//переключение языка
	$('.lang-toggle > span').click(function () {
		$(this).next().slideToggle(300)
	})
	$('.lang-toggle li').click(function () {
		var LangText = $(this).text();
		$('.lang-toggle ul').slideUp(300)
		$('.lang-toggle > span').text(LangText);
	})
	//открывалка моб меню
	$('.toggle-nav-btn').click(function() {
		$(this).toggleClass('active');
		$('.main-header-nav').slideToggle(300);
	});
	//если меньше 768 px собираем меню для мобильного
	function ColapseHead () {
		WinWidth = Win.width();
		if (WinWidth < 768) {
			Head.addClass('colapsed');
			$('.main-header-nav').hide();
		} else {
			Head.removeClass('colapsed');
			$('.main-header-nav').show();
		}
	};
	Win.resize(function () {
		ColapseHead();
	});
	ColapseHead();
})