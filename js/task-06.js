
const inputEl=document.querySelector('#validation-input');
// const dataLength = Number(inputEl.getAttribute('data-length'));
const dataLength =Number(inputEl.dataset.length);
// console.log(dataLength);

inputEl.addEventListener('blur',onInputBlur);


// function onInputBlur(event){
// if (inputEl.value.length === dataLength) {
//           inputEl.classList.remove('invalid')
//           inputEl.classList.add('valid');
//      }
 
// else{
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
// }
// };

// function onInputBlur (event) {
//   inputEl.value.length === dataLength ? inputEl.classList.remove('invalid') && inputEl.classList.add('valid'):inputEl.classList.remove('valid') &&inputEl.classList.add('invalid');

// }

function onInputBlur(event){
if (inputEl.value.length === dataLength) {
          inputEl.classList.remove('invalid')
          inputEl.classList.add('valid');
     }
 else{
     inputEl.classList.remove('valid');
     inputEl.classList.add('invalid');
 }
};

