var buttonOpen = document.querySelector('.answers__add-question');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');
var buttonClose = document.querySelector('.modal__close');

if (buttonOpen) {
    buttonOpen.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })

    buttonClose.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    overlay.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    window.addEventListener("keydown", function(evt){
        console.log(evt.key);
        if (evt.key === "Escape") {
            evt.preventDefault();
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    })
}

if (modal)
{
    var requiredsFild = form.querySelectorAll('input[required]');
    requiredsFild.forEach(function(field) {
        field.required = false;
    });
    
    modal.addEventListener("submit", function(evt) {
        evt.preventDefault();
        let isNotReportValidity = true;
    
        requiredsFild.forEach(function(field) {
            field.addEventListener('input', function() {
                if (field.value) {
                    field.setCustomValidity('');
                    isNotReportValidity = true;
                }
            });
            
            if (!field.value && isNotReportValidity) {
                field.setCustomValidity('Заполните обязательное поле');
                field.reportValidity();
                isNotReportValidity = false;
            }
    
            if (!field.value) {
                field.classList.add('js-required');
            }
        });
    
    });
}
