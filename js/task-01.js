const categoriesRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRef.length}`);
console.log('');

categoriesRef.forEach(category => {
    const name = category.firstElementChild.textContent;
    const list = category.lastElementChild.children.length;

    console.log(`Category: `, name);
    console.log(`Elements: `, list)
    console.log('');
});
