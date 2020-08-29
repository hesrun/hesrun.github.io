$(document).ready(function() {

   $('#ToNews').click(function() {
      var TopPosNews = $('.news-section').offset().top;
      $("html, body").stop().animate({scrollTop:TopPosNews}, 500, 'swing');

      return false;
   })



   $('.choise-station select').dropkick({
      mobile: true
   });
   var windowWidth = $('body').width(),
      mobileMenu = $('#mobileMenu').remodal(),
      mobileAbout = $('#mobileAbout').remodal(),
      mobileCities = $('#mobileCities').remodal(),
      mobileApps = $('#mobileApps').remodal(),
      mobileContacts = $('#mobileContacts').remodal(),
      mobileFeedback = $('#mobileFeedback').remodal();


   //баннер
   $('#BannerModal').modal();

   //тултипы на главной
   $.protip();

   //громкость
   $('.volume-range').rangeslider({
      polyfill: false
   });

   //задний фон слайдер
   $('.slider-back').vegas({
      transition: 'blur2',
      transition: 'fade',
      transition: 'fade2',
      delay: 10000,
      transitionDuration: 2000,
      overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/01.png',
      slides: [
         { src: 'img/slide_1.jpg' },
         { src: 'img/slide_2.jpg' },
         { src: 'img/slide_3.jpg' },
         { src: 'img/slide_4.jpg' },
         { src: 'img/slide_5.jpg' },
         { src: 'img/slide_6.jpg' }
      ]
   });

   //orientation change
   window.addEventListener("orientationchange", function() {
      $('.slider-back').vegas({
         transition: 'blur2',
         transition: 'fade',
         transition: 'fade2',
         delay: 10000,
         transitionDuration: 2000,
         overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/01.png',
         slides: [
            { src: 'img/slide_1.jpg' },
            { src: 'img/slide_2.jpg' },
            { src: 'img/slide_3.jpg' },
            { src: 'img/slide_4.jpg' },
            { src: 'img/slide_5.jpg' },
            { src: 'img/slide_6.jpg' }
         ]
      });
   })

   //пауза и плей трансформация
   $('.play-pause').click(function(){
      $('.play-btn').toggleClass('play--playing');
   })



   //открываем модалки в мобильных
   $('.burger-btn').click(function() {
      mobileMenu.open();
   })

   $('#mobileAboutOpen').click(function() {
      mobileAbout.open();
   })

   $('#mobileCitiesOpen').click(function() {
      mobileCities.open();
   })

   $('#mobileAppsOpen').click(function() {
      mobileApps.open();
   })

   $('#mobileContactsOpen').click(function() {
      mobileContacts.open();
   })

   $('#mobileFeedbackOpen').click(function() {
      mobileFeedback.open();
   })

   //анимации
   anime({
      targets: '.logo',
      translateX: [-50, 0],
      translateY: [-50, 0],
      opacity:[0,1],
      duration: 2000,
      delay: 1000,
   });
   anime({
      targets: '.main-nav li',
      translateX: [50, 0],
      opacity:[0,1],
      duration: 3000,
      delay: anime.stagger(200,{start: 2500, from: 'first'}),
   });

   if (windowWidth <= 1024) {
      anime({
         targets: '.radio-footer',
         opacity:[0,1],
         duration: 3000,
         delay: 0,
      });
      anime({
         targets: '.play-now',
         translateY: [50, 0],
         opacity:[0,1],
         duration: 2000,
         delay: 1000,
      });
      anime({
         targets: '.apps a',
         translateY: [50, 0],
         opacity:[0,1],
         duration: 2000,
         delay: anime.stagger(200,{start: 2000, from: 'first'}),
      });
      anime({
         targets: '.burger-btn',
         translateX: [50, 0],
         translateY: [-50, 0],
         opacity:[0,1],
         duration: 2000,
         delay: 1000,
      });
   } else {
      anime({
         targets: '.radio-footer',
         opacity:[0,1],
         duration: 3000,
         delay: 4000,
      });
      anime({
         targets: '.choise-station',
         opacity:[0,1],
         duration: 3000,
         delay: 4000,
      });
   }
});
