
var hp=1
function botmove(){
if (y_1+p1h/hp<by&& y_1 < (height-p1h)) {
y_1=y_1+1.5+psi
} else
if (y_1+p1h/hp>by && y_1 > 0) {
y_1=y_1-1.5-psi
}  else
  if (y_1+p1h/hp==by) {
  y_1=y_1
  }
 
  if (hp>4) {
  hp=1
  }
}