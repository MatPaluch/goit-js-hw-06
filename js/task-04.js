let counterValue = 0;
const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");
incButton.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
decButton.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
