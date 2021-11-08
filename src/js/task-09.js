const refs = {
  widget: document.querySelector(".widget"),
  changeBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};

refs.changeBtn.addEventListener("click", onClick);

function onClick() {
  refs.colorValue.textContent = `${getRandomHexColor()}`;
  refs.widget.parentNode.style.backgroundColor = `${refs.colorValue.textContent}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change-color и выводит значение цвета в span.color.
// {
//    <div class="widget">
//    <p>Background color: <span class="color">-</span></p>
//    <button type="button" class="change-color">Change color</button>
//  </div>
// }
