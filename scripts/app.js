// Global variables used for the state of the app
var balls = [];
var canvasTopBorderPositionInPixels;
var counterElement;

/**
 * The entry point of the app, gets invoked once when the program starts.
 */
function setup() {
  initializeHTMLElements();
  noStroke(); // Disables drawing the stroke (outline) of drawn objects.
}

/**
 * Initializes the main HTML elements of the app as the canvas and the ball counter.
 */
function initializeHTMLElements() {
  counterElement = document.getElementById("counter");
  createCanvas(CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS);
  let canvas = document.querySelector("canvas");
  canvas.addEventListener("click", addBallHandler);
  canvasTopBorderPositionInPixels = canvas.getBoundingClientRect().top;
}

/**
 * Invoked directly after setup(), continuously executes to draw the balls on the canvas.
 */
function draw() {
  background(CANVAS_BACKGROUND_COLOR[0], CANVAS_BACKGROUND_COLOR[1], CANVAS_BACKGROUND_COLOR[2]);
  drawBalls(balls);
  calculateAccelerationFromCollisions(balls, FORCE_REDUCTION);
  applyGravityForce(balls, GRAVITY);
  moveBalls(balls, DRAG, CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS, FRICTION);
}

/**
 * Event handler that handles clicks on the canvas to create new balls.
 * Adds new ball in the app and updates the ball counter.
 * @param event the click event for ball creation
 */
function addBallHandler(event) {
  let ballPositionOnXAxis = event.clientX;
  // to compensate the height of the heading elements above the canvas
  let ballPositionOnYAxis = event.clientY - canvasTopBorderPositionInPixels;
  addNewBall(ballPositionOnXAxis, ballPositionOnYAxis, balls);
  updateBallCounter();
}

/**
 * Increments the ball counter when new ball is added in the app.
 */
function updateBallCounter() {
  counterElement.innerHTML = balls.length;
}
