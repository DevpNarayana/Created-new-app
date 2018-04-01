const name = document.getElementById('name');
name.addEventListener('blur', validateName);
const zip = document.getElementById('zip');
zip.addEventListener('blur', validateZip);
const email = document.getElementById('email')
email.addEventListener('blur', validateEmail);
const phone = document.getElementById('phonenumber');
phone.addEventListener('blur', validatePhone);

function validateName() {
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }

}

function validateZip() {

    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {

    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).[a-zA-Z]{2,5}$/;
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const re = /^\(?\d{3}\)?[\-\. ]?\d{3}[\-\. ]?\d{4}$/;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}