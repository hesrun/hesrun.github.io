$(document).ready(function() {

	var TabIndex = $('.tabs-link li.active').index(),
		TabHeight = $('.tabs-container .tab.active').height();

	$('.tabs-container').height(TabHeight);

	$('.tabs-link li').click(function() {
		if (!$(this).hasClass('active')) {
			var TabIndex = $(this).index();
			ChangeState(TabIndex);
			ChangeTabs(TabIndex);
		}
	});


	function ChangeState(TabIndex) {
		var BorderPos = $('.tabs-link li').eq(TabIndex).position(),
			BorderWidth = $('.tabs-link li').eq(TabIndex).innerWidth();

		$('.tabs-link li').removeClass('active');
		$('.tabs-link li').eq(TabIndex).addClass('active');

		$('.tabs-link .border').stop().css({
			left : BorderPos.left,
			width : BorderWidth
		})
		
	};
	function ChangeTabs(TabIndex) {

		$('.tabs-container .tab').stop().fadeOut(300,function() {
			$(this).removeClass('active');
		})

		$('.tabs-container .tab').eq(TabIndex).delay(300).fadeIn(300, function() {
			var TabHeight = $(this).height();
			$(this).addClass('active');
			$('.tabs-container').height(TabHeight);
		})
	};

	$('.has-ripple').click(function (e) {
		var rippleDiv = $('<div class="ripple" />'),
		rippleOffset = $(this).offset(),
		rippleY = e.pageY - rippleOffset.top,
		rippleX = e.pageX - rippleOffset.left,
		ripple = $('.ripple');

		$(this).css({
			position: 'relative',
  			overflow: 'hidden'
		})
		rippleDiv.css({
			top: rippleY - (ripple.height() / 2),
			left: rippleX - (ripple.width() / 2),
			background: $(this).attr("ripple-color")
		}).appendTo($(this));

		window.setTimeout(function () {
			rippleDiv.remove();
		}, 1500);
	});

	ChangeState(TabIndex);
})