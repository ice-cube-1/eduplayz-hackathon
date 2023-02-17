var timeLeft = 0
var qon = 0
var correct = 0
var wrong = 0
var nq = 24
var started = false
var enter = false
var w = 0
var pinksq;
var greysq;
var qs = [
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T'],
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T'],
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T'],
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T'],
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T'],
    ['salt 1','F'],
    ['salt 2','T'],
    ['salt 3','F'],
    ['salt 4','T']
]

function preload() {
    pinksq = loadImage('assets/pink.png')
    greysq = loadImage('assets/grey.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60)
}
  
function gameOver() {
    text('Game Over',100,100)
    if (enter == true) {
        started = false
        enter=false
    }
}
function beatGame() {
    text('You have completed all the questions',200,200)
    if (enter == true) {
        started = false
        enter=false
    }
}

function welcome() {
    text('Press enter to start',100,100)
    if (enter == true) {
        started = true
        enter=false
        qon=0
        timeLeft = 3540
    }
}

function boxes(correct, wrong) {
    text('Correct',50,windowHeight-100)
    var npc = Math.floor(((windowWidth/2)-100)/40)
    for (i=0;i<correct;i++) {
        ex=i%npc*40+50
        ey = Math.floor(i/npc)*40+50
        image(pinksq,ex,ey,32,32)
    }
}

function draw() {
    background(220);
    textSize(50)
    boxes(correct,wrong)
    if (started == false) {
        welcome()
    } else if (timeLeft>0) {
        if (qon>=nq) {
            beatGame()
        } else {
            timeLeft--
            time=Math.ceil(timeLeft/60)
            text(time,100,100)
            text(qs[qon][0],200,200)
        }
    } else {
        gameOver()
    }
}

function keyPressed() {
    if (qon !=nq && timeLeft !=0) {
        if (keyCode === 84) {
            if (qs[qon][1] == 'T') {
                correct++
            } else{
                wrong++
                w++
            }
            qon++
        }
        if (keyCode === 70) {
            if (qs[qon][1] == 'F') {
                correct++
            } else{
                w++
            }
            qon++
        }
    }
    if (keyCode === 13) {
        enter = true
    }
}