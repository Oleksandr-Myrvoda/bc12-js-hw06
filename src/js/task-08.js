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
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
  loginFotm: document.querySelector(".login-form"),
};

const onFormSubmit = (event) => {
  event.preventDefault();
  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   if (value === "" || name === "") alert("Все поля должны быть заполнены");
  //   console.log("name", name);
  //   console.log("value", value);
  // });
  // console.log(formData);
  // ==============================
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const pass = formElements.password.value;

  if (email === "" || pass === "") alert("Все поля должны быть заполнены");

  const formData = {
    email,
    pass,
  };
  console.log(formData);
};

refs.loginFotm.addEventListener("submit", onFormSubmit);
