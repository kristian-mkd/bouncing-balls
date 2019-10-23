// Physical variables
const ACCELERATION = 0.05; // Force of throw
const DRAG = 0.975; // Air resistance
const FRICTION = 0.85; // Wall bounciness
const GRAVITY = 0.9; // Force due to gravity

// used for random speed and direction on ball launch
const INITIAL_FORCE_UPPER_LIMIT = 100;

const DEFAULT_BALL_RADIUS_IN_PIXELS = 30;
const CANVAS_WIDTH_IN_PIXELS = 700;
const CANVAS_HEIGHT_IN_PIXELS = 700;

// Array with RGB google colors: BLUE, RED, YELLOW, GREEN 
const DEFAULT_BALL_COLORS = [[66, 133, 244], [219, 68, 55], [244, 180, 0], [15, 157, 88]];