// $(document).ready(function() {
//     $("#phonenumber").mask("+38 (099) 99-99-999");
// });

let firstName = document.querySelector('.form-input-email');
let firstName1 = document.querySelector('.form-input-email1');
let firstEmail = document.querySelector('.form-input-email2');

firstName.oninput = () =>{
    let error_my = document.querySelector('.error');
    // let valid = document.querySelector('.my-valid');
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

firstName1.oninput = () =>{
    let error_my = document.querySelector('.error1');
    console.log(firstName1.value);
    if(firstName1.value.length < 3){
        error_my.style.visibility = "visible";
        firstName1.classList.add('invalid-input');
    }else {
        firstName1.classList.add('my-valid');
        firstName1.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
}
firstEmail.oninput = () =>{
    let error_my = document.querySelector('.error2');
    console.log(firstEmail.value);
    if(firstEmail.value.length < 3){
        error_my.style.visibility = "visible";
        firstEmail.classList.add('invalid-input');
    }else {
        firstEmail.classList.add('my-valid1');
        firstEmail.classList.remove('invalid-input');
        error_my.style.visibility = "hidden";
    }
    check();
}

function check(){
    let formBtn = document.querySelector('.form-account');
    if (firstName.value.length < 3 && firstName1.value.length < 3 && firstEmail.value.length < 0 ){
        formBtn.setAttribute('disabled', 'disabled');
    }else{
        formBtn.removeAttribute('disabled');
    }
}