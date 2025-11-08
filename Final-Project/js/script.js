/* Datepicker */
$(function () {
  $("#datepicker").datepicker();
});

/* Specialities Slider */
$(function () {
  $(".autoplay-1").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $("#myPrev"),
    nextArrow: $("#myNext"),
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

/* Best Doctors Slider */
$(function () {
  $(".autoplay-2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  });
});

/* Partners Slider */
$(function () {
  $(".autoplay-3").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/* Testimonials Slider */
$(function () {
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: $("#testimonialsArrowPrev"),
    nextArrow: $("#testimonialsArrowNext"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          speed: 1000,
        },
      },
    ],
  });
});

/* Scroll*/
var toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (!toTop) return;
  var scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  toTop.value = Math.round(scrollPercent);
  scrollPercent > 0
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
});

toTop?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
