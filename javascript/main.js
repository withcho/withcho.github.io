$(function(){
  
  $('#Menu').on('click', function() {
    $('#menu-wrap').slideToggle();
    if ($(this).text() === 'Menu') {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

});
