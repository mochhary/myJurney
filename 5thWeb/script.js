let body = document.body;
let info = document.querySelector(".info");
let mode = document.querySelector("#mode");
let home = document.querySelector("#home");
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
  if (darkRemainingLeft == 1) {
    info.textContent = "💥JATAH FITUR DARK MODE ANDA SUDAH HABIS💥";
    mode.style.display = "none";
    home.textContent = "RESTART";
    return;
  }

  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  // render ke info element
  info.textContent = `Dark mode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}x`;
  body.classList.toggle("dark");
}
function reRender() {
  location.reload();
}

// Codingan dari comment yt dea
// let body = document.body;
// const darkModeLimit = 5;
// let darkModeCounter = 0;

// function darkMode() {
//   darkModeCounter += 1;

//   if (darkModeCounter > darkModeLimit) {
//     alert("limit");
//     return;
//   }
//   console.log("darkMode: " + darkModeCounter);
//   body.classList.toggle("dark");
// }
