// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
   
  if (emailInput.value === '' || passwordInput.value === '') {

      return alert('Всі поля будь ласка');
  }
  
   const formData = [...loginForm.elements].reduce((acc, field) => {
     
      if (field.name) {
      acc[field.name] = field.value;
    }
      
      return acc;
  }, {});
  
  console.log(formData);
  
  loginForm.reset();
}
  