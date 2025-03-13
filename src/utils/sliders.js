// Observation Slider Setting
export const observationSliderSettings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 1200,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  swipeToSlide: true,
  arrows: false,
  className: "observationSlider",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
