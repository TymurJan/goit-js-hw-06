const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = ingredient;  
  ingredientsRef.append(liRef); 
});
// console.log(ingredientsRef);