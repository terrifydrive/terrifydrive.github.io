
$(document).ready(function () {

    $('.releases-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    lightbox.option({
        'wrapAround': true,
        'fadeDuration': 200,
        'imageFadeDuration': 200,
        'resizeDuration': 230,
        'alwaysShowNavOnTouchDevices': true
    });

});