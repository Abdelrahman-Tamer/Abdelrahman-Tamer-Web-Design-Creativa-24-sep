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
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  });
});
$(function () {
  $(".autoplay-3").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  });
});

$(function () {
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    arrows: true,
    dots: false,
    prevArrow: $("#testimonialsArrowPrev"),
    nextArrow: $("#testimonialsArrowNext"),
  });
});
