$(function(){
  
  $('#Menu').on('click', function() {
    $('#menu-wrap').toggle("slide");
    if ($(this).text() === 'Menu') {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

});
