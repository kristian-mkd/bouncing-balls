// Physical variables
const ACCELERATION = 0.05; // Force of throw
const DRAG = 0.975; // Air resistance
const FRICTION = 0.85; // Wall bounciness
const GRAVITY = 0.9; // Force due to gravity

// used for random speed and direction on ball launch
const INITIAL_FORCE_UPPER_LIMIT = 100;

/**
 * Constant value used for stabilization of the balls and preventing
 * perpetuum mobile effect where the balls cannot settle in still position.
 */
const FORCE_REDUCTION = 0.5;

// Canvas dimensions and background color
const CANVAS_WIDTH_IN_PIXELS = 700;
const CANVAS_HEIGHT_IN_PIXELS = 700;
const CANVAS_BACKGROUND_COLOR = [220, 220, 220];

// Array with RGB colors: BLUE, RED, YELLOW, GREEN
const DEFAULT_BALL_COLORS = [[66, 133, 244], [219, 68, 55], [244, 180, 0], [15, 157, 88]];
const DEFAULT_BALL_RADIUS_IN_PIXELS = 30;
