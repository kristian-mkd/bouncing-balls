/**
 * Adds new ball to the array send input param.
 * @param ballPositionOnXAxis the ball position on X axis
 * @param ballPositionOnYAxis the ball position on Y axis
 * @param balls the balls
 */
function addNewBall(ballPositionOnXAxis, ballPositionOnYAxis, balls) {
  let newBall = new Ball(
    ballPositionOnXAxis,
    ballPositionOnYAxis,
    DEFAULT_BALL_RADIUS_IN_PIXELS,
    getRandomColor(DEFAULT_BALL_COLORS),
    INITIAL_FORCE_UPPER_LIMIT
  );
  balls.push(newBall);
}

/**
 * Draws the ball on the canvas.
 * @param balls the balls
 */
function drawBalls(balls) {
  let numberOfBalls = balls.length;
  for (i = 0; i < numberOfBalls; i++) {
    drawBall(balls[i]);
  }
}

/**
 * Draws a ball on the canvas.
 * @param ball the ball
 */
function drawBall(ball) {
  // set the color used to fill shapes
  fill(ball.color);
  // draws an ellipse (oval) to the screen
  ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
}

/**
 * Calculates the acceleration gained from impact with other balls
 * @param balls the balls
 * @param gravity the gravity
 * @param forceReduction the force reduction
 */
function calculateAccelerationFromCollisions(balls, forceReduction) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    for (let j = i; j < numberOfBalls; j++) {
      const otherCollidingBall = balls[j];
      currentBall.collide(otherCollidingBall, forceReduction);
    }
  }
}

/**
 * Applies the gravity force on the balls.
 * @param balls the balls
 * @param gravity the gravity
 */
function applyGravityForce(balls, gravity) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.dy += gravity;
  }
}

/**
 * Moves the balls on the canvas.
 * @param balls the balls
 * @param drag the drag
 * @param canvasWidthInPixels the width of the canvas in pixels
 * @param canvasHeightInPixels the height of the canvas in pixels
 * @param friction the function
 */
function moveBalls(balls, drag, canvasWidthInPixels, canvasHeightInPixels, friction) {
  let numberOfBalls = balls.length;
  for (let i = 0; i < numberOfBalls; i++) {
    let currentBall = balls[i];
    currentBall.move(drag);
    currentBall.bounce(canvasWidthInPixels, canvasHeightInPixels, friction);
  }
}
