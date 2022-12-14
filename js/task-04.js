const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

decrementRef.addEventListener('click', () => {
    counterValue += Number(decrementRef.textContent);
    document.getElementById('value').textContent = counterValue;
});

incrementRef.addEventListener('click', () => {
    counterValue += Number(incrementRef.textContent);
    document.getElementById('value').textContent = counterValue;
});
