/* FUNCTION */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayFeature(index) {
  const images = document.querySelectorAll(".features .left > img");
  const desciptions = document.querySelectorAll(".features .right > div");
  const buttons = document.querySelector(".features .buttons");
  [...buttons.children].forEach((button, i) => {
    if (i === index) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  });
  desciptions.forEach((desciption, i) => {
    if (i === index) {
      desciption.classList.add("show");
    } else {
      desciption.classList.remove("show");
    }
  });
}

//LOGIC

// OPEN / CLOSE HAMBURGER MENU
const header = document.querySelector("header");
const hamburger = document.querySelector("header > div");

hamburger.addEventListener("click", () => {
  header.classList.toggle("show");
});

// VALIDATE EMAIL
const footer = document.querySelector("footer");
const contact = document.querySelector(".contact-button");
const input = document.querySelector("input");
contact.addEventListener("click", () => {
  let email = input.value.trim();
  if (validateEmail(email)) {
    footer.classList.remove("invalid");
    input.value = null;
  } else {
    footer.classList.add("invalid");
  }
});

// FEATURES LOGIC
const buttons = document.querySelector(".features .buttons");

buttons.addEventListener("click", (event) => {
  if (event.target === buttons.children[0]) {
    displayFeature(0);
  } else if (event.target === buttons.children[1]) {
    displayFeature(1);
  } else if (event.target === buttons.children[2]) {
    displayFeature(2);
  }
});

// FAQ LOGIC
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    question.parentElement.classList.toggle("open");
  });
});
