var pats = document.querySelector('.pats');

if (pats && window.matchMedia("(max-width: 767px)").matches) {
    var patsButtonLeft = document.querySelector('.pats__image-button--left');
    var patsButtonRight = document.querySelector('.pats__image-button--right');
    var image1 = document.querySelector('.pats__image-litle');
    var image2 = document.querySelector('.pats__image-megium');
    var image3 = document.querySelector('.pats__image-big');

    image1.classList.add('hidden');
    image2.classList.add('hidden');

    patsButtonRight.addEventListener("click", function(evt) {
        evt.preventDefault();

        if (!image1.classList.contains('hidden')) {
            image1.classList.add('hidden');
            image2.classList.remove('hidden');
        }
        else {
            if (!image2.classList.contains('hidden')) {
                image2.classList.add('hidden');
                image3.classList.remove('hidden');
            }
        }
    })

    patsButtonLeft.addEventListener("click", function(evt) {
        evt.preventDefault();

        if (!image3.classList.contains('hidden')) {
            image3.classList.add('hidden');
            image2.classList.remove('hidden');
        }
        else {
            if (!image2.classList.contains('hidden')) {
                image2.classList.add('hidden');
                image1.classList.remove('hidden');
            }
        }
    })
}