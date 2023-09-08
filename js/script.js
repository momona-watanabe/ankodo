


//loadingアニメーション
//フェードアウトした後に動かしたいJSをまとめる
$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与
  });
});





/*Inview js*/

$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});
