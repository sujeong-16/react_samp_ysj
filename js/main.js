// 마우스 이벤트
$(function() {
  $("#menu ul li a").on("mouseenter", function(){
    $("#submenu").stop().slideDown(300);
  });

  $("#menu-box").on("mouseleave", function() {
    $("#submenu").stop().slideUp(300);
  });

  $("#banner").slick({
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    autoplaySpeed: 3000
  });

  $("#main2 ul").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });
});