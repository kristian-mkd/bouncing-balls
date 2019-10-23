// Returns random number from the range of [0, upperLimit] where the upperLimit is the input param.
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

// Creates p5js color object receives array of RGB colors 
// ex: [[255, 255, 255], [0, 0, 0]...]
function getRandomColor(colors) {
  let randomColor = colors[getRandomNumber(DEFAULT_BALL_COLORS.length)];
  return color(randomColor[0], randomColor[1], randomColor[2]); // creates p5js color object
}

function getRandomDirectionAndForce() {
    let randomInitialForce = getRandomNumber(INITIAL_FORCE_UPPER_LIMIT);
    let randomDirection = Math.random() - 0.5;
    return randomInitialForce * randomDirection;
}