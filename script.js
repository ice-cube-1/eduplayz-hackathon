var timeLeft = 0
var qon = 0
var correct = 0
var wrong = 0
var nq = 24
var started = false
var enter = false
var w = 0
var pinksq;
var leave = false
var greysq;
var qs = [
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T'],
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T'],
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T'],
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T'],
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T'],
    ['chemical 1','F'],
    ['chemical 2','T'],
    ['chemical 3','F'],
    ['chemical 4','T']
]

function preload() {
    pinksq = loadImage('assets/pink.png')
    greysq = loadImage('assets/grey.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60)
    textAlign(CENTER)
    textSize(50)

}
  
function gameOver() {
    text('Game Over',windowWidth/2,100)
    text('Press Enter to continue',windowWidth/2,150)
    if (enter == true) {
        started = false
        enter=false
        correct = 0
        wrong = 0
    }
}
function beatGame() {
    text('You have completed all the questions',windowWidth/2,100)
    text('Press Enter to continue',windowWidth/2,150)
    if (enter == true) {
        started = false
        enter=false
        correct = 0
        wrong = 0
    }
}

function welcome() {
    text('Press enter to start',windowWidth/2,100)
    text('Press Esc to view other games',windowWidth/2,150)
    if (enter == true) {
        started = true
        enter=false
        qon=0
        timeLeft = 3540
    }
    if (leave == true) {
        window.location.href = '/index.html'
    }
}

function boxes(correct, wrong) {
    score=(correct*25)-(wrong*30)
    text('Correct',windowWidth/4,windowHeight-50)
    text('Incorrect',50+windowWidth*3/4,windowHeight-50)
    text(score,windowWidth/2,windowHeight-50)
    var npc = Math.floor(((windowWidth/2)-100)/40)
    for (i=0;i<correct;i++) {
        ex=i%npc*40+50
        ey = Math.floor(i/npc)*40+150
        image(pinksq,ex,windowHeight-ey,32,32)
    }
    for (i=0;i<wrong;i++) {
        ex=i%npc*40+50+windowWidth/2
        ey = Math.floor(i/npc)*40+150
        image(greysq,ex,windowHeight-ey,32,32)
    }
}

function draw() {
    background(220);
    boxes(correct,wrong)
    if (started == false) {
        welcome()
    } else if (timeLeft>0) {
        if (qon>=nq) {
            beatGame()
        } else {
            timeLeft--
            time=Math.ceil(timeLeft/60)
            text(time,windowWidth/2,100)
            text(qs[qon][0],windowWidth/2,200)
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
            }
            qon++
        }
        if (keyCode === 70) {
            if (qs[qon][1] == 'F') {
                correct++
            } else{
                wrong++
            }
            qon++
        }
    }
    if (keyCode === 13) {
        enter = true
    }
    if (keyCode === 27) {
        leave = true
    }
}