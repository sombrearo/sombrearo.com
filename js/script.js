
// Smooth scroll to an item
function smoothScrollTo(x, f=null) {
  if (f == null) f = () => {};
  $([document.documentElement, document.body]).animate({
    scrollTop: x.offset().top
  }, 1000, f);
}

// Toggle a page
function togglePage(id) {
  $('#content > .page').hide();
  $('#' + id).fadeIn('slow');
  smoothScrollTo($('#content'));
}

// Add handlers for nav links
function initNavLinks() {
  $('#nav-links > a.pageLink').click((e) => togglePage($(e.currentTarget).text().toLowerCase()));
}

// Return to top of page
function toTop() {
  $('#content > .page').fadeTo('slow', 0);
  smoothScrollTo($('html'), () => {
    $('#content > .page').hide();
    $('#content > .page').css('opacity', 1);
  });
}

// Add handlers for up arrows
function initUpArrows() {
  $('.up-arrow').click(toTop);
}

// Add handlers for down arrows
function initDownArrows() {
  $(".down-arrow").click(function () { smoothScrollTo($(this)) });
}


// Main
$(document).ready(() => {
  initNavLinks();
  initUpArrows();
  initDownArrows();
});
