// accessing all elements
const form = document.getElementById('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


// adding events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

const success = (usernameVal,rate, count) => {
    if (rate === count)
        window.alert(`Congratulations ${usernameVal}!!, Your Registration is Successfull!`);
}


// defining successmsg function
const successMsg = (usernameVal) => {
    let formContain = document.getElementsByClassName('form-container');

    var count = formContain.length - 1;
    for (var i = 0; i < formContain.length; i++) {
        if (formContain[i].className === "form-container success") {
            var rate = 0 + i;
            success(usernameVal, rate, count);
        }
        else {
            return false;
        }
    }
}


// email validation function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;

    if (dot === emailVal.length - 1) return false;

    return true;
}


// validate function
const validate = () => {
    // use trim() to remove white space from stating & the last position
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();


    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    }
    else if (usernameVal.length < 5) {
        setErrorMsg(username, 'username must be atleast 3 character long')
    }
    else {
        setSuccessMsg(username);
    }


    // validate email logic
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'invalid email')
    }
    else {
        setSuccessMsg(email);
    }


    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
    }
    else if (phoneVal === "123456789" || phoneVal === "0123456789" || phoneVal === "1234567890") {
        setErrorMsg(phone, 'please enter a valid phone number');
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'invalid number')
    }
    else {
        setSuccessMsg(phone);
    }


    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'password is required');
    }
    else if (passwordVal == "password" || passwordVal == "PASSWORD" || passwordVal == "Password") {
        setErrorMsg(password, 'password is not strong use a stronger password');
    }
    else if (passwordVal == usernameVal) {
        setErrorMsg(password, 'passwords should not match the username');
    }
    else if (passwordVal.length < 8) {
        setErrorMsg(password, 'minimum 8 character is required')
    }
    else {
        setSuccessMsg(password);
    }


    // validate confirm password
    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, 'confirm password is required');
    }
    else if (passwordVal != confirmPasswordVal) {
        setErrorMsg(confirmPassword, 'password must be same')
    }
    else {
        setSuccessMsg(confirmPassword);
    }


    // checking before submission
    successMsg(usernameVal);
}


// defining error message
function setErrorMsg(input, error) {
    const formContainer = input.parentElement;
    const small = formContainer.querySelector('small');
    formContainer.className = "form-container error";
    small.innerText = error;
}

// defining success message
function setSuccessMsg(input) {
    const formContainer = input.parentElement;
    formContainer.className = "form-container success";
}