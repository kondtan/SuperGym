'use strict';

(function () {

  var coachBlock = document.querySelector('.coach');
  var slider = document.querySelector('.slider');
  var coachList = slider.querySelector('.coach__list');
  var coachSlides = slider.querySelectorAll('.coach__item');
  var nextButton = slider.querySelector('.slider__button--next');
  var prevButton = slider.querySelector('.slider__button--prev');

  var reviewBlock = document.querySelector('.review');
  var reviewList = reviewBlock.querySelector('.review__list');
  var reviewSlides = reviewList.querySelectorAll('.review__item');
  var reviewNext = reviewBlock.querySelector('.review__button--next');
  var reviewPrev = reviewBlock.querySelector('.review__button--prev');


  // переключаем слайды в нужном количестве

  function switchSlider(step, slides, prev, next) {
    var startIndex = 0;
    var endIndex = step;

    function showSlide(a, b) {
      for (var j = 0; j < slides.length; j++) {
        slides[j].style.display = 'none';
      }

      for (var i = a; i < b; i++) {
        if (slides[i]) {
          slides[i].style.display = 'block';
        }
      }
    }

    showSlide(startIndex, endIndex);

    function plusSlide(a) {
      showSlide(startIndex += a, endIndex += a);
    }

    prev.addEventListener('click', function () {
      if (startIndex >= step) {
        plusSlide(-step);
      }
    });

    next.addEventListener('click', function () {
      if (endIndex < slides.length) {
        plusSlide(step);
      }
    });
  }

  // переключаем слайдер с тренерами на разных ширинах

  function changeCoachSlider() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      switchSlider(1, coachSlides, prevButton, nextButton);
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      switchSlider(2, coachSlides, prevButton, nextButton);
    } else {
      switchSlider(4, coachSlides, prevButton, nextButton);
    }
  }

  if (coachBlock) {
    prevButton.classList.remove('no-js');
    nextButton.classList.remove('no-js');
    coachList.classList.remove('coach__list--no-js');
    changeCoachSlider();
    window.addEventListener('resize', changeCoachSlider);
  }

  if (reviewBlock) {
    reviewPrev.classList.remove('no-js');
    reviewNext.classList.remove('no-js');
    switchSlider(1, reviewSlides, reviewPrev, reviewNext);
  }

})();
