const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// event 설명 ▼
// function onLoginSubmit(e) {
//   event.preventDefault();
//   console.log(e);
// }
// loginForm.addEventListener("submit", onLoginSubmit);
// > 'submit'이벤트가 발생하면 브라우저가 알아서 function(onLoginSubmit)을 실행시켜 줌.

// 3번
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameValue);
  paintGreetings(usernameValue);
}

// 4번
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 1번
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // 2번
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
