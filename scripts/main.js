var balls = [];
var selectedBall = false;
var canvasTopBorderPositionInPixels;


// The entry point of the app, gets invoked once when the program starts. 
function setup() {
  createCanvas(canvasWidthInPixels, canvasHeightInPixels);
  let createdCanvas = document.querySelector("canvas");
  createdCanvas.addEventListener("click", addBall);
  canvasTopBorderPositionInPixels = createdCanvas.getBoundingClientRect().top;
  noStroke(); // Disables drawing the stroke (outline) of drawn objects.
}

function addBall(event) {
  let x = event.clientX - defaultBallRadiusInPixels / 2;
  let y = event.clientY - canvasTopBorderPositionInPixels;
  let radius = defaultBallRadiusInPixels;
  let color = getRandomColor();
  balls.push(new Ball(x, y, radius, color));
}

var draw = function() {
  
  // sets the color used for the background of the p5.js canvas.
  background(220, 220, 220);
  
  let i, j;
  let numberOfBalls = balls.length;

  // Draw balls
  for (i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    fill(currentBall.c); // sets the color used to fill shapes
    ellipse(currentBall.x, currentBall.y, currentBall.r * 2, currentBall.r * 2); // draws an ellipse (oval) to the screen
  }

  // Calculate acceleration
  for (i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    if (currentBall !== selectedBall) {
      currentBall.dy += gravity;
    }
    for (j = i; j < numberOfBalls; j++) {
      currentBall.collide(balls[j]);
    }
  }

  // Move balls
  for (i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.move();
    currentBall.bounce();
  }
};

function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getRandomColor() {
  let randomColor = defaultBallColors[getRandomNumber(defaultBallColors.length)];
  return color(randomColor[0], randomColor[1], randomColor[2]); // creates p5js color object
}