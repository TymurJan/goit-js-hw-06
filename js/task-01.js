const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);
    console.log('');

categoriesRef.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Elements: ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log('');
});
