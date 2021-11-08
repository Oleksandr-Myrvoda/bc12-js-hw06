const counterValue = document.querySelector("#value");
const btnDecrementRef = document.querySelector(
  'button[data-action = "decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action = "increment"]'
);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

btnDecrementRef.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

btnIncrementRef.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
//  счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
