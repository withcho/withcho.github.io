$(function(){

  // MENUを押すとhide-menuクラスが外れてポップアップメニューが展開する
  $('#Menu').on('click', function(){
    $('.menu-wrap').removeClass('hide-menu');
    document.getElementById("Menu").innerHTML = "Close";
  });

  // CLOSEを押すとhide-menuクラスが付与されてポップアップメニューが閉じる
  $('#Close').on('click', function(){
    $('.menu-wrap').addClass('hide-menu');
  });

});
