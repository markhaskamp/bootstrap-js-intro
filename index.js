$(document).ready(function() {

  $('body').on('click', '.more-link', function(event) {
    $more_link = $(event.target);
    $more_link.addClass('visible-desktop');
    $more_link.next().removeClass('visible-desktop');
  });

  $('body').on('click', '.less-link', function(event) {
    $less_link = $(event.target);
    $less_link.parent().addClass('visible-desktop');
    $less_link.parent().prev().removeClass('visible-desktop');
  });
});
