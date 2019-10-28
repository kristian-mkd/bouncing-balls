/**
 * Random number generator.
 * @param upperLimit the upper limit
 * @returns random number from the range of [0, upperLimit].
 */
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

/**
 * Gets scalar value for random force.
 * @param upperForceLimit the upper force limit
 * @returns scalar value for random force.
 */
function getRandomForce(upperForceLimit) {
  return getRandomNumber(upperForceLimit);
}

/**
 * Generates random direction scalar.
 * @returns a pseudorandom number between -0.5 and 0.5.
 */
function getRandomDirection() {
  return Math.random() - 0.5;
}

/**
 * Creates p5js color object receives array of RGB colors
 * [[255, 255, 255], [0, 0, 0]...]
 * @param colors array of arrays containing RGB values
 * @returns p5js color object
 */
function getRandomColor(colors) {
  let randomColor = colors[getRandomNumber(colors.length)];
  return color(randomColor[0], randomColor[1], randomColor[2]); // creates p5js color object
}
