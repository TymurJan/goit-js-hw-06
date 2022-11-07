function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
console.log(
  refs.controls,
  refs.input,
  refs.create,
  refs.destroy,
  refs.boxes
);

refs.input.addEventListener('input', (event) => event.currentTarget);
refs.create.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
});

function createBoxes() {
  refs.boxes.innerHTML = '';
  for (let i = 0; i < refs.input.value; i += 1) {
    const newElement = document.createElement('div');
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.margin = '10px';

    refs.boxes.append(newElement);
  }
};