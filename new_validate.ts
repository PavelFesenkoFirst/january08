let firstName:HTMLInputElement = document.querySelector('.form-input-email');
let firstName1:HTMLInputElement = document.querySelector('.form-input-email1');
let firstEmail:HTMLInputElement = document.querySelector('.form-input-email2');
let formBtn:HTMLButtonElement = document.querySelector('.form-account');

firstName.oninput = () => {
    let error_my:HTMLBodyElement = document.querySelector('.error');
    console.log(firstName.value);
    if(firstName.value.length < 3){
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
}
firstName1.oninput = () => {
    let error_my:HTMLBodyElement = document.querySelector('.error1');
    console.log(firstName.value);
    if(firstName.value.length < 3){
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
}
firstEmail.oninput = () => {
    let error_my:HTMLBodyElement = document.querySelector('.error2');
    console.log(firstName.value);
    if(firstName.value.length < 3){
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
}
let check = () => {
    if (firstName1.value.length < 3 && firstName1.value.length < 3 && firstEmail.value.length < 0 ){
        formBtn.setAttribute('disabled', 'disabled');
    }else{
        formBtn.removeAttribute('disabled');
    }
}






document.addEventListener('DOMContentLoaded', () => {

    const modalButtons:NodeListOf<Element> = document.querySelectorAll('.open-modal');
    const overlay:HTMLDivElement = document.querySelector('.overlay-modal');
    const closeButtons:NodeListOf<Element> = document.querySelectorAll('.modal-close');
    const modalElem:HTMLDivElement = document.querySelector('#modal');

    modalButtons.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });

    closeButtons.forEach((item) =>{
        item.addEventListener('click', function(e) {
            const parentModal = this.closest('#modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        const key = e.key;

        if (key === 'Escape') {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

});