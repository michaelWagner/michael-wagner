$(document).ready(function() {
  $('.toggle-nav').sidr({
    side: 'right'
  });
});

$(window).resize(function() {
  console.log($(window).width());
  if ($(window).width() > 601) {
    jQuery.sidr('close', 'sidr', none);
  }
});