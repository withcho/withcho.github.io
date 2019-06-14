$(function() {
  
  // show menu
  $('.menu_item').on('click', function() {
    var wrap_item = $(this).attr("id") + "_wrap";
    if($("#" + wrap_item).css('display') == 'none') {
      $('.menu_wrap').fadeOut();
      $("#" + wrap_item).fadeIn();
    }
  });
  
  $('#menu_item5').on('click', function() {
    $('.menu_wrap').fadeOut();
  });

  // show scroll
  $('#menu_item3_wrap').on('scroll', function() {
    if($(this).scrollTop() != 0) {
      $('.scroll_arrow').fadeOut();
    } else {
      $('.scroll_arrow').fadeIn();
    }
});

var loading = function(){
  $('#Loading').fadeOut();
}
setTimeout(loading, 6000);
