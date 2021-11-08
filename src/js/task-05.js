const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  refs.output.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value
      : "Anonymous";
};

refs.input.addEventListener("input", onInputChange);

// Напиши скрипт который, при наборе текста
// в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
