# Bouncing balls

## App is hosted [here](https://kristian-mkd.github.io/bouncing-balls/)

## Used technologies
![HTML, JS, CSS](img/html_css_js_logo.jpg)![p5.js](img/p5js_logo.jpg)

## Used third party library [p5.js](https://p5js.org/)
 - it is used only for drawing of the balls on the screen
 - used methods: 
   - [setup()](https://p5js.org/reference/#/p5/setup) invoked on startup to initialize the app
   - [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) creates the canvas on which the balls are drawn
   - [background()](https://p5js.org/reference/#/p5/background) sets the background color of the canvas and to prepare the blank canvas for each new draw iteration
   - [fill()](https://p5js.org/reference/#/p5/fill) sets the color used to fill shapes
   - [elipse()](https://p5js.org/reference/#/p5/ellipse) draws circles on the canvas

## Disclamers

- It can be rewritten using Webpack, Babel, ES5, with modern JS, modules, classes Typescript, 
- global vars should be removed, or encapsulated only for the main state of the app