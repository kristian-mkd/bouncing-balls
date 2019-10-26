// GLOBAL VARIABLES
// used for the state of the app
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
  background(220, 220, 220); // background color of the p5.js canvas
  drawBalls(balls);
  calculateAcceleration(balls, GRAVITY, FORCE_REDUCTION);
  moveBalls(balls, DRAG, CANVAS_WIDTH_IN_PIXELS, CANVAS_HEIGHT_IN_PIXELS, FRICTION);
}

/**
 * Event handler that handles clicks on the canvas to create new balls. 
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
 * Event handler that handles clicks on the canvas to create new balls. 
 */
function updateBallCounter() {
  counterElement.innerHTML = balls.length;
}
