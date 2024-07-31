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
function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});
window.addEventListener('load',toggleForm('credit'))
function toggleForm(e){
  document.getElementById('formType').innerHTML = e === 'credit' ? `<div class="form-floating mt-3">
    <input id="nameOnCard" type="text" class="form-control">
    <label for="nameOnCard">Name On Card</label>
  </div>
  <div class="form-floating mt-3">
    <input id="cardNumber" type="text" class="form-control">
    <label for="cardNumber">Card Number</label>
  </div>
  <div class="row g-3">
    <div class="col">
      <div class="form-floating mt-3">
        <input id="expiry_mm" type="text" class="form-control">
        <label for="expiry_mm">Expiry (mm)</label>
      </div>
      </div>
        <div class="col">
          <div class="form-floating mt-3">
            <input id="cvv" type="text" class="form-control">
            <label for="cvv">CVV</label>
          </div>
        </div>
      </div>` : `<div class="form-floating mt-3">
        <input id="accountHolder" type="text" class="form-control">
        <label for="accountHolder">Name of Account Holder</label>
      </div>
      <div class="form-floating mt-3">
        <input id="routing" type="text" class="form-control">
        <label for="routing">Routing Number</label>
      </div>
      <div class="form-floating mt-3">
        <select name="accountType" id="accountType" class="form-control">
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
        </select>
        <label for="accountType">Account Type</label>
      </div>`
    }