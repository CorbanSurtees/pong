var y_2 = 120 //starting y
var x_2  //starting x
var p2h = 60  //height of paddle
var psi = 0
var psim = 0 //Paddle 2 speed increment
function Player2() {
  x_2=width-30
  strokeWeight(1)
  fill(0)
  rect(x_2,y_2,20,60)
  //drawing paddle
  if (keyIsDown(UP_ARROW) && y_2 > 0) {
  y_2 -= 4 - psi //move up
  } else
    if (keyIsDown(DOWN_ARROW) && y_2 < (height-p2h)) {
  y_2 += 4 + psi //move down
    }
}