// Image slider
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Login form
const userBtn = document.querySelector(".account");

const login = document.querySelector(".login-container");
const overlay = document.querySelector(".overlay");
const buttonClose = document.querySelector(".close-btn");

const openModal = function () {
  login.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  login.classList.add("hidden");
  overlay.classList.add("hidden");
};

userBtn.addEventListener("click", openModal);

buttonClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !login.classList.contains("hidden")) {
    closeModal();
  }
});
