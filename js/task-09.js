function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  change: document.querySelector('.change-color'),
};

refs.change.addEventListener('click', () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();  
});
