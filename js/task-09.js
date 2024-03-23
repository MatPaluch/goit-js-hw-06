function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");

buttonColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  span.innerHTML = color;
  document.querySelector("body").style.backgroundColor = color;
});
