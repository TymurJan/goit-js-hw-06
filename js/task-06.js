const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {   
    inputRef.classList.remove(`valid`);
    inputRef.classList.remove(`invalid`);

    if (Number(event.currentTarget.value.length) === Number(inputRef.dataset.length)) {
        return inputRef.classList.add('valid');
    } return inputRef.classList.add('invalid')
};