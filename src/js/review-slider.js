var reviewSlider = document.querySelector('.reviews-slider');

if (reviewSlider) {
    var Slide1 = document.querySelector('.js-reviews-slide-1');
    var Slide2 = document.querySelector('.js-reviews-slide-2');
    var ButtonLeft = document.querySelector('.reviews-slider__button--left');
    var ButtonRight = document.querySelector('.reviews-slider__button--right');

    ButtonLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        Slide1.classList.remove('visually-hidden');
        Slide2.classList.add('visually-hidden');
    })

    ButtonRight.addEventListener("click", function(evt) {
        evt.preventDefault();
        Slide1.classList.add('visually-hidden');
        Slide2.classList.remove('visually-hidden');
    })
}