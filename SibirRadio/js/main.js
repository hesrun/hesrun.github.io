$(document).ready(function() {
   $.protip();

   $('.volume-range').rangeslider({
      polyfill: false
   });

   $('.slider-back').vegas({
      transition: ['zoomOut','swirlLeft','swirlRight','blur2','flash2'],
      transitionDuration: 2000,
      overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/01.png',
      slides: [
         { src: 'img/slide_1.jpg' },
         { src: 'img/slide_2.jpg' },
         { src: 'img/slide_3.jpg' },
         { src: 'img/slide_4.jpg' },
         { src: 'img/slide_5.jpg' }
      ]
   });

   $('.play-pause').click(function(){
      $('.play-btn').toggleClass('play--playing');
   })

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

   anime({
      targets: '.radio-footer',
      opacity:[0,1],
      duration: 3000,
      delay: 4000,
   });
});
