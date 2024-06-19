var y_1 = 120 //Y start
var x_1 = 10  //X start
var p1h = 60  //paddle height
var psim = 0 //paddle speed increase
var psi = 0
function Player1() {
  
  if (bounce == true || bounce1 == true) {
  psim = random(0.005,0.02)
  psi += psim
  }
  strokeWeight(1)
  fill(255)
  rect(10 , y_1 ,20,p1h)
  //Drawing paddl
}