const refs = {
  size: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onInputSizeControl = (e) => {
  refs.text.style.fontSize = e.target.value + "px";
};

refs.size.addEventListener("input", onInputSizeControl);

// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
