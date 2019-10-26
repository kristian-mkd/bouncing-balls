// Returns random number from the range of [0, upperLimit] where the upperLimit is the input param.
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

// Creates p5js color object receives array of RGB colors
// ex: [[255, 255, 255], [0, 0, 0]...]
function getRandomColor(colors) {
  let randomColor = colors[getRandomNumber(colors.length)];
  return color(randomColor[0], randomColor[1], randomColor[2]); // creates p5js color object
}

/**
 * Gets scalar value for random direction;
 * @param {*} upperForceLimit
 */
function getRandomForce(upperForceLimit) {
  return getRandomNumber(upperForceLimit);
}

function getRandomDirection() {
  return Math.random() - 0.5;
}
