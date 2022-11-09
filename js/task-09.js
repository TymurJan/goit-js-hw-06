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
  const colorFun = getRandomHexColor();
  refs.body.style.backgroundColor = colorFun;
  refs.color.textContent = colorFun;  
});

console.log(refs.body.style.backgroundColor)