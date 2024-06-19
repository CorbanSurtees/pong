// loss.js
function loss() {
    if (bx <= 0 - (bd / 2) || bx >= width + (bd / 2)) {
        noLoop(); // If the ball goes off the screen
        // Music.setVolume(50)

        // Create the result box
        let resultBox = createDiv('');
        resultBox.class('result-box');

        let message = createElement('h1', (bx <= 0 - (bd / 2)) ? 'Player wins!' : 'Bot wins!');
        resultBox.child(message);

        let button = createButton('PLAY AGAIN?');
        button.mousePressed(refresh);
        button.class('play-again-button');
        resultBox.child(button);

        if (bx <= 0 - (bd / 2)) {
            point_1 += 1; // Update score
        } else if (bx >= width + (bd / 2)) {
            point_2 += 1; // Update score
        }
    }
}

function refresh() {
    setTimeout(function() { location.reload(true); }, 100);
}
