var scTop = 0;

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
 
    jQuery.get(imgURL, function(data) {
        /* Get the SVG tag, ignore the rest */
        var $svg = jQuery(data).find('svg');
 
        /* Add replaced image's ID to the new SVG */
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
 
        /* Add replaced image's classes to the new SVG */
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
 
        /* Remove any invalid XML tags as per http://validator.w3.org */
        $svg = $svg.removeAttr('xmlns:a');
 
        /* Replace image with new SVG */
        $img.replaceWith($svg);
 
    }, 'xml');
 
});

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    if (scTop > 400) {
        $('.main-header').addClass('mini');
    } else {
        $('.main-header').removeClass('mini');    
    }
})

$('.burger-btn').click(function(){
    $('.side-menu').toggleClass('open');
})

$('#ShowSearch').click(function(){
    $('#HeadSearch').fadeIn(300);
    return false;
})
$('#HeadSearch .close').click(function(){
    $('#HeadSearch').fadeOut(300);
    return false;
})