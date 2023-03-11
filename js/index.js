const checkbox = document.getElementById("checkbox");
const nav1 = document.getElementById("navbar");
const nav2 = document.getElementById("nav2");

let allBtn = document.getElementById("all");
let allBtn2 = document.getElementById("all2");
let webBtn = document.getElementById("web");
let mobileBtn = document.getElementById("mobile");
let smmBtn = document.getElementById("smm");
let mobilePr = document.getElementById("card1");
let webPr = document.getElementById("card2");
let smmPr = document.getElementById("card3");
let mobilePr2 = document.getElementById("card4");
let webPr2 = document.getElementById("card5");
let smmPr2 = document.getElementById("card6");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  navbar.classList.toggle("dark");
  nav2.classList.toggle("dark");
});

allBtn.addEventListener("click", (e) => {
  e.target.classList.add("btnClicked");
  allBtn2.classList.add("btnClicked");
  allBtn2.style.width = "160px";
  webBtn.classList.remove("btnClicked");
  mobileBtn.classList.remove("btnClicked");
  smmBtn.classList.remove("btnClicked");

  mobilePr.toggleAttribute("hidden", false);
  smmPr.toggleAttribute("hidden", false);
  mobilePr2.toggleAttribute("hidden", false);
  smmPr2.toggleAttribute("hidden", false);
  webPr.toggleAttribute("hidden", false);
  webPr2.toggleAttribute("hidden", false);
});
allBtn2.addEventListener("click", (e) => {
  e.target.classList.add("btnClicked");
  e.target.style.width = "160px";
  allBtn.classList.add("btnClicked");
  webBtn.classList.remove("btnClicked");
  mobileBtn.classList.remove("btnClicked");
  smmBtn.classList.remove("btnClicked");

  mobilePr.toggleAttribute("hidden", false);
  smmPr.toggleAttribute("hidden", false);
  mobilePr2.toggleAttribute("hidden", false);
  smmPr2.toggleAttribute("hidden", false);
  webPr.toggleAttribute("hidden", false);
  webPr2.toggleAttribute("hidden", false);
});
webBtn.addEventListener("click", (e) => {
  e.target.classList.add("btnClicked");
  allBtn.classList.remove("btnClicked");
  mobileBtn.classList.remove("btnClicked");
  smmBtn.classList.remove("btnClicked");
  allBtn2.classList.remove("btnClicked");

  mobilePr.toggleAttribute("hidden", true);
  smmPr.toggleAttribute("hidden", true);
  mobilePr2.toggleAttribute("hidden", true);
  smmPr2.toggleAttribute("hidden", true);
  webPr.toggleAttribute("hidden", false);
  webPr2.toggleAttribute("hidden", false);
});
mobileBtn.addEventListener("click", (e) => {
  e.target.classList.add("btnClicked");
  allBtn.classList.remove("btnClicked");
  webBtn.classList.remove("btnClicked");
  smmBtn.classList.remove("btnClicked");
  allBtn2.classList.remove("btnClicked");

  webPr.toggleAttribute("hidden", true);
  smmPr.toggleAttribute("hidden", true);
  webPr2.toggleAttribute("hidden", true);
  smmPr2.toggleAttribute("hidden", true);
  mobilePr.toggleAttribute("hidden", false);
  mobilePr2.toggleAttribute("hidden", false);
});
smmBtn.addEventListener("click", (e) => {
  e.target.classList.add("btnClicked");
  allBtn.classList.remove("btnClicked");
  webBtn.classList.remove("btnClicked");
  mobileBtn.classList.remove("btnClicked");
  allBtn2.classList.remove("btnClicked");

  webPr.toggleAttribute("hidden", true);
  mobilePr.toggleAttribute("hidden", true);
  webPr2.toggleAttribute("hidden", true);
  mobilePr2.toggleAttribute("hidden", true);
  smmPr.toggleAttribute("hidden", false);
  smmPr2.toggleAttribute("hidden", false);
});
