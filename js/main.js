
$(document).ready(function () {

    $('.releases-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

    var url = new URL(window.location.href);
    var releaseParam = url.searchParams.get("release");
    if (releaseParam) {
        var modalRelease = $('#modal-' + releaseParam.toString().toLowerCase());
        if (modalRelease.length) {
            modalRelease.modal('show')
        }
    };

});