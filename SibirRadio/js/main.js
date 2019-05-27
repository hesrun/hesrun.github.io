$(document).ready(function() {
    $('.volume-range').rangeslider({
        polyfill: false
    });
    $('body').vegas({
        transition: ['zoomOut','swirlLeft','swirlRight','blur2','flash2'],
        transitionDuration: 2000,
        overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/01.png',
        slides: [
            { src: 'img/slide_1.jpg' },
            { src: 'img/slide_2.jpg' },
            { src: 'img/slide_3.jpg' },
            { src: 'img/slide_4.jpg' }
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
        targets: '.line-inner',
        width: [0, '100%'],
        duration: 500,
        easing: 'linear',
        delay: 2000,
    });
    anime({
        targets: '.equalizer',
        height: [0, '70px'],
        duration: 1000,
        easing: 'linear',
        delay: 2500,
    });
    anime({
        targets: '.main-nav li',
        translateX: [50, 0],
        opacity:[0,1],
        duration: 3000,
        delay: anime.stagger(200,{start: 2500, from: 'first'}),
    });

    anime({
        targets: '.main-footer',
        opacity:[0,1],
        duration: 3000,
        delay: 4000,
    });
});
$('body').load(function() {
  alert('dfgsdfgsdfg')
});
