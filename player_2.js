var y_2 = 120 //starting y
var x_2  //starting x
var p2h = 60  //height of paddle
var psi = 0
var psim = 0 //Paddle 2 speed increment
var controlY = y_2; // control y position
function Player2() {
    x_2 = width - 30;
    strokeWeight(1);
    fill(0);
    rect(x_2, y_2, 20, 60); //drawing paddle

    if (keyIsDown(UP_ARROW) && y_2 > 0) {
        y_2 -= 4 - psi; //move up
    } else if (keyIsDown(DOWN_ARROW) && y_2 < (height - p2h)) {
        y_2 += 4 + psi; //move down
    }

    // Move paddle based on touch input
    if (touches.length > 0) {
        let touch = touches[0];
        controlY = touch.y;

        if (controlY < y_2 + p2h / 2 && y_2 > 0) {
            y_2 -= 4 - psi; //move up
        } else if (controlY > y_2 + p2h / 2 && y_2 < (height - p2h)) {
            y_2 += 4 + psi; //move down
        }
    }

    // Move paddle based on mouse input
    if (mouseIsPressed) {
        controlY = mouseY;

        if (controlY < y_2 + p2h / 2 && y_2 > 0) {
            y_2 -= 4 - psi; //move up
        } else if (controlY > y_2 + p2h / 2 && y_2 < (height - p2h)) {
            y_2 += 4 + psi; //move down
        }
    }
}

function touchStarted() {
    return false; // Prevent default behavior
}

function touchMoved() {
    return false; // Prevent default behavior
}