const createBoxes = amount => {

  let baseSize = 30;

  boxesContainer.innerHTML = '';

  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');

    const currentSize = baseSize + i * 10;
    div.style.width = `${currentSize}px`;
    div.style.height = `${currentSize}px`;
    div.style.backgroundColor = getRandomHexColor();

    elements.push(div);
  };

  boxesContainer.append(...elements);
};

const destroyBoxes = () => {
 boxesContainer.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

buttonDestroy.addEventListener('click', destroyBoxes);