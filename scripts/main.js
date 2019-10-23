var balls = [];
var canvasTopBorderPositionInPixels;

// The entry point of the app, gets invoked once when the program starts. 
function setup() {
  createCanvas(canvasWidthInPixels, canvasHeightInPixels);
  let canvas = document.querySelector("canvas");
  canvas.addEventListener("click", addBall);
  canvasTopBorderPositionInPixels = canvas.getBoundingClientRect().top;
  noStroke(); // Disables drawing the stroke (outline) of drawn objects.
}

// Called directly after setup(), 
// the draw() function continuously executes the lines of code contained inside its block
function draw() {
  // sets the color used for the background of the p5.js canvas.
  background(220, 220, 220);
  drawBalls(balls);
  calculateAcceleration(balls);
  moveBalls(balls);
};

function addBall(event) {
  let ballX = event.clientX - defaultBallRadiusInPixels / 2;
  let ballY = event.clientY - canvasTopBorderPositionInPixels;
  let ballRadius = defaultBallRadiusInPixels;
  let ballColor = getRandomColor(defaultBallColors);
  let newBall = new Ball(ballX, ballY, ballRadius, ballColor);
  balls.push(newBall);
}

function drawBalls(balls) {
  let numberOfBalls = balls.length;
  for (i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    // set the color used to fill shapes
    fill(currentBall.c); 
    // draws an ellipse (oval) to the screen 
    ellipse(currentBall.x, currentBall.y, currentBall.r * 2, currentBall.r * 2); 
  }
}

function calculateAcceleration(balls) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.dy += gravity;   
    for (let j = i; j < numberOfBalls; j++) {
      currentBall.collide(balls[j]);
    }
  }
}

function moveBalls(balls) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.move();
    currentBall.bounce();
  }
}
