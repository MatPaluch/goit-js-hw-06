const input = document.querySelector("#validation-input");
const minLength = input.getAttribute("data-length");
console.log(Number(minLength));
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(minLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
