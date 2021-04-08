// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const nameInputEl = document.querySelector("#name-input");
// console.log(nameInputEl.placeholder);

const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener('input', onInputChange);
// nameInputEl.classList.add("invalid");

function onInputChange(event) {
    nameOutputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameOutputEl.textContent = "незнакомец";
    }
}
