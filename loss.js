function loss() {
    if (bx <= 0 - (bd / 2) || bx >= width + (bd / 2)) {
        noLoop() //If the ball goes off the screen
        //Music.setVolume(50)
        fill((r * 2) % 255, (g * 2) % 255, (b * 2) % 255)//text color 
        if (bx <= 0 - (bd / 2)) {
            text("Player wins!", 300, 150)
        }
        if (bx >= width + (bd / 2)) {
            text("Bot wins!", 55, 150)
        }
        button = createButton('PLAY AGAIN?')
        button.position(245, 245)
        button.mousePressed(refresh)
    }
}
function refresh() {
    setTimeout(function(){location.reload(true);},100)
}