$(function() {
  
  $('.menu_item').on('click', function() {
    $('.menu_wrap').fadeOut(1000);
    var wrap_item = $(this).attr("id") + "_wrap";
    if($("#" + wrap_item).css('display') == 'none') {
      $("#" + wrap_item).fadeIn(1000);
    }
  });

});
