// añade los elementos del menu
const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
// añade el botón de cambio de tema
const themeSwitch = document.getElementById("theme-switch");
let darkMode = false; // lleva el estado del tema

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
});
