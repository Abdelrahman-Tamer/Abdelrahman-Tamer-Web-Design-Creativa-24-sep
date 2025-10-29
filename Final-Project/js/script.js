$(function () {
  $("#datepicker").datepicker();
});

$(function () {
  $(".autoplay-1").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $("#myPrev"),
    nextArrow: $("#myNext"),
    dots: false,
  });
});

$(function () {
  $(".autoplay-2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    spaceBetween: 10,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  });
});

$(function () {
  $(".autoplay-3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: $(".testimonial-prev"),
    nextArrow: $(".testimonial-next"),
    dots: false,
    fade: true,
    speed: 800,
  });
});






