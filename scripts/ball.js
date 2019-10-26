// Ball object with a position, speed and colour
class Ball {
  constructor(x, y, radius, color, upperForceLimit) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.dx = getRandomDirectionAndForce(upperForceLimit);
    this.dy = getRandomDirectionAndForce(upperForceLimit);

    // Move ball based on its velocity
    this.move = function(movementDrag) {
      this.dx *= movementDrag;
      this.dy *= movementDrag;
      this.x += this.dx;
      this.y += this.dy;
    };

    // Bounce off walls
    this.bounce = function(canvasWidthInPixels, canvasHeightInPixels, friction) {
      if (this.x < this.radius) {
        this.x = this.radius;
        this.dx *= -friction;
      }
      if (this.x > canvasWidthInPixels - this.radius) {
        this.x = canvasWidthInPixels - this.radius;
        this.dx *= -friction;
      }
      if (this.y < this.radius) {
        this.y = this.radius;
        this.dy *= -friction;
      }
      if (this.y > canvasHeightInPixels - this.radius) {
        this.y = canvasHeightInPixels - this.radius;
        this.dy *= -friction;
      }
    };

    this.collide = function(that, forceReduction) {
      let dx = this.x - that.x;
      let dy = this.y - that.y;
      let dr = this.radius + that.radius;
      if (dx * dx + dy * dy < dr * dr) {
        let theta = atan2(dy, dx);
        let force = dr - sqrt(dx * dx + dy * dy);
        force *= forceReduction;
        this.dx += force * cos(theta);
        this.dy += force * sin(theta);
        that.dy -= force * sin(theta);
        that.dx -= force * cos(theta);
      }
    };
  }
}
