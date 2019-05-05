$(function(){

  // MENUを押すとhide-menuクラスが外れてポップアップメニューが展開する
  $('.Menu').on('click', function(){
    $('.menu-wrap').removeClass('hide-menu');
    $('.Menu').innerHTML = "Close";
    this.classList.toggle("Close");
  });

  // CLOSEを押すとhide-menuクラスが付与されてポップアップメニューが閉じる
  $('.Close').on('click', function(){
    $('.menu-wrap').addClass('hide-menu');
    $('.Close').innerHTML = "Menu";
    this.classList.toggle("Menu");
  });

});
