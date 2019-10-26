// GLOBAL VARIABLES
// used for the state of the app
var balls = [];
var canvasTopBorderPositionInPixels;
var counterElement;
var canvas;

// The entry point of the app, gets invoked once when the program starts.
function setup() {
  initializeHTMLElements();
  noStroke(); // Disables drawing the stroke (outline) of drawn objects.
}

// Called directly after setup(),
// the draw() function continuously executes the lines of code contained inside its block
function draw() {
  background(220, 220, 220); // background color of the p5.js canvas
  drawBalls(balls);
  calculateAcceleration(balls, GRAVITY, FORCE_REDUCTION);
  moveBalls(balls, DRAG, CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS, FRICTION);
}

function addBall(event) {
  let ballX = event.clientX;
  let ballY = getBallPositionOnYAxis();
  let ballColor = getRandomColor(DEFAULT_BALL_COLORS);

  let newBall = new Ball(
    ballX,
    ballY,
    DEFAULT_BALL_RADIUS_IN_PIXELS,
    ballColor,
    INITIAL_FORCE_UPPER_LIMIT
  );

  balls.push(newBall);
  updateBallCounter();
}

function getBallPositionOnYAxis() {
  // to compensate the height of the heading elements above the canvas
  return event.clientY - canvasTopBorderPositionInPixels;
}

function updateBallCounter() {
  counter.innerHTML = balls.length;
}

function initializeHTMLElements() {
  counter = document.getElementById("counter");

  createCanvas(CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS);
  canvas = document.querySelector("canvas");
  canvas.addEventListener("click", addBall);
  canvasTopBorderPositionInPixels = canvas.getBoundingClientRect().top;
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

function calculateAcceleration(balls, gravity, forceReduction) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.dy += gravity;
    for (let j = i; j < numberOfBalls; j++) {
      currentBall.collide(balls[j], forceReduction);
    }
  }
}

function moveBalls(balls, drag, canvasWithInPixels, canvasHeightInPixels, friction) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.move(drag);
    currentBall.bounce(canvasWithInPixels, canvasHeightInPixels, friction);
  }
}
