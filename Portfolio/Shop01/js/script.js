// Loading items faded
jQuery(document).ready(function () {

    jQuery('#info-animated').addClass("hid").viewportChecker({
        classToAdd: 'vis animated fadeInUp',
        offset: 200
    });
    
    jQuery('#view-more').addClass("hid").viewportChecker({
        classToAdd: 'vis animated fadeIn',
        offset: 200
    });


    $(function () {
        var repeat = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        $('#animate-block-1').on('mouseenter', function () {
            $('#icon-1').addClass('animated tada').one(repeat,
                function () {
                    $(this).removeClass('animated tada');
                });
        });

        $('#animate-block-2').on('mouseenter', function () {
            $('#icon-2').addClass('animated tada').one(repeat,
                function () {
                    $(this).removeClass('animated tada');
                });
        });

        $('#animate-block-3').on('mouseenter', function () {
            $('#icon-3').addClass('animated tada').one(repeat,
                function () {
                    $(this).removeClass('animated tada');
                });
        });

    });

    
    $('.add-btn').on('click', function () {
        $('.add-successfully').fadeIn(300).delay(1500).fadeOut(300);
    });

    
    $('#view-more').on('click', function (){
        $('.all_items').fadeIn(500);
        $('.more-block').css('display','none');
    });

    
    if($('.loading').length){
			$('.loading').delay(2000).fadeOut(300);
		}
    
    $('#scroll-view').click(function () {
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({
        scrollTop: posi
    }, 500);

});
});