// var scTop,
//     WWidth = $(window).width();
// if (WWidth > 1024) {
//    $(window).scroll(function() {
//       scTop = $(this).scrollTop();
//       if (scTop > 250) {
//          $(".main-header").addClass('mini');
//       } if (scTop < 180) {
//          $(".main-header").removeClass('mini');
//       }
//    })
// }

$('.btn-search').click(function(event) {
   event.preventDefault();
   $('.search-modal').modal({
     fadeDuration: 250
   });
 });

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

$('.filter-drop, .c-b-input select').dropkick({
   mobile: true
});

$('#mobileMenueOpen').click(function() {
   $(this).toggleClass('active').find('.mdi').toggleClass('mdi-menu mdi-close');
   $(".left-side-navigation").toggleClass('open');
   $("html").toggleClass('menu-open');
   return false;
})
