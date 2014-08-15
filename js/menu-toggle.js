$(document).ready(function() {
  $('.toggle-nav').sidr({
    side: 'right'
  });
});

$(window).resize(function() {
  if ($('#sidr').css('display') == 'block' && $(window).width() > 605) {
    $('.toggle-nav').click();
  }
});