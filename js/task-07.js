// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// const fontSizeControlEl = document.querySelector('#font-size-control');
// const TextEl = document.querySelector("#text");


const inputEl =document.querySelector('#font-size-control');
const spanEl=document.querySelector('#text');
// console.log(spanEl);


inputEl.addEventListener('input', set);

function set(event){
  
    spanEl.style.fontSize=inputEl.value+'px';

}

// console.log(spanEl.style);

//  console.log(spanEl.classList);