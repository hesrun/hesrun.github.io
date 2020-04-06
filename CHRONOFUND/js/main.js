$('.c-btn.blue').click(function () {
   anime({
     targets: '.sign-present-column',
     translateX: '-100%',
     easing: 'easeInQuad',
     duration: 600
   });
   return false;
})
