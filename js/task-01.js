const categories = document.querySelectorAll(".item");

const numberCategories = categories.length;
console.log(`Number of categories: ${numberCategories}`);
console.log("");

const titles = document.querySelectorAll("h2");

titles.forEach(title => {
    const textTitle = title.textContent;
    const numberElements = title.nextElementSibling.children.length;
    console.log(`Category: ${textTitle}`);
    console.log(`Elements: ${numberElements}`);
    console.log("");
});