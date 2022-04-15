var navigation = document.querySelector('.main-navigation');

if (navigation && window.matchMedia("(max-width: 320px)").matches) {
    var pages = document.querySelector('.main-navigation__list');
    var OpenMenu = document.querySelector('.main-navigation__closed');
    var CloseMenu = document.querySelector('.main-navigation__opened');

    OpenMenu.classList.remove('not-show');
    pages.classList.add('not-show');

    OpenMenu.addEventListener("click", function(evt) {
        evt.preventDefault();

        pages.classList.remove('not-show');
        CloseMenu.classList.remove('not-show');
        OpenMenu.classList.add('not-show');
    })

    CloseMenu.addEventListener("click", function(evt) {
        evt.preventDefault();

        pages.classList.add('not-show');
        CloseMenu.classList.add('not-show');
        OpenMenu.classList.remove('not-show');
    })
}