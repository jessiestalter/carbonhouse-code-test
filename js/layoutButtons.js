/* layoutButtons.js */
/* implements logic to toggle between grid & column layouts using the layout buttons */

let gridLayoutButton = $('#gridLayoutButton');
let columnLayoutButton = $('#columnLayoutButton');

let mainGridDivDesktop = $('#mainGridDivDesktop');
let mainGridDivMobile = $('#mainGridDivMobile');

gridLayoutButton.click(function() {
    if (!gridLayoutButton.hasClass('selected')) {
        gridLayoutButton.addClass('selected');
    }
    if (columnLayoutButton.hasClass('selected')) {
        columnLayoutButton.removeClass('selected');
    }

    mainGridDivDesktop.css('display', 'flex');
    mainGridDivMobile.css('display', 'none');

    if (mainGridDivMobile.hasClass('onDesktop')) {
        mainGridDivMobile.removeClass('onDesktop');
    }
});

columnLayoutButton.click(function() {
    if (gridLayoutButton.hasClass('selected')) {
        gridLayoutButton.removeClass('selected');
    }
    if (!columnLayoutButton.hasClass('selected')) {
        columnLayoutButton.addClass('selected');
    }

    mainGridDivDesktop.css('display', 'none');
    mainGridDivMobile.css('display', 'flex');
    
    if (!mainGridDivMobile.hasClass('onDesktop') && window.innerWidth >= 767) {
        mainGridDivMobile.addClass('onDesktop');
    }
});

// toggle between mobile & desktop layouts based on screen size
// also make sure 'onDesktop' class is not on mainGridDivMobile once screen size is small enough
$(window).ready(function(){
    if (window.innerWidth < 767){
        mainGridDivDesktop.css('display', 'none');
        mainGridDivMobile.css('display', 'flex');
    }
});

$(window).resize(function(){
    if (window.innerWidth < 767){
        mainGridDivMobile.removeClass('onDesktop');
        mainGridDivDesktop.css('display', 'none');
        mainGridDivMobile.css('display', 'flex');
    }
    else if (columnLayoutButton.hasClass('selected') && !mainGridDivMobile.hasClass('onDesktop')) {
        mainGridDivMobile.addClass('onDesktop');
    }
    else if (gridLayoutButton.hasClass('selected')) {
        mainGridDivDesktop.css('display', 'flex');
        mainGridDivMobile.css('display', 'none');
    }
});