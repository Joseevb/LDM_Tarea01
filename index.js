// añade los elementos del menu
const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
// añade el botón de cambio de tema
const themeSwitch = document.getElementById("theme-switch");
let darkMode = true; // lleva el estado del tema
//
const trendingBtn = document.getElementById("trending-btn");

trendingBtn.addEventListener("click", () => {
  const trending = document.querySelector(".trending-container");
  trending.classList.contains("visible")
    ? trending.classList.remove("visible")
    : trending.classList.add("visible");
});

themeSwitch.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (!darkMode) {
    body.classList.add("dark");
    console.log(darkMode);
    darkMode = true;
  } else {
    body.classList.remove("dark");
    console.log(darkMode);
    darkMode = false;
  }
});

/*al presionar el botón, revisa si el menu tiene la clase "hidden"
      si la tiene, la elimina, si no, la añade*/
menuBtn.addEventListener("click", () => {
  menuContent.classList.contains("hidden")
    ? menuContent.classList.remove("hidden")
    : menuContent.classList.add("hidden");
  menuBtn.classList.contains("menu-btn-extend")
    ? menuBtn.classList.remove("menu-btn-extend")
    : menuBtn.classList.add("menu-btn-extend");
});
