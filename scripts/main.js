// GLOBAL VARIABLES
// used for the state of the app
var balls = [];
var canvasTopBorderPositionInPixels;

// The entry point of the app, gets invoked once when the program starts.
function setup() {
  createCanvas(CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS);
  let canvas = document.querySelector("canvas");
  canvas.addEventListener("click", addBall);
  canvasTopBorderPositionInPixels = canvas.getBoundingClientRect().top;
  noStroke(); // Disables drawing the stroke (outline) of drawn objects.
}

// Called directly after setup(),
// the draw() function continuously executes the lines of code contained inside its block
function draw() {
  background(220, 220, 220); // background color of the p5.js canvas
  drawBalls(balls);
  calculateAcceleration(balls);
  moveBalls(balls);
}

function addBall(event) {
  let ballX = event.clientX;
  // to compensate the height of the heading elements above the canvas
  let ballY = event.clientY - canvasTopBorderPositionInPixels;
  let ballColor = getRandomColor(DEFAULT_BALL_COLORS);
  let newBall = new Ball(ballX, ballY, DEFAULT_BALL_RADIUS_IN_PIXELS, ballColor, INITIAL_FORCE_UPPER_LIMIT);
  // FIXME: find better solution
  document.getElementById("counter").innerHTML = balls.length;
  balls.push(newBall);
}

function drawBalls(balls) {
  let numberOfBalls = balls.length;
  for (i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    // set the color used to fill shapes
    fill(currentBall.color);
    // draws an ellipse (oval) to the screen
    ellipse(currentBall.x, currentBall.y, currentBall.radius * 2, currentBall.radius * 2);
  }
}

function calculateAcceleration(balls) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.dy += GRAVITY;
    for (let j = i; j < numberOfBalls; j++) {
      currentBall.collide(balls[j], FORCE_REDUCTION);
    }
  }
}

function moveBalls(balls) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.move(DRAG);
    currentBall.bounce(CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS, FRICTION);
  }
}
