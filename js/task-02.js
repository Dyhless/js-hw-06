// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создать отдельные элементы <li>. С использованием метода document.createElement().

// Добавить название ингредиента как его текстовое содержимое.

// Добавить элементу класс item.

// После чего вставить все <li> за одну операцию в список ul#ingredients.

// Создание элементов с помошью метода forEach
const ingredientsEl = document.querySelector('#ingredients');

const liElements = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  liElements.push(li);
});

ingredientsEl.append(...liElements);

console.log(ingredientsEl);