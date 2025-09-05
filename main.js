"use strict";
let body = document.querySelector("body");
let backtotop = document.getElementById("backtotop");
backtotop.style.display = "none";
window.onscroll = function () {
  if (window.scrollY > 300) {
    backtotop.style.display = "inline";
  } else {
    backtotop.style.display = "none";
  }
};
backtotop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let seeMore = document.getElementById("seeMore");
let hiddenImages = document.getElementById("hiddenImages");
hiddenImages.style.display = "none";
seeMore.onclick = function () {
  if (hiddenImages.style.display === "none") {
    hiddenImages.style.display = "flex";
    seeMore.innerText = "See Less";
  } else {
    hiddenImages.style.display = "none";
    seeMore.innerText = "See More";
  }
};
let form1 = document.getElementById("form1");
let login = document.getElementById("login");
let hero = document.getElementById("hero");
let closeBtn = document.getElementById("closeBtn");
closeBtn.style.width = "30px";
closeBtn.style.height = "30px";
login.onclick = function () {
  if (form1.style.display === "none") {
    form1.style.display = "flex";
    hero.style.filter = "blur(10px)";
    body.style.overflow = "hidden";
  } else {
    form1.style.display = "none";
    hero.style.filter = "none";
    body.style.overflow = "";
  }
};
closeBtn.onclick = function () {
  form1.style.display = "none";
  hero.style.filter = "none";
  body.style.overflow = "";
};
let form = document.getElementById("form");

let usernameInput = document.getElementsByName("username")[0];
let passwordInput = document.getElementsByName("password")[0];
let emailInput = document.getElementsByName("email")[0];

let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let emailError = document.getElementById("emailError");

form.onsubmit = function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();

  if (username.length <= 3) {
    usernameError.innerText = "Your username is too short";
  } else {
    usernameError.innerText = "";
  }
  if (email.length <= 8) {
    emailError.innerText = "Your email is too short";
  } else {
    emailError.innerText = "";
  }

  if (password.length < 8) {
    passwordError.innerText =
      "Your password must contain at least 8 characters";
  } else {
    passwordError.innerText = "";
  }

  if (username.length > 3 && password.length >= 8 && email.length > 8) {
    alert("Form submitted successfully!");
    form.submit();
  }
};
let loader = document.getElementById("loader");

body.style.overflow = "hidden";
setTimeout(() => {
  loader.style.display = "none";
  body.style.overflowY = "";
}, 1500);
