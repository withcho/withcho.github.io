$(function() {
  
  $('.menu_item').on('click', function() {
    var wrap_item = $(this).attr("id") + "_wrap";
    if($("#" + wrap_item).css('display') == 'none') {
      $('.menu_wrap').fadeOut(1000);
      $("#" + wrap_item).fadeIn(1000);
    }
  });

});
