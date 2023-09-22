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
  speed: 2500,
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
$(document).on('mouseenter', '.menu_list a', function() {
  0 == $(this).find('.hover_line').hasClass('line_on') && ($(this).find('.hover_line').removeClass('line_off'),
  $(this).find('.hover_line').addClass('line_on'))
}),
$(document).on('mouseleave', '.menu_list a', function() {
  $(this).find('.hover_line').hasClass('line_on') && ($(this).find('.hover_line').removeClass('line_on'),
  $(this).find('.hover_line').addClass('line_off'))
});










//link_more hover_line
$('.link_more').hover (
  function(){
    $(this).find('span').addClass('active')
  },
  function(){
    $(this).find('span').removeClass('active');
  },
);

//online_line hover_line
$('.footer_onlineshop a').hover (
  function(){
    $(this).find('.online_line span').addClass('active')
    $(this).find('.online_img1').addClass('none')
    $(this).find('.online_img2').addClass('active')
  },
  function(){
    $(this).find('.online_line span').removeClass('active')
    $(this).find('.online_img1').removeClass('none')
    $(this).find('.online_img2').removeClass('active');
  },
);


//imfo_list　ホバー時に画像拡大
$('.info_list li').hover (
  function(){
    $(this).find('.info_img span img').addClass('active')
  },
  function(){
    $(this).find('.info_img span img').removeClass('active');
  },
);

//news_list　ホバー時に画像拡大
$('.news_list li').hover (
  function(){
    $(this).find('.news_img span img').addClass('active')
  },
  function(){
    $(this).find('.news_img span img').removeClass('active');
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



function sclollAnime3(){

  $('.recommend_img').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('img').addClass('active');
    }else{
    $(this).find('img').removeClass('active');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime3();
  });



function sclollAnime4(){

  $('.other_list').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('img').addClass('active');
    }else{
    $(this).find('img').removeClass('active');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime4();
  });



  function scrollAnime5() {
    $('.info_list li').each(function() {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).find('.info_img img').addClass('small');
        $(this).find('.info_img span').addClass('active');
      } else {
        $(this).find('.info_img img').removeClass('small');
        $(this).find('.info_img span').removeClass('active');
      }
    });
  }
  $(window).scroll(function() {
    scrollAnime5();
  });



function sclollAnime6(){

  $('.news_list li').each(function(){ 
    var elemPos = $(this).offset().top-10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).find('.news_img span img').addClass('small');
    }else{
    $(this).find('.news_img span img').removeClass('small');
    }
    });
}

  $(window).scroll(function (){
    sclollAnime6();
  });



  function sclollAnime7(){

    $('.footer_onlineshop').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).find('.footer_online_img').addClass('active');
      }else{
      $(this).find('.footer_online_img').removeClass('active');
      }
      });
    }
  
    $(window).scroll(function (){
      sclollAnime7();
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
