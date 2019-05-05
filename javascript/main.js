$(function(){

  // MENUを押すとhide-menuクラスが外れてポップアップメニューが展開する
  $('.Menu').on('click', function(){
    $('.menu-wrap').removeClass('hide-menu');
    var elements = document.getElementsByClassName("Menu");
    elements[0].innerHTML = "Close";
    this.classList.toggle("Close");
  });

  // CLOSEを押すとhide-menuクラスが付与されてポップアップメニューが閉じる
  $('.Close').on('click', function(){
    $('.menu-wrap').addClass('hide-menu');
    var elements = document.getElementsByClassName("Close");
    elements[0].innerHTML = "Menu";
    this.classList.toggle("Menu");
  });

});
