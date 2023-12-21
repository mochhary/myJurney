/*? no js js needed from me */
const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT;

const playerProperty = {
  width: 50,
  height: 50,
  borderRadius: 10,
  speed: 10,
  color: "#0051ba",
  position: {
    x: 0,
    y: 0,
  },
};
const enemyProperty = {
  width: 50,
  height: 50,
  borderRadius: 20,
  speed: 1,
  color: "#ffda1a",
  position: {
    x: canvas.width - 50,
    y: 0,
  },
};
const ground = new Ground("/src/assets/bg.jpg", canvas.width, canvas.height);

const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

function animate() {
  ground.create();
  player.create();
  // enemy.create();

  player.update();
  // enemy.update();

  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (callback) {
  switch (callback.key) {
    case "ArrowUp":
      player.jump();
      break;
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    default:
      break;
  }
});
animate();
