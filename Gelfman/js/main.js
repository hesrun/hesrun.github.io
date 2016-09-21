$(document).ready(function() {
	var SubNav = $('.sub-nav'),
		SubTop = SubNav.offset().top,
		Win = $(window),
		WinH = Win.height(),
		WinWidth = Win.width(),
		Head = $('.main-header'),
		sections = [],
		id = false,
		lamps = $('#LampList > img').length,
		count = 1,
		pens = $('#PenSequence > img').length,
		DispSeq = $('#DispSeq > img').length,
		MyTime = null,
		MyTimer = null,
        timePass = [],
        timePassDigit = [],
        timePassFormat = [],
		WriteProcess = null,
		ChargeProcess = null;

	//фонарик
	$('.light-turn').click(function(){
		$('.flashlight').fadeToggle(300);
	})

	$('.finger-block').click(function(){
		if (WinWidth > 768) { 
			$('.programm').toggleClass('insert-storage');
			setTimeout(function (){
				$(".connect-device").hide();
				$('.slide-prog').fadeIn(500);
			}, 400)
			
		}
	})

	//постановка часел в классы
	function SetDigits (Arr) {
		$('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 dig-g defis-bot defis');
		$('.sect-1').addClass('num-'+ Arr[0] +'');
		$('.sect-2').addClass('num-'+ Arr[1] +'');
		$('.sect-7').addClass(Arr[6] !== undefined && Arr[6] !== null? ('num-'+ Arr[6]) : 'defis');
		$('.sect-3').addClass('num-'+ Arr[2] +'');
		$('.sect-4').addClass('num-'+ Arr[3] +'');
		$('.sect-8').addClass(Arr[7] !== undefined && Arr[7] !== null? ('num-'+ Arr[7]) : 'defis');
		$('.sect-5').addClass('num-'+ Arr[4] +'');
		$('.sect-6').addClass('num-'+ Arr[5] +'');
	}
	
    function SetPassDigits (Arr) {
        $('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 dig-g defis-bot defis');
        $('.sect-1').addClass('num-'+ Arr[0]);
        $('.sect-2').addClass('num-'+ Arr[1]);
        $('.sect-7').addClass('num-'+ Arr[2]);
        $('.sect-3').addClass('num-'+ Arr[3]);
        $('.sect-4').addClass('num-'+ Arr[4]);
        $('.sect-8').addClass('num-'+ Arr[5]);
        $('.sect-5').addClass('num-'+ Arr[6]);
        $('.sect-6').addClass('num-'+ Arr[7]);
    }

	//получаем массив даты
	function GetDate () {
		var NewDate = new Date(),
			day = NewDate.getDate(),
			dayArr = day.toString().split(""),
			month = NewDate.getMonth() + 1,
			monthArr = month.toString().split(""),
			year = NewDate.getFullYear(),
			yearArr = year.toString().split(""),
			DateArr = [];
			DateArr[0] = (day < 10) ? 0 : dayArr[0];
			DateArr[1] = (day < 10) ? dayArr[0] : dayArr[1];
			DateArr[2] = (month < 10) ? 0 : monthArr[0];
			DateArr[3] = (month < 10) ? monthArr[0] : monthArr[1];
			DateArr[4] = yearArr[2];
			DateArr[5] = yearArr[3];
		return DateArr;
	}

	//показываем Дату
	function ShowDate () {
		SetDigits (GetDate());
		$('.defis').show();
	};

	//получаем массив времени
	function GetTime () {
		var NewDate = new Date(),
		    sec = NewDate.getSeconds(),
			secArr = sec.toString().split(""),
			min = NewDate.getMinutes(),
			minArr = min.toString().split(""),
			hours = NewDate.getHours(),
			hoursArr = hours.toString().split(""),
			TimeArr = [];
			TimeArr[0] = (hours < 10) ? 0 : hoursArr[0];
			TimeArr[1] = (hours < 10) ? hoursArr[0] : hoursArr[1];
			TimeArr[2] = (min < 10) ? 0 : minArr[0];
			TimeArr[3] = (min < 10) ? minArr[0] : minArr[1];
			TimeArr[4] = (sec < 10) ? 0 : secArr[0];
			TimeArr[5] = (sec < 10) ? secArr[0] : secArr[1];
		return TimeArr;
	}
	//показываем время
	function ShowTime () {
		SetDigits (GetTime());
		MyTime = setInterval(function(){
			SetDigits (GetTime());
			if ($('.defis').is(':visible')) {
				$('.defis').hide();
			} else {
				$('.defis').show();
			}
		},1000);
	}
	//показываем при загрузке время
	ShowTime();

	function ShowTimer() {
		var timerMin = 0,
		    timerSec = 0,
		    timerMiliSec = 0,
		    TimerArr = [];

		MyTimer = setInterval(function(){
			$('.defis').hide();

			timerMiliSec += 1;
			if (timerMiliSec == 100) {
				timerSec += 1;
				timerMiliSec = 0;
			};
			if (timerSec == 60) {
				timerMin += 1;
				timerSec = 0;
			};

			var timerMinArr = timerMin.toString().split(""),
				timerSecArr = timerSec.toString().split(""),
				timerMiliSecArr = timerMiliSec.toString().split("");

			TimerArr[0] = (timerMin < 10) ? 0 : timerMinArr[0];
			TimerArr[1] = (timerMin < 10) ? timerMinArr[0] : timerMinArr[1];
			TimerArr[2] = (timerSec < 10) ? 0 : timerSecArr[0];
			TimerArr[3] = (timerSec < 10) ? timerSecArr[0] : timerSecArr[1];
			TimerArr[4] = (timerMiliSec < 10) ? 0 : timerMiliSecArr[0];
			TimerArr[5] = (timerMiliSec < 10) ? timerMiliSecArr[0] : timerMiliSecArr[1];

			SetDigits (TimerArr);
		},5)
	};
	//показываем оставшуюся память
	function ShowUsedMem() {
		$('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
		$('.sect-1').addClass('num-1');
		$('.sect-2').addClass('num-6');
		$('.sect-7').show().addClass('defis-bot');
		$('.sect-3').addClass('num-0');
		$('.sect-4').addClass('num-8');
		$('.sect-8').show().addClass('num-8');
		$('.sect-6').addClass('dig-g')
	};

	//показываем процесс записи
	function ShowReadWrite() {
		var GB = 16,
		    MB = 88,
		    WriteProcessArr = [];

		    WriteProcess = setInterval(function(){
		    	MB -= 1;
		    	if (MB == 0) {
		    		MB = 999;
		    		GB -= 1;
		    	};
		    	var GBArr = GB.toString().split(""),
			    	MBArr = MB.toString().split("");

			    WriteProcessArr[0] = (GB < 10) ? 0 : GBArr[0];
			    WriteProcessArr[1] = (GB < 10) ? GBArr[0] : GBArr[1];

			    switch (true) {
			    	case MB >= 100:
				    	WriteProcessArr[2] = MBArr[0];
				    	WriteProcessArr[3] = MBArr[1];
				    	WriteProcessArr[4] = MBArr[2];
			    	break;
			    	case MB >= 10 && MB < 100:
				    	WriteProcessArr[2] = 0;
				    	WriteProcessArr[3] = MBArr[0];
				    	WriteProcessArr[4] = MBArr[1];
			    	break;
			    	case MB < 10:
				    	WriteProcessArr[2] = 0;
				    	WriteProcessArr[3] = 0;
				    	WriteProcessArr[4] = MBArr[0];
			    	break;
			    }

			    $('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
				$('.sect-1').addClass('num-'+ WriteProcessArr[0] +'');
				$('.sect-2').addClass('num-'+ WriteProcessArr[1] +'');
				$('.sect-7').show().addClass('defis-bot');
				$('.sect-3').addClass('num-'+ WriteProcessArr[2] +'');
				$('.sect-4').addClass('num-'+ WriteProcessArr[3] +'');
				$('.sect-8').show().addClass('num-'+ WriteProcessArr[4] +'');
				$('.sect-6').addClass('dig-g')
		    },50)
	}

	//показываем уровень заряда
	function ShowCharge() {
		$('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
		$('.sect-1').addClass('num-0');
		$('.sect-2').addClass('num-8');
		$('.sect-7').show().addClass('num-7');
		$('.sect-3').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
		$('.sect-4').addClass('num-3');
		$('.sect-8').show().addClass('defis-bot');
		$('.sect-5').addClass('num-9');
		$('.sect-6').addClass('num-7');
	};

	//показываем зарядку
	function ShowCharger() {
		var ChargeP = 0,
		    ChargeV = 344,
		    ChargeProcessArr = [];

	    ChargeProcess = setInterval(function(){
	    	ChargeP += 1;
	    	ChargeV += 1.1;
	    	ChargeV.toFixed();
	    	if (ChargeV >= 455) {
	    		ChargeV = 455;
	    	};

	    	var ChargePArr = ChargeP.toString().split(""),
		    	ChargeVArr = ChargeV.toString().split("");


		    switch (true) {
		    	case ChargeP == 100:
			    	ChargeProcessArr[0] = ChargePArr[0];
			    	ChargeProcessArr[1] = ChargePArr[1];
			    	ChargeProcessArr[2] = ChargePArr[2];
		    	break;
		    	case ChargeP >= 10 && ChargeP < 100:
			    	ChargeProcessArr[0] = 0;
			    	ChargeProcessArr[1] = ChargePArr[0];
			    	ChargeProcessArr[2] = ChargePArr[1];
		    	break;
		    	case ChargeP < 10:
			    	ChargeProcessArr[0] = 0;
			    	ChargeProcessArr[1] = 0;
			    	ChargeProcessArr[2] = ChargePArr[0];
		    	break;
		    };

		    ChargeProcessArr[3] = ChargeVArr[0];
		    ChargeProcessArr[4] = ChargeVArr[1];
		    ChargeProcessArr[5] = ChargeVArr[2];

		    $('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');

			$('.sect-1').addClass('num-'+ ChargeProcessArr[0] +'');
			$('.sect-2').addClass('num-'+ ChargeProcessArr[1] +'');
			$('.sect-7').show().addClass('num-'+ ChargeProcessArr[2] +'');

			$('.sect-3').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');

			$('.sect-4').addClass('num-'+ ChargeProcessArr[3] +'');
			$('.sect-8').show().addClass('defis-bot')
			$('.sect-5').addClass('num-'+ ChargeProcessArr[4] +'');
			$('.sect-6').addClass('num-'+ ChargeProcessArr[5] +'');

			if (ChargeP == 100 && ChargeV == 455) {
				clearInterval(ChargeProcess);
			};
	    },50)
	};

	//показываем форматирование
	function ShowFormat () {
		$('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
		$('.sect-1').addClass('num-8');
		timePassFormat[0] = setTimeout(function(){
			$('.digit').removeClass('num-8');
			$('.sect-2').addClass('num-7');
		},500);
        timePassFormat[1] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7');
			$('.sect-7').show().addClass('num-6');
		},1000);
        timePassFormat[2] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6');
			$('.sect-3').addClass('num-5');
		},1500);
        timePassFormat[3] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6 num-5');
			$('.sect-4').addClass('num-4');
		},2000);
        timePassFormat[4] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6 num-5 num-4');
			$('.sect-8').show().addClass('num-3');
		},2500);
        timePassFormat[5] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6 num-5 num-4 num-3');
			$('.sect-5').addClass('num-2');
		},3000);
        timePassFormat[6] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6 num-5 num-4 num-3 num-2');
			$('.sect-6').addClass('num-1');
		},3500);
        timePassFormat[7] = setTimeout(function(){
			$('.digit').removeClass('num-8 num-7 num-6 num-5 num-4 num-3 num-2 num-1');
		},4000);
	}

	//показать пароль
    function passDigit(arr, n){
        timePass[n] = setTimeout(function(){
            for(var i = 0; i < n; i++){
                timePassDigit[i] = setTimeout(function(){
                    arr[n-1] = arr[n-1] + 1;
                    SetPassDigits(arr);
                }, 200*i)
            }
        }, 500*(n*(n/6)));
    }

	function ShowPass() {
		$('.digit').removeClass('num-0 num-1 num-2 num-3 num-4 num-5 num-6 num-7 num-8 num-9 defis dig-g defis-bot');
		$('.digit').show().addClass('num-0');
        var digits = [0,0,0,0,0,0,0,0];
        for(var d = 0; d < 8; d++){
            passDigit(digits, d+1);
        }
	}

	//переключание подвкладок
	$('#FuncToggle input').change(function () {
		$('.gadget-toggle.sub').hide();
		console.log($(this).attr('id'));
		switch ($(this).attr('id')) {
			case 'watch':
				$('#DispToggle').show();
				$('#time').next().click();
			break;
			case 'usb':
				$('#USBToggle').show();
				$('#used').next().click();
			break;
			case 'battery':
				$('#BatteryToggle').show();
				$('#normal').next().click();
			break;
			case 'Password':
				$('#PassToggle').show();
				$('#pass').next().click();
			break;
		}
	})

	//переключение дисплея батарее
	$('.gadget-toggle.sub input').change(function () {
		clearInterval(MyTime); MyTime = null;
        clearInterval(MyTimer); MyTimer = null;
        clearInterval(WriteProcess); WriteProcess = null;
        clearInterval(ChargeProcess); ChargeProcess = null;
        timePass.forEach(function(t){ clearTimeout(t); }); timePass = [];
        timePassDigit.forEach(function(t){ clearTimeout(t); }); timePassDigit = [];
        timePassFormat.forEach(function(t){ clearTimeout(t); }); timePassFormat = [];
		switch ($(this).val()) {
			case 'normal':
				ShowCharge();
			break;
			case 'charge':
				ShowCharger();
			break;
			case 'used':
				ShowUsedMem();
			break;
			case 'write':
				ShowReadWrite();
			break;
			case 'date':
				ShowDate();
			break;
			case 'time':
				ShowTime();
			break;
			case 'timer':
				ShowTimer();
			break;
			case 'pass':
				ShowPass();
			break;
			case 'format':
				ShowFormat ();
			break;
		}
	})

	//Если библиотека скролла отключена, показываем первую картнку
	if (WinWidth < 768) {
		$('#PenSequence > img').hide();
		$('#PenSequence > img').eq(10).show();
	}

	//Секвенция по клику с текущего кадра 360
	$('.deg360').click(function(){
		var VisImg = $('#PenSequence > img:visible').index();
		function RotImg (i,pos) {
			setTimeout(function (){
				$('#PenSequence > img').hide();
				$('#PenSequence > img').eq(pos).show();
			}, i*50)
		}
		for (var i = 0; i < pens; i++) {
			var index = (VisImg + i) < pens ? (VisImg + i) : (VisImg + i - pens);
			RotImg(i, index);
		}
		RotImg(pens, VisImg);
	})

	//переключалка ламп
	$('#LampList').click(function(){
		if ($(this).attr('data-block') !== '1') {
			var c = (count >= lamps) ? 0 : (count);
			$('#LampList > img').fadeOut(200);
			setTimeout(function(){$('#LampList > img').eq(c).fadeIn(200);}, 201);
			count = c + 1;
			$(this).attr('data-block', 1);
			setTimeout(function(){ $('#LampList').attr('data-block', 0); }, 401);
		}
	})

	//перключалка цветов
	$('#colors img').click(function(){
		var ColorName = $(this).attr('color-attr');
			PricePen = $(this).attr('price-attr');
			PenName = $(this).attr('name');
			PenAmmount = $(this).attr('cout-attr');
		$('#PenPrice').text(PricePen);
		$('.pen-name').text(PenName);
		$('.pen-ammount').text(PenAmmount);
		$('#colors div').removeClass('active');
		$(this).parent().addClass('active');
		$('#pens img').fadeOut(300);
		setTimeout(function () {
			$('#pens img[color-attr='+ColorName+']').fadeIn(300);
		}, 300)
		
	})
	
	//форма приглашения друзей
	$('.invite span').click(function () {
		$('.invote-form').slideDown(300);
	})
	$('button.close').click(function () {
		$('.invote-form').slideUp(300);
		return false;
	})

	

	//плавная прокрутка по якорям
	$('.sub-nav li a').click(function(){
		$('html').animate({
			scrollTop: $($(this).attr('href')).offset().top
		})
	})

	//создаем массив блоков с якорями
	$('.sub-nav li a').each(function(){
		sections.push($($(this).attr('href')));
	})

	//Секвенция дисплея ручки
	function DoDisplaySeq () {
		$('#DispSeq').addClass('called-seq');
		function SeqDisplay (i) {
			setTimeout(function (){
				$('#DispSeq > img').hide();
				$('#DispSeq > img').eq(i).show();
			}, i*30)
		}
		for (var i = 0; i < DispSeq; i++) {
			SeqDisplay(i);
		}
	};

	//все плюхи реагируюющие на скролл 
	Win.scroll(function () {
		var ScTop = $(this).scrollTop(), //сколько пикселей прокрутили
			ScTopCentr = $(this).scrollTop() + (WinH / 2),
			PenDispTop = $('#DispSeq').offset().top; //оффсет блока с дисплеем;

		if ($('.light-turn').is(':hidden')) {
			$('.flashlight').hide();
		};
		//прижимаем подменю к верху
		if ( ScTop > SubTop) {
			SubNav.addClass('fixed');
		} else {
			SubNav.removeClass('fixed');
		};

		//показываем элементы в подменю 
		if (ScTop > WinH) {
			SubNav.addClass('show-hidden');
		} else {
			SubNav.removeClass('show-hidden');
		};

		//проверяем блоки на прокрутку и делаем актывный разде в шапке
		for (var i in sections) {
			var section = sections[i];
			if (ScTopCentr > section.offset().top) {
				scroll_id = section.attr('id');
			}
		};
		if (scroll_id !== id) {
			id = scroll_id;
			$('.sub-nav li').removeClass('active');
			$('.sub-nav li a[href="#'+ scroll_id +'"]').parent().addClass('active');
		};
		
		//запускаем сиквенцию дисплея
		if (ScTopCentr > PenDispTop) {
			if(!$('#DispSeq').hasClass('called-seq')) { 
				DoDisplaySeq ();
			}
			console.log('sdfgsdf')
		} else if ((ScTopCentr + 300) < PenDispTop) {
			$('#DispSeq').removeClass('called-seq');
			$('#DispSeq img').hide();
			console.log('222222222')
		};
		
	});



	

	//инициализируем библиотеку для анимашек при скролле (Фикс сафари)
	$(window).load(function() {
		if (WinWidth > 768) {
			var SkrollPlug = skrollr.init({
			    smoothScrolling: false,
			    forceHeight: false
			});
		}
	})
})