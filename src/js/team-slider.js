var teamSlider = document.querySelector('.team-slider');

if (teamSlider) {
    var slide1 = document.querySelector('.js-team-slide-1');
    var slide2 = document.querySelector('.js-team-slide-2');
    var buttonLeft = document.querySelector('.team-slider__slider-button--left');
    var buttonRight = document.querySelector('.team-slider__slider-button--right');

    buttonLeft.addEventListener("click", function(evt) {
        evt.preventDefault();
        slide1.classList.remove('visually-hidden');
        slide2.classList.add('visually-hidden');
    })

    buttonRight.addEventListener("click", function(evt) {
        evt.preventDefault();
        slide1.classList.add('visually-hidden');
        slide2.classList.remove('visually-hidden');
    })
}