
$(document).ready(function () {

    $('.releases-carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    var releaseParam = window.location.hash;
    if (releaseParam)
        if (releaseParam.length >= 2) {
            var releaseName = releaseParam.substring(1);
            var modalRelease = $('#modal-' + releaseName.toString().toLowerCase());
            if (modalRelease.length)
                modalRelease.modal('show');
        };

    document.shareCurrentHref = function () {
        navigator.share({ url: window.location.href });
    };

    //var fbAddedflag = false;
    //var fbWidth = 0;
    //function fbFeedInit() {
    //    var stopNext = false;
    //    if (fbAddedflag != true) {
    //        fbWidth = parseInt($("#fb-feed-custom-container").width());
    //        if (fbWidth > 100) {
    //            if (fbWidth > 500)
    //                fbWidth = 500;
    //            $("#fb-feed-custom-container").append('<div id="fb-root"></div>');
    //            $("#fb-feed-custom-container").append('<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="uajXX1YK"></script>');
    //            $("#fb-feed-custom-container").append('<div class="fb-page" data-href="https://www.facebook.com/terrifydrive/" data-tabs="timeline" data-width="' + fbWidth + '" data-height="800" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/terrifydrive/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/terrifydrive/">Terrify Drive</a></blockquote></div>');
    //            fbAddedflag = true;
    //        };
    //    } else {
    //        var fbHeader = $("div.userContentWrapper");
    //        if (fbHeader) {
    //            fbHeader.attr("style","display: none;");
    //            stopNext = true;
    //            console.log("*");
    //        };
    //    };
    //    if (stopNext != true)
    //        setTimeout(fbFeedInit, 100);
    //};
    //setTimeout(fbFeedInit, 100);

});