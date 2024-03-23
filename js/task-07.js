const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", (event) => {
  const size = event.currentTarget.value;
  //text.setAttribute("style", `font-size:${size}px`);
  text.style.fontSize = size + "px";
});
