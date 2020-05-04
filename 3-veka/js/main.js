//мобильное меню открываем
$('.toggleMenu button').click(function() {
   $(this).parent().next().slideToggle();
})
//поиск
$('.search-btn').click(function() {
   $('.search-field').fadeToggle();
   return false;
})
//показываем подкатегории
$('.category-list-item > a').click(function () {
   $(this).next().slideToggle(300);
   return false;
})
//рекламный слайдер
$('.main-slider .owl-carousel').owlCarousel({
   autoplay:true,
   loop:true,
   margin:0,
   nav:false,
   dots:true,
   items:1
})
//слайдер категорий на главной
$('.menu-carusel .owl-carousel').owlCarousel({
   loop:true,
   margin:0,
   nav:true,
   dots:false,
   responsive: {
      0 : {
         items:1
      },
      480 : {
         items:2
      },
      769 : {
         items:4
      }
   }
})
//слайдер в карточке товара
$('.product-image-slider .owl-carousel').owlCarousel({
   autoplay:false,
   loop:false,
   margin:0,
   nav:true,
   dots:false,
   items:1,
   thumbs: true,
   thumbImage: true
})
//слайдер в новости
var bigimage = $("#big");
var thumbs = $("#thumbs");
var syncedSecondary = false;

bigimage
.owlCarousel({
   items: 1,
   nav: true,
   dots: false,
   loop: true,
   responsiveRefreshRate: 200,
})
.on("changed.owl.carousel", syncPosition);

thumbs
.on("initialized.owl.carousel", function() {
   thumbs
   .find(".owl-item")
   .eq(0)
   .addClass("current");
})
.owlCarousel({
   margin: 10,
   dots: false,
   nav: true,
   navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
   ],
   slideBy: 6,
   responsive: {
      0 : {
         items:6,
         margin: 5
      },
      480 : {
         items:8
      },
      769 : {
         items: 8
      }
   }
})
.on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
   var count = el.item.count - 1;
   var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

   if (current < 0) {
      current = count;
   }
   if (current > count) {
      current = 0;
   }
   thumbs
   .find(".owl-item")
   .removeClass("current")
   .eq(current)
   .addClass("current");
   var onscreen = thumbs.find(".owl-item.active").length - 1;
   var start = thumbs
   .find(".owl-item.active")
   .first()
   .index();
   var end = thumbs
   .find(".owl-item.active")
   .last()
   .index();

   if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
   }
   if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
   }
}

function syncPosition2(el) {
   if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
   }
}

thumbs.on("click", ".owl-item", function(e) {
   e.preventDefault();
   var number = $(this).index();
   bigimage.data("owl.carousel").to(number, 300, true);
});
