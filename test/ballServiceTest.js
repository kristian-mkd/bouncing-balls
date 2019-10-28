describe("Test gravity force.", () => {
  it("Expect Y axis displacement of ball to be changed due to the gravity force.", () => {
    // given
    let gravity = 0.9;
    let someUpperForceLimit = 100;
    let newBall = new Ball(ONE, ONE, SOME_BALL_RADIUS, SOME_BALL_COLOR, someUpperForceLimit);
    let displacementOnYAxisBefore = newBall.dy;
    let balls = [newBall];

    // when
    applyGravityForce(balls, gravity);

    // then
    const displacementOnYAxisAfter = balls[0].dy;
    expect(displacementOnYAxisAfter).not.toBe(displacementOnYAxisBefore);
    expect(displacementOnYAxisAfter).toBe(displacementOnYAxisBefore + gravity);
  });
});

describe("Test ball addition.", () => {
  it("Expect new ball to be added.", () => {
    // given
    let ballX = ONE;
    let ballY = ONE;
    let balls = [];

    // when
    addNewBall(ballX, ballY, SOME_BALL_COLOR, balls);

    // then
    expect(balls.length).toBe(ONE);
    expect(balls[0].x).toBe(ONE);
    expect(balls[0].y).toBe(ONE);
  });
});
