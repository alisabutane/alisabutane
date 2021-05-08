var canvas = document.getElementById('game')
var context = canvas.getContext('2d')

var x = 0
var y = 0
var direction = 'right'

function play() {
    context.clearRect(0, 0, 600, 500)
    context.fillRect(x, y, 20, 20);

    if (keyboard.button() == 'ArrowRight') {
        x = x + 3
    }

    if (keyboard.button() == 'ArrowLeft') {
        x = x - 3
    }

    if (keyboard.button() == 'ArrowUp') {
        y = y - 3
    }

    if (keyboard.button() == 'ArrowDown') {
        y = y + 3
    }

    window.requestAnimationFrame(play);
}

play();