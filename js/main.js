// Navbar
let toggler = document.querySelector(".toggle");
let ulItem = document.querySelector(".navbar .links");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
});
ulItem.addEventListener("click", (e) => {
  Array.from(ulItem.children).forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
});

// landing
let arrow = document.querySelector(".arrow");
let landMsg = document.querySelector(".welcome-msg");
