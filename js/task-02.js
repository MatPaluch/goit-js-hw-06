const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const unOrderedList = document.querySelector("#ingredients");

for (const elem of ingredients) {
  const createElementLi = document.createElement("li");
  createElementLi.textContent = elem;
  createElementLi.classList.add("item");
  unOrderedList.append(createElementLi);
}
