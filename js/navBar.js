/* navBar.js */
/* implements hover styling for nav bar links */

let navLinks = $('.navLink');

navLinks.mouseover(function(event) {
    navLinks.addClass('inactive');
    event.currentTarget.classList.remove('inactive');
});

navLinks.mouseout(function() {
    navLinks.removeClass('inactive');
});