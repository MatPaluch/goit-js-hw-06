function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const count = document.querySelector("#controls>input");
let wid = 30;
let hei = 30;

create.addEventListener("click", () => {
  for (let i = 0; i < count.valueAsNumber; i++) {
    const div = document.createElement("div");
    div.style.width = wid + "px";
    div.style.height = hei + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
    wid += 10;
    hei += 10;
  }
});
destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  wid = 30;
  hei = 30;
});
