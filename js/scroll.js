const leftScrollButton = document.getElementById("leftScroll");
const rightScrollButton = document.getElementById("rightScroll");
const scrollableArea = document.getElementById("twitterPostsList");

function scrollLeft() {
    scrollableArea.scrollBy(75, 0);
}

function scrollRight() {
    scrollableArea.scrollBy(-75, 0);
}

leftScrollButton.addEventListener("click", scrollRight);
rightScrollButton.addEventListener("click", scrollLeft);