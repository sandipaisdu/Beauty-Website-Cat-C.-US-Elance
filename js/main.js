    // set everything outside the onscroll event (less work per scroll)
var left      = document.getElementById("contact"),
    // -60 so it won't be jumpy
    stop      = left.offsetTop - 60,
    docBody   = document.documentElement || document.body.parentNode || document.body,
    hasOffset = window.pageYOffset !== undefined,
    scrollTop;

window.onscroll = function (e) {
  // cross-browser compatible scrollTop.
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

  // if user scrolls to 60px from the top of the left div
  if (scrollTop >= stop) {
    // stick the div
    left.className = 'stick';
  } else {
    // release the div
    left.className = ''; 
  }
}

