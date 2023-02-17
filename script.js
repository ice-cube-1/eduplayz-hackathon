var timeLeft = 3540
var guess;
var qs = [
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T']
]

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60)
}
  
function gameOver() {
    text('Game Over',100,100)
}

function draw() {
    background(220);
    if (timeLeft>0) {
        timeLeft--
        time=Math.ceil(timeLeft/60)
        textSize(100)
        text(time,100,100)
        text(qs[0][0],200,200)
    } else {
        gameOver()
    }
}

function keyPressed() {
    if (keyCode === 84) {
        guess = 'T'
    }
}