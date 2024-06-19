// score.js
var point_1 = 0;
var point_2 = 0;
var score_x;

function score() {
  fill(255);
  textSize(40);
  textAlign(CENTER);
  score_x = width / 3;
  text(point_1, score_x, 50);
  text(point_2, score_x * 2, 50);
}
