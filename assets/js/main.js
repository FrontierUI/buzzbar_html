$(function () {
  $('.buzzbarStarSlider').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
    swipe: false,
    slidesToShow: 8,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 8, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $('.buzzbarStarSlider2').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
    swipe: false,
    slidesToShow: 8,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 8, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
    ],
  });
});

$(function () {
  $('.whySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$('.vapeProductSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
    },

    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});

$('.smPostSlider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
});

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);
