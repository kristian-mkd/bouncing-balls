describe("Test ball movement.", () => {
  it("Expect to move ball on both axes.", () => {
    // given
    let ballX = ONE;
    let ballY = ONE;
    let someDrag = ONE;
    let someUpperForceLimit = 100;
    let newBall = new Ball(ballX, ballY, SOME_BALL_RADIUS, SOME_BALL_COLOR, someUpperForceLimit);

    // when
    newBall.move(someDrag);

    // then
    expect(newBall.x).not.toBe(ballX);
    expect(newBall.y).not.toBe(ballY);
  });
});

describe("Test ball collision when balls are not colliding.", () => {
  it("Expect no additional forces applied to the balls.", () => {
    // given
    let firstBallRadius = ONE;
    let secondBallRadius = 5;

    let someForceReduction = 0.5;
    let someUpperForceLimit = 100;

    let firstBall = new Ball(ONE, ONE, firstBallRadius, ONE, someUpperForceLimit);
    let firstBallDxBeforeImpact = firstBall.dx;
    let firstBallDyBeforeImpact = firstBall.dy;

    let secondBall = new Ball(TEN, TEN, secondBallRadius, ONE, someUpperForceLimit);
    let secondBallDxBeforeImpact = secondBall.dx;
    let secondBallDyBeforeImpact = secondBall.dy;

    // when
    firstBall.collide(secondBall, someForceReduction);

    // then
    expect(firstBallDxBeforeImpact).toBe(firstBall.dx);
    expect(firstBallDyBeforeImpact).toBe(firstBall.dy);
    expect(secondBallDxBeforeImpact).toBe(secondBall.dx);
    expect(secondBallDyBeforeImpact).toBe(secondBall.dy);
  });
});

describe("Test ball collision when balls are colliding.", () => {
  it("Expect displacements to change due collision with other ball.", () => {
    // given
    let firstBallRadius = ONE;
    let secondBallRadius = TWO;

    let someForceReduction = 0.5;
    let someUpperForceLimit = 100;

    let firstBall = new Ball(ONE, ONE, firstBallRadius, SOME_BALL_COLOR, someUpperForceLimit);
    let firstBallDxBeforeImpact = firstBall.dx;
    let firstBallDyBeforeImpact = firstBall.dy;

    let secondBall = new Ball(TWO, TWO, secondBallRadius, SOME_BALL_COLOR, someUpperForceLimit);
    let secondBallDxBeforeImpact = secondBall.dx;
    let secondBallDyBeforeImpact = secondBall.dy;

    // when
    firstBall.collide(secondBall, someForceReduction);

    // then
    expect(firstBallDxBeforeImpact).not.toBe(firstBall.dx);
    expect(firstBallDyBeforeImpact).not.toBe(firstBall.dy);
    expect(secondBallDxBeforeImpact).not.toBe(secondBall.dx);
    expect(secondBallDyBeforeImpact).not.toBe(secondBall.dy);
  });
});
