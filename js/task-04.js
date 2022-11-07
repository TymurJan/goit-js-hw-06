const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = valueRef.textContent;

decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
});

incrementRef.addEventListener('click', () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
});
