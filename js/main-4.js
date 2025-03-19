document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
     // Sticky Navbar
     $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });
     // Facts counter
     $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });
});