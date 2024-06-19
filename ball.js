var bx = 300 //Ball starting x
var by = 150 //Ball starting y
var bxs = 5  //Ball starting x speed
var di = 0  //Left of Right
var dy = 0
var bd = 20  //ball diameter
var ibxs = 0.0033 //X speed increase per frame
var ibys = 0.0016 //Y speed increase per frame
var bsx1 = 0      //Ball speed addition x
var bsy1 = 0      //Ball speed addition y
var bsy = 2    //Ball starting y speed
var lastBounceTime = 0; // Timestamp of the last bounce
function ball() {
  
  if (di % 2 == 1) {
  bxs = 5 + bsx1
  }
  if (di % 2 == 0) {
    bxs = -5 - bsx1
  }
  //Left or right
  bx += bxs
  by += bsy
  //X and Y movement
  bounce = collideRectCircle
  (x_1,y_1-5,20,p1h+10,bx,by,bd)
  bounce1 = collideRectCircle
  (x_2,y_2-5,20,p2h+10,bx,by,bd)
  //check if the ball is touched
  
  if (bounce == true) {
  di += 1
  point_1 += 1
  bounce = false
  bsx1 += random(0.15)
  bsy1 += random(0.30)
    hp+=0.5
  }
  if (bounce1 == true) {
  di += 1
  point_2 += 1
  bounce = false
  bsx1 += random(0.15)
  bsy1 += random(0.30)
    
  }
  //BOUNCE LEFT OR RIGHT
  if (by >= height - (bd/2) ) {
    dy += 1
  }
  if (by <= 0 + (bd/2)) {
  bsy = 2 + bsy1
    dy += 1
  }
  //UP or DOWN
  
  if (dy % 2 == 1) {
    bsy = -2 - bsy1
  }
  if (dy % 2 == 0) {
    bsy = 2 + bsy1
  }
  
  ibxs = random(0.0033)
  ibys = random(0.0016)
  bsx1 += ibxs
  bsy1 += ibys
  //Natural increase
  // Draw the ball with a gradient fill
  let c1 = color(128, 0, 0); // Red
  let c2 = color(200, 0, 200); // Yellow
  let interColor = lerpColor(c1, c2, map(by, 0, height, 0, 1));
  fill(interColor);
  noStroke();
  ellipse(bx, by, bd, bd);
  //Ball
}