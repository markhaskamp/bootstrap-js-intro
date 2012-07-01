$(document).ready(function() {

  $('body').on('click', '.more-link', function(event) {
    $more_link = $(event.target);
    $more_link.addClass('hidden-tablet');
    $more_link.next().removeClass('hidden-tablet');
  });

  $('body').on('click', '.less-link', function(event) {
    $less_link = $(event.target);
    $less_link.parent().addClass('hidden-tablet');
    $less_link.parent().prev().removeClass('hidden-tablet');
  });
});
