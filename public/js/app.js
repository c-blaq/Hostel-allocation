const btnSignIn = document.querySelector("#sign-in-btn");
const btnSignUp = document.querySelector("#sign-up-btn");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");

btnSignUp.addEventListener("click", () => {
  signIn.classList.add("sign-in-hidden");
  signUp.classList.add("sign-up-show");
});

btnSignIn.addEventListener("click", () => {
  signIn.classList.remove("sign-in-hidden");
  signUp.classList.remove("sign-up-show");
});
