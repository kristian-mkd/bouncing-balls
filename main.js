/*********************************
 *  Balls can be thrown about and 
 *  softly bounce off one another 
 **********************************/
/*
 * Translated to p5js by professorcook.org from
 * www.khanacademy.org/profile/peterwcollingridge/projects
 * All code is owned by its respective author and
 * is made available under the MIT license.
*/
var numBalls = 0; // Number of balls

var balls = [];
var selectedBall = false;
var i, j, ball;

function addBall(event) {
  
    numBalls++;
    var r= 30;// + Math.round(random() * 35);
    var x = event.clientX; //r + Math.round(random() * (canvasWidth - 2 * r));
    var y = event.clientY; //r + Math.round(random() * (canvasWidth - 2 * r));
    var c = color(40, 60, 160, 200);
    balls.push(new Ball(x, y, r, c));
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  document.getElementById("defaultCanvas0").addEventListener("click", addBall);
  // for (var b = 0; b < numBalls; b++) {
  //   var r = 5 + Math.round(random() * 35);
  //   var x = r + Math.round(random() * (canvasWidth - 2 * r));
  //   var y = r + Math.round(random() * (canvasWidth - 2 * r));
  //   var c = color(40, 60, 160, 200);
  //   balls.push(new Ball(x, y, r, c));
  // }
  noStroke();
}

// Ball object with a position, speed and colour
var Ball = function(x, y, r, c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  this.dx = 10 * (random() - 0.5);
  this.dy = 10 * (random() - 0.5);

  // Move ball based on its velocity
  this.move = function() {
    this.dx *= drag;
    this.dy *= drag;
    this.x += this.dx;
    this.y += this.dy;
  };

  // Bounce off walls
  this.bounce = function() {
    if (this.x < this.r) {
      this.x = this.r;
      this.dx *= -friction;
    }
    if (this.x > canvasWidth - this.r) {
      this.x = canvasWidth - this.r;
      this.dx *= -friction;
    }
    if (this.y < this.r) {
      this.y = this.r;
      this.dy *= -friction;
    }
    if (this.y > canvasWidth - this.r) {
      this.y = canvasWidth - this.r;
      this.dy *= -friction;
    }
  };

  // Test whether mouse is over ball
  this.selected = function() {
    if (abs(mouseX - this.x) < this.r && abs(mouseY - this.y) < this.r) {
      return true;
    }
  };

  this.collide = function(that) {
    var dx = this.x - that.x;
    var dy = this.y - that.y;
    var dr = this.r + that.r;

    if (dx * dx + dy * dy < dr * dr) {
      var theta = atan2(dy, dx);
      var force = (dr - sqrt(dx * dx + dy * dy));
      this.dx += force * cos(theta);
      that.dx -= force * cos(theta);
      this.dy += force * sin(theta);
      that.dy -= force * sin(theta);
    }
  };

};

var draw = function() {

  // Clear everything
  background(250, 247, 240);

  // Draw balls
  for (i = 0; i < numBalls; i++) {
    ball = balls[i];
    fill(ball.c);
    ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2);
  }

  // Calculate acceleration
  for (i = 0; i < numBalls; i++) {
    if (balls[i] !== selectedBall) {
      balls[i].dy += gravity;
    }
    for (j = i; j < numBalls; j++) {
      balls[i].collide(balls[j]);
    }
  }

  // Work out if any ball is dragged
  if (mouseIsPressed) {
    if (!selectedBall) {
      for (i = 0; i < numBalls; i++) {
        if (balls[i].selected()) {
          selectedBall = balls[i];
          break;
        }
      }
    } else {
      // Throw ball
      selectedBall.dx += (mouseX - selectedBall.x) * acceleration;
      selectedBall.dy += (mouseY - selectedBall.y) * acceleration;
    }
  } else {
    selectedBall = false;
  }

  // Move balls
  for (i = 0; i < numBalls; i++) {
    ball = balls[i];
    ball.move();
    ball.bounce();
  }
};

// Let go when mouse leaves canvas
var mouseOut = function() {
  mouseIsPressed = false;
};
