var r = 50//red
var g = 150//green
var b = 200//blue
var cr = 0//ball red
var cg = 0//ball green
var cb = 0//ball blue
var cwidth = 600
function preload() {
}

function setup() {
  createCanvas(cwidth, 300);
  // Music.setVolume(0.1);
  // Music.play()
  di = round(1)
  dy = round(random(0,9))
}

function draw() {
  console.log(psi,frameRate())
background(r, g, b);
  ellipse(cwidth/2,150,1,300)//half way line
  ball()//pong ball
  Player1()//paddle 1
  Player2()//paddle 2
  loss()//loss
  score()//scores
  if (bx<=cwidth/2) {
  botmove()
  }
}