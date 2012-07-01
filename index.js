$(document).ready(function() {

  $('body').on('click', '.more-link', function(event) {
    show_more_content($(event.target));
  });

  $('body').on('click', '.less-link', function(event) {
    hide_more_content($(event.target));
  });

  function show_more_content($ele) {
    $ele.addClass('visible-desktop');
    $ele.next().removeClass('visible-desktop');
  }

  function hide_more_content($ele) {
    $ele.parent().addClass('visible-desktop');
    $ele.parent().prev().removeClass('visible-desktop');
  }
});
