// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('focus', () =>
   console.log('Інпут набув фокус')
);

validationInput.addEventListener('blur', () => {
    console.log('Інпут втратив фокус')
    
    if (validationInput.value.length !== Number(validationInput.dataset.length)) {
      
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');

    console.log('Значення некорректне')

  } else {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        
    console.log('Значення корректне')
  }
});