// sketch.js
var r = 170; // Red component
var g = 100; // Green component
var b = 200; // Blue component
var cr = 0; // ball red
var cg = 0; // ball green
var cb = 0; // ball blue
var cwidth = 600; // Updated canvas width
var cheight = 400; // Updated canvas height

function preload() {
}

function setup() {
  let canvas = createCanvas(cwidth, cheight);
  canvas.parent('container'); // Attach canvas to the container
  // Music.setVolume(0.1);
  // Music.play()
  di = round(1);
  dy = round(random(0, 9));
}

function draw() {
  console.log(psi, frameRate());
  background(r, g, b);
  ellipse(cwidth / 2, cheight / 2, 1, cheight); // halfway line
  ball(); // pong ball
  Player1(); // paddle 1
  Player2(); // paddle 2
  loss(); // loss
  score(); // scores
  if (bx <= cwidth / 2) {
    botmove();
  }
}

// Add your other functions here: ball, Player1, Player2, loss, score, botmove
