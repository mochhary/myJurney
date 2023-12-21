class Player {
  constructor(props) {
    this.width = props.width;
    this.height = props.height;
    this.borderRadius = props.borderRadius;
    this.speed = props.speed;
    this.color = props.color;
    this.position = {
      x: props.position.x,
      y: props.position.y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.heightJump = 100;
    this.gravity = 0.5;
  }

  // kinematic equation physic
  // heightJump = vi^2 / (2 * gravity)
  // vi = sqrt(2 * g * h)

  jump() {
    this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump);
  }
  moveRight() {
    this.velocity.x = 1 * this.speed;
  }
  moveLeft() {
    this.velocity.x = -1 * this.speed;
  }
  update() {
    const floor = canvas.height - this.height;
    const rightWall = canvas.width - this.width;
    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (player.position.y > floor) {
      this.position.y = floor;
      this.jump();
    }
    if (this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (player.position.x > rightWall) {
      this.velocity.x *= -1;
      this.jump();
    }
  }
  create() {
    board.fillStyle = this.color;
    board.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      this.borderRadius
    );
  }
}
