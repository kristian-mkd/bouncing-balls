// Ball object with a position, speed and colour
class Ball {

    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;

      this.dx = getRandomDirectionAndForce();
      this.dy = getRandomDirectionAndForce();
  
      // Move ball based on its velocity
      this.move = function () {
        this.dx *= DRAG;
        this.dy *= DRAG;
        this.x += this.dx;
        this.y += this.dy;
      };
  
      // Bounce off walls
      this.bounce = function () {
        if (this.x < this.radius) {
          this.x = this.radius;
          this.dx *= -FRICTION;
        }
        if (this.x > CANVAS_WIDTH_IN_PIXELS - this.radius) {
          this.x = CANVAS_WIDTH_IN_PIXELS - this.radius;
          this.dx *= -FRICTION;
        }
        if (this.y < this.radius) {
          this.y = this.radius;
          this.dy *= -FRICTION;
        }
        if (this.y > CANVAS_HEIGHT_IN_PIXELS - this.radius) {
          this.y = CANVAS_HEIGHT_IN_PIXELS - this.radius;
          this.dy *= -FRICTION;
        }
      };
  
      this.collide = function (that) {
        let dx = this.x - that.x;
        let dy = this.y - that.y;
        let dr = this.radius + that.radius;
        if (dx * dx + dy * dy < dr * dr) {
          let theta = atan2(dy, dx);
          let force = dr - sqrt(dx * dx + dy * dy);
          this.dx += force * cos(theta);
          this.dy += force * sin(theta);
          that.dy -= force * sin(theta);
          that.dx -= force * cos(theta);
        }
      };
    }
  }