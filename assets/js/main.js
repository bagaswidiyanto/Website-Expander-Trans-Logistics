(function ($) {
    "use strict";

    // // Spinner
    // var spinner = function () {
    //     setTimeout(function () {
    //         if ($('#spinner').length > 0) {
    //             $('#spinner').removeClass('show');
    //         }
    //     }, 1);
    // };
    // spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    const portfolioLightbox = GLightbox({
        selector: '.portofolio-lightbox'
      });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
    var cardSlider = new Swiper('.trading-slider', {
        autoplay: false,
        // {
        // 	delay: 4000,
        // 	disableOnInteraction: false
        // },
        loop: true,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // },
        slidesPerView: 2,
        spaceBetween: 170,
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            // when window width is >= 640px
            600: {
                slidesPerView: 2,
                spaceBetween: 70
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 70
            },
            // when window is <= 991px
            991: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
        }
    });
    var cardSlider = new Swiper('.video-portofolio-slider', {
        autoplay: false,
        // {
        // 	delay: 4000,
        // 	disableOnInteraction: false
        // },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 45
            },
            // when window width is >= 640px
            600: {
                slidesPerView: 1,
                spaceBetween: 70
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 70
            },
            // when window is <= 991px
            991: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
        }
    });
    
    
    var cardSlider = new Swiper('.promo-homes-slider', {
        autoplay:
         false,
         // {
        // 	delay: 4000,
        // 	disableOnInteraction: false
        // },
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });
    

    var cardSlider = new Swiper('.hero-profile-slider', {
        autoplay:
         false,
         // {
        // 	delay: 4000,
        // 	disableOnInteraction: false
        // },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1,
        spaceBetween: 0,
    });

     // Testimonials carousel
     $(".visi-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        loop: true,
        // center: true,
        margin:30,
        dots: false,
        responsive: {
            0:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

