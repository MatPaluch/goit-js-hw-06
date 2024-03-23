const countCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategory.length}\n\n`);
for (const category of countCategory) {
  const name = category.querySelector("h2");
  const count = category.querySelectorAll("ul>li");
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${count.length}\n\n`);
}
