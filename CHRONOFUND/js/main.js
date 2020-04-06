$('.c-btn.blue').click(function () {
   anime({
     targets: '.sign-present-column',
     translateX: '-100%',
     easing: 'easeInQuad',
     duration: 600
   });
   anime({
     targets: '.bottom-btn',
     rotateX: ['90deg', '0'],
     easing: 'easeInQuad',
     duration: 200,
     delay: 1000
   });
   return false;
})

anime({
  targets: '.bottom-btn',
  rotateX: ['90deg', '0'],
  easing: 'easeInQuad',
  duration: 200,
  delay: 1000
});
