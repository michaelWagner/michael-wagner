$(document).ready(function() {
  $('.toggle-nav').sidr({
    side: 'right'
  });
});

$(window).resize(function() {
  console.log($(window).width());
  if ($('#sidr').css('display') == 'block' && $(window).width() > 605) {
    $('.toggle-nav').click();
  }
});