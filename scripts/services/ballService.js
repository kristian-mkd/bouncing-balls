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

function drawBalls(balls) {
  let numberOfBalls = balls.length;
  for (i = 0; i < numberOfBalls; i++) {
    drawBall(balls[i]);
  }
}

function drawBall(ball) {
    // set the color used to fill shapes
    fill(ball.color);
    // draws an ellipse (oval) to the screen
    ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
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
