/* socialPosts.js */
/* Implements scroll functionality for social posts */
/* Implements dynamically changing content for social posts */

/* Scroll button functionality */

let leftScrollButton = $('#leftScroll');
let rightScrollButton = $('#rightScroll');
let scrollableArea = document.getElementById("twitterPostsList");

leftScrollButton.click(function() {
    scrollableArea.scrollBy(-75, 0);
});

rightScrollButton.click(function() {
    scrollableArea.scrollBy(75, 0);
});

/* Dynamic social posts functionality */
let twitterTab = $('#twitterTab');
let instagramTab = $('#instagramTab');
let facebookTab = $('#facebookTab');

let twitterPostsList = $('#twitterPostsList');
let instagramPostsList = $('#instagramPostsList');
let facebookPostsList = $('#facebookPostsList');

twitterTab.click(function() {
    twitterPostsList.css('display', 'flex');
    instagramPostsList.css('display', 'none');
    facebookPostsList.css('display', 'none');
    if (!twitterTab.hasClass('active')) {
        twitterTab.addClass('active');
    }
    instagramTab.removeClass('active');
    facebookTab.removeClass('active');
    scrollableArea = document.getElementById("twitterPostsList");
});

instagramTab.click(function() {
    twitterPostsList.css('display', 'none');
    instagramPostsList.css('display', 'flex');
    facebookPostsList.css('display', 'none');
    if (!instagramTab.hasClass('active')) {
        instagramTab.addClass('active');
    }
    twitterTab.removeClass('active');
    facebookTab.removeClass('active');
    scrollableArea = document.getElementById("instagramPostsList");
});

facebookTab.click(function() {
    twitterPostsList.css('display', 'none');
    instagramPostsList.css('display', 'none');
    facebookPostsList.css('display', 'flex');
    if (!facebookTab.hasClass('active')) {
        facebookTab.addClass('active');
    }
    instagramTab.removeClass('active');
    twitterTab.removeClass('active');
    scrollableArea = document.getElementById("facebookPostsList");
});