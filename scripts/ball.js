// Ball object with a position, speed and colour
class Ball {

    constructor(x, y, r, c) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.c = c;
      var rnd = Math.floor(Math.random() * 100);
      this.dx = rnd * (random() - 0.5);
      this.dy = rnd * (random() - 0.5);
  
      // Move ball based on its velocity
      this.move = function () {
        this.dx *= drag;
        this.dy *= drag;
        this.x += this.dx;
        this.y += this.dy;
      };
  
      // Bounce off walls
      this.bounce = function () {
        if (this.x < this.r) {
          this.x = this.r;
          this.dx *= -friction;
        }
        if (this.x > canvasWidthInPixels - this.r) {
          this.x = canvasWidthInPixels - this.r;
          this.dx *= -friction;
        }
        if (this.y < this.r) {
          this.y = this.r;
          this.dy *= -friction;
        }
        if (this.y > canvasWidthInPixels - this.r) {
          this.y = canvasWidthInPixels - this.r;
          this.dy *= -friction;
        }
      };
  
      this.collide = function (that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        var dr = this.r + that.r;
        if (dx * dx + dy * dy < dr * dr) {
          var theta = atan2(dy, dx);
          var force = dr - sqrt(dx * dx + dy * dy);
          this.dx += force * cos(theta);
          that.dx -= force * cos(theta);
          this.dy += force * sin(theta);
          that.dy -= force * sin(theta);
        }
      };
      
    }
  }