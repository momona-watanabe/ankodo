//ハンバーガーメニュー
$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $(".menu").toggleClass('active');
  $(".cart_icon_w").toggleClass('active');
  $(".header_ttl").toggleClass('active');
  return false;
});




$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  centerMode: true,
  variableWidth: true,
  dots: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false,
  draggable: false,
  swipe: false,
  touchMove: false,
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

//link_more hover_line
$('.link_more').hover (
  function(){
    $(this).find('span').addClass('active')
  },
  function(){
    $(this).find('span').removeClass('active');
  },
);






function sclollAnime1(){

  $('.scroll_line').each(function(){ 
    var elemPos = $(this).offset().top-10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('span').addClass('active');
    }else{
    $(this).find('span').removeClass('active');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime1();
  });



function sclollAnime2(){

  $('.link_more').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('span').addClass('active');
    }else{
    $(this).find('span').removeClass('active');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime2();
  });






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
