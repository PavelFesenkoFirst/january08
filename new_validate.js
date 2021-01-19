var firstName = document.querySelector('.form-input-email');
var firstName1 = document.querySelector('.form-input-email1');
var firstEmail = document.querySelector('.form-input-email2');
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
document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.open-modal');
    var overlay = document.querySelector('.overlay-modal');
    var closeButtons = document.querySelectorAll('.modal-close');
    var modalElem = document.querySelector('#modal');
    modalButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });
    closeButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            var parentModal = this.closest('#modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    document.body.addEventListener('keyup', function (e) {
        var key = e.key;
        if (key === 'Escape') {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        }
        ;
    }, false);
    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});
