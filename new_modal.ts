let firstName:HTMLInputElement = document.querySelector('.form-input-name');
let firstName1:HTMLInputElement = document.querySelector('.form-input-name1');
let firstEmail:HTMLInputElement = document.querySelector('.form-input-email');
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