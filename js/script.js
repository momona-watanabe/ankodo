//ハンバーガーメニュー
$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $(".menu").toggleClass('active');
  $(".cart_icon_w").toggleClass('active');
  $(".header_ttl").toggleClass('active');
  return false;
});




//Menu hover_line
$('.menu_list a').hover (
  function(){
    $(this).find('.hover_line').addClass('active')
  },
  function(){
    $(this).find('.hover_line').removeClass('active');
  },
);


$('.link_more').hover (
  function(){
    $(this).find('span').addClass('active')
  },
  function(){
    $(this).find('span').removeClass('active');
  },
);





//loadingアニメーション
$(window).on('load',function(){

//フェードアウトした後に動かしたいJSをまとめる
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
