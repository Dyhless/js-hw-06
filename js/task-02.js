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

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

// Добавит название ингредиента как его текстовое содержимое.

// Добавит элементу класс item.

// После чего вставит все <li> за одну операцию в список ul#ingredients.


// // Создание элементов 
// const ingredientsEl = document.createElement('ul');

// const ingredientPotatoes = document.createElement('li');
// ingredientPotatoes.classList.add('item');
// ingredientPotatoes.textContent = 'Potatoes';

// const ingredientMushrooms = document.createElement('li');
// ingredientMushrooms.classList.add('item');
// ingredientMushrooms.textContent = 'Mushrooms';

// const ingredientGarlic = document.createElement('li');
// ingredientGarlic.classList.add('item');
// ingredientGarlic.textContent = 'Garlic';

// const ingredientTomatos = document.createElement('li');
// ingredientTomatos.classList.add('item');
// ingredientTomatos.textContent = 'Tomatos';

// const ingredientHerbs = document.createElement('li');
// ingredientHerbs.classList.add('item');
// ingredientHerbs.textContent = 'Herbs';

// const ingredientCondiments = document.createElement('li');
// ingredientCondiments.classList.add('item');
// ingredientCondiments.textContent = 'Condiments';

// ingredientsEl.append(
//   ingredientPotatoes, ingredientMushrooms, ingredientGarlic, ingredientGarlic, ingredientTomatos, ingredientHerbs, ingredientCondiments
// );

// console.log(ingredientsEl);


// Создание элементов с помошью метода forEach

const ingredientsEl = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsEl.appendChild(li);
});

console.log(ingredientsEl);