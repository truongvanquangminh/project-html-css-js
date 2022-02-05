var username = document.querySelector('#user');
var email = document.querySelector('#email');
var password = document.querySelector('#pass');
var confirmPassword = document.querySelector('#confirm-pass');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;

    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống');
        } else {
            showSuccess(input);
        }
    });

    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input);
    } else {
        showError(input, 'Email không hợp lệ');
    }

    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if(input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }
    if(input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`);
        return true;
    }
    return false;
}

function checkMatchPasswordError(passInput, cfPassInput) {
    if(passInput.value != cfPassInput.value) {
        showError(cfPassInput, 'Mật khẩu không khớp');
        return true;
    }
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 8, 20);
    let isPasswordLengthError = checkLengthError(password, 8, 20);
    let isCheckMatchError = checkMatchPasswordError(password, confirmPassword);

    if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isCheckMatchError) {
        //do nothing
    } else {
        //logic, call api...
    }
})