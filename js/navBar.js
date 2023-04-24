/* navBar.js */
/* Implements hover styling for nav bar links */
/* Implements navBar scroll down functionality */

/* Nav bar link hover styling */

let navLinks = $('.navLink');

navLinks.mouseover(function(event) {
    navLinks.addClass('inactive');
    event.currentTarget.classList.remove('inactive');
});

navLinks.mouseout(function() {
    navLinks.removeClass('inactive');
});

/* Nav bar scroll down functionality */
// var prevPosition = window.pageYOffset;
// window.onscroll = function() {
//   var currPosition = window.pageYOffset;
//   if (prevPosition < currPosition) {
//     $('#navBar').addClass('topGone');
//   } else {
//     $('#navBar').removeClass('topGone');
//   }
//   prevPosition = currPosition;
// }