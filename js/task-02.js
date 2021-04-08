// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// console.log(ingredients);
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsEl = document.querySelector('#ingredients')

const ingredient = ingredients.map(text => {
  const liText = document.createElement("li")
  liText.textContent = text;
  return liText;
})

ingredientsEl.append(...ingredient);
// console.log(ingredient);
// console.log('ingredientsEl :', ingredientsEl);


// 2 Спосiб


// const makeIngredientsEl = ingredients => {
//  return ingredients.map(ingredient => {
//   const liText = document.createElement("li")
//   liText.textContent = ingredient;
//   return liText;
// })

// };
// // console.log(makeIngredientsEl());
// const sorted = makeIngredientsEl(ingredients);
// ingredientsEl.append(...sorted);
