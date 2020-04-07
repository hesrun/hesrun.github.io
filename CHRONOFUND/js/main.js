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

$('#ShowPass').click(function() {
   InpAttr = $('#password').attr('type')
   if (InpAttr == 'password') {
      $(this).toggleClass('mdi-eye-outline mdi-eye-off-outline');
      $('#password').attr('type','text');
   } else {
      $(this).toggleClass('mdi-eye-outline mdi-eye-off-outline');
      $('#password').attr('type','password');
   }
})

$('.filter-drop').dropkick({
   mobile: true
});
