// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputValue = document.querySelector('#name-input');
const inputChange = document.querySelector('#name-output');

inputValue.addEventListener('input', onInputChange);
inputChange.addEventListener('input', onInputChange);

function onInputChange(event) {
   console.log(event.currentTarget.value);
   
   if (event.currentTarget.value === '') {
    inputChange.textContent = 'Anonymous';
  } else {
    inputChange.textContent = event.currentTarget.value;
  }
}

