const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesRef = document.querySelector(".gallery");

// ======================================

// images.forEach(image => {

//   const itemRef = document.createElement('li'); 

//   const imgRef = document.createElement('img');
//   imgRef.src = image.url;
//   imgRef.alt = image.alt;  

//   itemRef.append(imgRef); 
//   console.log(itemRef);

//   imagesRef.append(itemRef);
// });

// ============================

// const imgss = images.map(image => {

//   const itemRef = document.createElement('li'); 

//   const imgRef = document.createElement('img');
//   imgRef.src = image.url;
//   imgRef.alt = image.alt;  

//   itemRef.append(imgRef);
//   console.log(itemRef);
//   return itemRef;
 
// });
//  imagesRef.append(...imgss);

// =================================

// const makeImages = images => {
//   return images.map(image => {

//     const itemRef = document.createElement('li');
    
//     const imgRef = document.createElement('img');
//     imgRef.src = image.url;
//     imgRef.alt = image.alt;

//     itemRef.append(imgRef);
//     console.log(itemRef);
    
//     return itemRef;
//   });
// };

// const imgs = makeImages(images);

// imagesRef.append(...imgs);

// ================================

// const makeImgMarkup = ({url, alt}) => {
//   return `
//   <li>
//     <img src="${url}" alt="${alt}">
//   </li>
//   `;
// };
// const makeImgRows = images.map(makeImgMarkup).join('');
// // console.log(makeImgRows);
// imagesRef.insertAdjacentHTML('afterbegin', makeImgRows);

// ==========================

const makeImgRows = images.map(({url, alt}) => {
  return `
  <li>
    <img src="${url}" alt="${alt}">
  </li>
  `;
}).join('');
// console.log(makeImgRows);
imagesRef.insertAdjacentHTML('afterbegin', makeImgRows);

// ===========
// Питання: "чому не працює forEach замість map?"


