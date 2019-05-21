$(function(){
  
  $('#Menu').on('click', function() {
    $('#menu-wrap').toggle("slide", 1000);
    if ($(this).text() === 'Menu') {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

});
