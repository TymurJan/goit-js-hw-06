const loginRef = document.querySelector('.login-form');

loginRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Please, fill in all fields on the form')
    } const formData = {email, password,};
    console.log(formData);
    event.currentTarget.reset();
};