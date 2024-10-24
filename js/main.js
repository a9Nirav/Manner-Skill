(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


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

    
})(jQuery);




// for logo swip

document.addEventListener("DOMContentLoaded", function() {
    const sliderTrack = document.querySelector(".slide-track");
    const slides = Array.from(document.querySelectorAll(".slide1"));
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    
    // Duplicate slides
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
    
    let position = 0;
    
    function startScroll() {
        position -= 1; // Adjust speed by changing this value
        if (position <= -slideWidth * totalSlides) {
            position = 0; // Reset position when the first set ends
        }
        sliderTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(startScroll);
    }

    // Start the infinite scroll
    startScroll();
});



// document.addEventListener("DOMContentLoaded", function() {
//     const sliderTrack = document.querySelector(".slide-track");
//     const slides = Array.from(document.querySelectorAll(".slide1"));
//     const totalSlides = slides.length;
//     const slideWidth = slides[0].offsetWidth; // Each slide's width (250px)
    
//     let position = 0;
    
//     function startScroll() {
//         position -= 1; // Controls the scroll speed (increase or decrease this value to control speed)
        
//         // If we reach the end of the slides, instantly reset position to the start
//         if (position <= -(slideWidth * totalSlides)) {
//             position = 0;
//         }
        
//         // Apply the transformation to the slider track
//         sliderTrack.style.transform = `translateX(${position}px)`;
        
//         // Request the next animation frame to continuously scroll
//         requestAnimationFrame(startScroll);
//     }
    
//     // Start the scrolling effect
//     startScroll();
// });



