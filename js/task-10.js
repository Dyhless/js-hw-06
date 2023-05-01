// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


// const numberInput = document.querySelector('input[type="number"]');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxes = document.getElementById('boxes');

// createBtn.addEventListener('click', () => {
//   const amount = Number(numberInput.value);
//   createBoxes(amount);
// });

// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount, boxSize = 30) {
//   const boxesToAdd = new Array(amount).fill().map((_, i) => {
//     const size = boxSize + i * 10;
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     box.classList.add("created-box");
//     box.textContent = `Box ${i + 1}`;
//     return box.outerHTML;
//   });
//   boxes.innerHTML = boxesToAdd.join("");
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }





const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(numberInput.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount, boxSize = 30) {
  const boxesToAdd = [];
  
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const box = createBox(size, i + 1);
    boxesToAdd.push(box);
  }
  
  boxes.innerHTML = boxesToAdd.join("");
}

function createBox(size, number) {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  box.classList.add("created-box");
  box.textContent = `Box ${number}`;
  return box.outerHTML;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
