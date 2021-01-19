var firstName = document.querySelector('.form-input-name');
var firstName1 = document.querySelector('.form-input-name1');
var firstEmail = document.querySelector('.form-input-email');
var formBtn = document.querySelector('.form-account');
firstName.oninput = function () {
    var error_my = document.querySelector('.error');
    console.log(firstName.value);
    if (firstName.value.length < 3) {
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }
    else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
};
firstName1.oninput = function () {
    var error_my = document.querySelector('.error1');
    console.log(firstName.value);
    if (firstName.value.length < 3) {
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }
    else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
};
firstEmail.oninput = function () {
    var error_my = document.querySelector('.error2');
    console.log(firstName.value);
    if (firstName.value.length < 3) {
        error_my.style.visibility = "visible";
        firstName.classList.add('invalid-input');
    }
    else {
        firstName.classList.add('my-valid');
        firstName.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
};
var check = function () {
    if (firstName1.value.length < 3 && firstName1.value.length < 3 && firstEmail.value.length < 0) {
        formBtn.setAttribute('disabled', 'disabled');
    }
    else {
        formBtn.removeAttribute('disabled');
    }
};
