const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const buttonLogin = document.querySelector("#buttonLogin");
const buttonLogout = document.querySelector("#buttonLogout");
let admin = document.querySelector("#admin");
let user = document.querySelector("#user");

admin.style.display = "none";
user.style.display = "none";
buttonLogout.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  buttonLogout.style.display = "block";

  if (usernameInput.value == "admin" && passwordInput.value == "admin") {
    localStorage.setItem("role", "admin"); // ("key","value")
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    buttonLogin.style.display = "none";
    user.style.display = "none";
    admin.style.display = "block";
  } else {
    localStorage.setItem("role", "user");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    buttonLogin.style.display = "none";
    admin.style.display = "none";
    user.style.display = "block";
  }
}
if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  buttonLogin.style.display = "none";
  buttonLogout.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    user.style.display = "none";
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
    user.style.display = "block";
  }
}
function onLogout() {
  localStorage.clear();
  location.reload();
}
// tugas :
// 1.tambahkan role baru
// 2.tampilkan sesuatu hal yang berbeda di setiap dashboard role nya
// 3.bikin register / menu pendaftaran. jadi hanya bisa user terdaftar yang ada di storage yang bisa login.
