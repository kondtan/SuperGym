'use strict';

(function () {

  var coachBlock = document.querySelector('.coach');
  var coachList = document.querySelector('.coach__list');
  var nextButton = document.querySelector('.coach__button--next');
  var prevButton = document.querySelector('.coach__button--prev');

  if (coachBlock) {
    prevButton.classList.remove('no-js');
    nextButton.classList.remove('no-js');
    coachList.classList.remove('coach__list--no-js');

    var coachSwiper = new Swiper('.coach__slider', { // eslint-disable-line
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.coach__button--next',
        prevEl: '.coach__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        },
      },
    });
  }

})();

'use strict';

(function () {

  var reviewBlock = document.querySelector('.review');
  var reviewNext = document.querySelector('.review__button--next');
  var reviewPrev = document.querySelector('.review__button--prev');

  if (reviewBlock) {
    reviewPrev.classList.remove('no-js');
    reviewNext.classList.remove('no-js');
  }

  var reviewSwiper = new Swiper('.review__wrapper', { // eslint-disable-line
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.review__button--next',
      prevEl: '.review__button--prev',
    }
  });

})();
