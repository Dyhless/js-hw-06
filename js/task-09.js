// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body'); 
const changeColor = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

changeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;
  console.log(randomColor);
}


