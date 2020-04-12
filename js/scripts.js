/*===Top Fix Navi sticky-navigation===*/
jQuery(document).ready(function () {
    jQuery(".navbar-wrapper").sticky({topSpacing: 0});
});

/*===animated===*/
var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false       // trigger animations on mobile devices (true is default)
        }
);
wow.init();


/*===Back to Top===*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
//
//$(document).ready(function () {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        margin: 10,
//        responsiveClass: true,
//        autoplay: true,
//        autoplayTimeout: 1000,
//        dots: true,
//        autoplayHoverPause: true,
//        responsive: {
//            0: {
//                items: 1,
//                dots: true
//            },
//            600: {
//                items: 3,
//                dots: true
//            },
//            1000: {
//                items: 4,
//                dots: true,
//                loop: false
//            }
//        }
//    })
//});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
})

$(document).ready(function () {
    $(".mobile-menu-btn").click(function () {
        $("body").toggleClass("open");
    });
});

$(document).ready(function () {
    $(".mobile-map-btn").click(function () {
        $("body").toggleClass("mapOpen");
    });
});


