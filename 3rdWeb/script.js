let toggle1 = document.querySelector("#default-toggle1");
let toggle2 = document.querySelector("#default-toggle2");
let toggle3 = document.querySelector("#default-toggle3");
let toggleGrup1 = document.querySelector("#default-toggle-grup1");

let toggle4 = document.querySelector("#default-toggle4");

let toggle5 = document.querySelector("#default-toggle5");
let toggle6 = document.querySelector("#default-toggle6");
let toggleGrup2 = document.querySelector("#default-toggle-grup2");

let toggle7 = document.querySelector("#default-toggle7");
let toggle8 = document.querySelector("#default-toggle8");
let toggle9 = document.querySelector("#default-toggle9");
let toggle10 = document.querySelector("#default-toggle10");
let toggleGrup3 = document.querySelector("#default-toggle-grup3");

let lamp1 = document.querySelector(".lamp1");
let lamp2 = document.querySelector(".lamp2");
let lamp3 = document.querySelector(".lamp3");
let lamp4 = document.querySelector(".lamp4");
let lamp5 = document.querySelector(".lamp5");
let lamp6 = document.querySelector(".lamp6");
let lamp7 = document.querySelector(".lamp7");
let lamp8 = document.querySelector(".lamp8");
let lamp9 = document.querySelector(".lamp9");
let lamp10 = document.querySelector(".lamp10");
function saklar() {
  if (toggle1.checked) {
    lamp1.src = "assets/img/on.gif";
  } else {
    lamp1.src = "assets/img/off.gif";
  }
  if (toggle2.checked) {
    lamp2.src = "assets/img/on.gif";
  } else {
    lamp2.src = "assets/img/off.gif";
  }
  if (toggle3.checked) {
    lamp3.src = "assets/img/on.gif";
  } else {
    lamp3.src = "assets/img/off.gif";
  }

  if (toggle4.checked) {
    lamp4.src = "assets/img/on.gif";
  } else {
    lamp4.src = "assets/img/off.gif";
  }

  if (toggle5.checked) {
    lamp5.src = "assets/img/on.gif";
  } else {
    lamp5.src = "assets/img/off.gif";
  }
  if (toggle6.checked) {
    lamp6.src = "assets/img/on.gif";
  } else {
    lamp6.src = "assets/img/off.gif";
  }

  if (toggle7.checked) {
    lamp7.src = "assets/img/on.gif";
  } else {
    lamp7.src = "assets/img/off.gif";
  }
  if (toggle8.checked) {
    lamp8.src = "assets/img/on.gif";
  } else {
    lamp8.src = "assets/img/off.gif";
  }
  if (toggle9.checked) {
    lamp9.src = "assets/img/on.gif";
  } else {
    lamp9.src = "assets/img/off.gif";
  }
  if (toggle10.checked) {
    lamp10.src = "assets/img/on.gif";
  } else {
    lamp10.src = "assets/img/off.gif";
  }
}
function saklarGrup() {
  if (toggleGrup1.checked) {
    lamp1.src = "assets/img/on.gif";
    lamp2.src = "assets/img/on.gif";
    lamp3.src = "assets/img/on.gif";
  } else {
    lamp1.src = "assets/img/off.gif";
    lamp2.src = "assets/img/off.gif";
    lamp3.src = "assets/img/off.gif";
  }

  if (toggleGrup2.checked) {
    lamp5.src = "assets/img/on.gif";
    lamp6.src = "assets/img/on.gif";
  } else {
    lamp5.src = "assets/img/off.gif";
    lamp6.src = "assets/img/off.gif";
  }

  if (toggleGrup3.checked) {
    lamp7.src = "assets/img/on.gif";
    lamp8.src = "assets/img/on.gif";
    lamp9.src = "assets/img/on.gif";
    lamp10.src = "assets/img/on.gif";
  } else {
    lamp7.src = "assets/img/off.gif";
    lamp8.src = "assets/img/off.gif";
    lamp9.src = "assets/img/off.gif";
    lamp10.src = "assets/img/off.gif";
  }
}
