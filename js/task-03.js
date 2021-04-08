const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('#gallery');


const galleryContainer = images.map(image => {
  const { url, alt } = image;
  return `<li ><img class = 'gallery_img' src = '${url}' alt = '${alt}' width="500" height = "300" ></li>`;
}).join('');
console.log(galleryContainer);
galleryEl.insertAdjacentHTML("beforeend", galleryContainer);



// const galleryContainer = images.map(image => {
// const imgEl = document.createElement("img")
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 440;

//   console.log(imgEl.style);
//   return imgEl;
// })
// console.log(galleryContainer);
// galleryEl.append(...galleryContainer);


















// const test =` <li><img src="${images[0].url}" class="imeg-style" alt=""></li> `;

// ul.insertAdjacentHTML('beforeend',test);




















// const list = document.querySelector('#list');

// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

// console.log(list);














// const imagesLi = images.map(image => {
//   const imgEl = document.createElement('img');
//  // imgEl.insertAdjacentHTML('afterbegin', `url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',alt: 'White and Black Long Fur Cat',`)
//   // console.log(image.hasAttribute("alt")); // lake and clouds
//   imgEl.insertAdjacentHTML('afterbegin',' image')
//   console.log(imgEl );
//   // console.log(image);
//   // console.log(liEl);
//   return imgEl;
// });
// galleryEl.append(...imagesLi);
// console.log(imagesLi[0]);
// // console.log(image.hasAttribute("alt")); // lake and clouds

// // const liEl = document.createElement('li');
 
// galleryEl.insertAdjacentHTML('afterbegin','imagesLi')