const chords = ["A", "C", "D", "E", "F"];
const note = document.querySelector("#note");
chords.forEach((chord) => {
  const button = document.createElement("button");

  button.innerHTML = chord;

  button.addEventListener("click", () => {
    const sound = new Audio(`/assets/${chord}.wav`);
    sound.play();
  });

  note.appendChild(button);
});
