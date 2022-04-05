var answers = document.querySelector('.answers');

if (answers) {
    var button1 = document.querySelector('.js-answers-button-1');
    var button2 = document.querySelector('.js-answers-button-2');
    var button3 = document.querySelector('.js-answers-button-3');
    var button4 = document.querySelector('.js-answers-button-4');
    var answer1 = document.querySelector('.js-answer-1');
    var answer2 = document.querySelector('.js-answer-2');
    var answer3 = document.querySelector('.js-answer-3');
    var answer4 = document.querySelector('.js-answer-4');

    button1.addEventListener("click", function(evt) {
        evt.preventDefault();
        answer1.classList.toggle('hidden');

        if (button1.innerHTML === "-") {
            button1.innerHTML = "+";
        }
        else {
            button1.innerHTML = "-";
        }
    })

    button2.addEventListener("click", function(evt) {
        evt.preventDefault();
        answer2.classList.toggle('hidden');

        if (button2.innerHTML === "-") {
            button2.innerHTML = "+";
        }
        else {
            button2.innerHTML = "-";
        }
    })

    button3.addEventListener("click", function(evt) {
        evt.preventDefault();
        answer3.classList.toggle('hidden');

        if (button3.innerHTML === "-") {
            button3.innerHTML = "+";
        }
        else {
            button3.innerHTML = "-";
        }
    })

    button4.addEventListener("click", function(evt) {
        evt.preventDefault();
        answer4.classList.toggle('hidden');

        if (button4.innerHTML === "-") {
            button4.innerHTML = "+";
        }
        else {
            button4.innerHTML = "-";
        }
    })
}