$(function() {
  
  $('#menu_item1').on('click', function() {
    if($('#menu_wrap2').css('display') != 'none' || $('#menu_wrap3').css('display') != 'none' || $('#menu_wrap4').css('display') != 'none') {
      $('.menu_wrap').hide("slide", 1000);
    }
    if($('#menu_wrap1').css('display') == 'none') {
      $('#menu_wrap1').toggle("slide", 1000);
    }
  });
  $('#menu_item2').on('click', function() {
    if($('#menu_wrap1').css('display') != 'none' || $('#menu_wrap3').css('display') != 'none' || $('#menu_wrap4').css('display') != 'none') {
      $('.menu_wrap').hide("slide", 1000);
    }
    if($('#menu_wrap2').css('display') == 'none') {
      $('#menu_wrap2').toggle("slide", 1000);
    }
  });
  $('#menu_item3').on('click', function() {
    if($('#menu_wrap1').css('display') != 'none' || $('#menu_wrap2').css('display') != 'none' || $('#menu_wrap4').css('display') != 'none') {
      $('.menu_wrap').hide("slide", 1000);
    }
    if($('#menu_wrap3').css('display') == 'none') {
      $('#menu_wrap3').toggle("slide", 1000);
    }
  });
  $('#menu_item4').on('click', function() {
    if($('#menu_wrap1').css('display') != 'none' || $('#menu_wrap2').css('display') != 'none' || $('#menu_wrap3').css('display') != 'none') {
      $('.menu_wrap').hide("slide", 1000);
    }
    if($('#menu_wrap4').css('display') == 'none') {
      $('#menu_wrap4').toggle("slide", 1000);
    }
  });
  $('#menu_item5').on('click', function() {
    if($('.menu_wrap').css('display') != 'none') {
      $('.menu_wrap').hide("slide", 1000);
    }
  });

});
