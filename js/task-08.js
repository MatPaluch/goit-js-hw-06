const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", logIn);

function logIn(event) {
  event.preventDefault();
  const form = event.currentTarget.elements;
  const log = form.email.value;
  const pass = form.password.value;
  if (!log || !pass) {
    return window.alert("You have to fill all fields!");
  }
  const obj = { email: log, password: pass };
  console.log(obj);
  event.currentTarget.reset();
}
