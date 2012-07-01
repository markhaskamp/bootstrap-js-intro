$(document).ready(function() {

  $('body').on('click', '.more-link', function(event) {
    $more_link = $(event.target);
    $more_link.removeClass('visible-tablet');
    $more_link.hide();
    $more_link.next().removeClass('hidden-tablet');
  });
});
