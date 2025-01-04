const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;

    console.log(`Category:${title}`);

    const elements = category.querySelectorAll('ul li').length;

    console.log(`Elements:${elements}`);

});
