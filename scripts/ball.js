/**
 * Ball object with a position, displacement, radius and colour.
 */
class Ball {
  /**
   * Initializes ball object.
   *
   * @param x the position on X axis of the ball
   * @param y the position on Y axis of the ball
   * @param radius the radius of the ball
   * @param color the color of the ball
   * @param upperForceLimit the maximum upper Force limit that can be applied to the ball
   */
  constructor(x, y, radius, color, upperForceLimit) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    // displacements on both axes
    this.dx = getRandomForce(upperForceLimit) * getRandomDirection();
    this.dy = getRandomForce(upperForceLimit) * getRandomDirection();

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

    // calculate the collision force of two impacting balls
    this.collide = function(that, forceReduction) {
      let dx = this.x - that.x;
      let dy = this.y - that.y;
      let dr = this.radius + that.radius;
      let areBallsIntersecting = dx * dx + dy * dy < dr * dr;
      if (!areBallsIntersecting) {
        return;
      }
      // balls are intersecting, so calculate collision forces
      let theta = atan2(dy, dx);
      let force = dr - sqrt(dx * dx + dy * dy);
      force *= forceReduction;
      this.dx += force * cos(theta);
      this.dy += force * sin(theta);
      that.dy -= force * sin(theta);
      that.dx -= force * cos(theta);
    };
  }
}
