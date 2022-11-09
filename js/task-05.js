const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    outputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        outputRef.textContent = 'Anonymous';
    }
});