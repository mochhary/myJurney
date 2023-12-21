let passwordLength = document.querySelector("#passwordLength");
let password = document.querySelector("#password");
let saveButton = document.querySelector("#saveButton");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "`~!@#$%^&*()-_+={[}]|:;'<>?,./";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("password has been generated!");
  }, 500);
};

const savePassword = () => {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`Password saya : ${document.title}`)
  );
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
  setTimeout(() => {
    alert("berhasil disimpan!");
  }, 500);
};
