$(function(){
  
  $('#Menu').on('click', function() {
    $('#menu-wrap').slideToggle(500);
    if ($(this).text() === 'Menu') {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

});
