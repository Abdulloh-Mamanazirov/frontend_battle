const checkbox = document.getElementById("checkbox");
const nav1 = document.getElementById("navbar");
const nav2 = document.getElementById("nav2");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  navbar.classList.toggle("dark");
  nav2.classList.toggle("dark");
});