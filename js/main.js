$(".banner__slider").slick({
  dots: true,
  autoplay: true,
  slidesToScroll: 1,
});
$(".product__slider").slick({
  dots: true,
  autoplay: false,
  slidesToScroll: 1,
  infinite: false,
});

$(".banner__mainSlider").slick({
  dots: true,
  arrows: true,
  autoplay: true,
  slidesToScroll: 1,
});

$(".navigation__button").click(function () {
  if ($("body").hasClass("menuActive")) {
    $("body").removeClass("menuActive");
  } else {
    $("body").addClass("menuActive");
  }
});

$(".Question__links").click(function (e) {
  e.preventDefault();
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
});

$(".main__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".thumb__slider",
  vertical: true,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: true,
        vertical: false,
      },
    },
  ],
});
$(".thumb__slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".main__slider",
  dots: false,
  focusOnSelect: true,
  vertical: true,
  loop: false,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        unslick: true,
      },
    },
  ],
});

$(".productFilter__Slider.metal").slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
});

$(".productFilter__Slider.shape, .productFilter__Slider.carat").slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".product__filter-link").click(function () {
  if (!$(this).hasClass("active")) {
    $(".filter__section").slideDown();
    $(this).addClass("active");
  } else {
    $(".filter__section").slideUp();
    $(this).removeClass("active");
  }
});

$(".nav__sub").click(function () {
  if (!$(this).hasClass("active")) {
    $(this).next().slideDown("slow");
    $(this).addClass("active");
  } else {
    $(this).next().slideUp("slow");
    $(this).removeClass("active");
  }
});
