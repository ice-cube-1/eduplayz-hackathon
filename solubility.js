var timeLeft = 0
var qon = 0
var correct = 0
var wrong = 0
var nq = 35
var started = false
var enter = false
var w = 0
var pinksq;
var leave = false
var greysq;
var justOpened = true
var qs = [
    ['NH4NO3', 'T'], 
    ['BaSO4', 'F'], 
    ['Al(OH)3', 'F'], 
    ['(NH4)2SO4', 'T'], 
    ['Na2SO4', 'T'], 
    ['CsOH', 'T'], 
    ['CaCrO4', 'F'], 
    ['CaF2', 'F'], 
    ['NaNO3', 'T'], 
    ['Sr3(PO4)2', 'F'], 
    ['LiOH', 'T'], 
    ['Li2CO3', 'T'], 
    ['MgCO3', 'F'], 
    ['SrSO4', 'F'], 
    ['Ag(NO3)3', 'T'], 
    ['Cs2CO3', 'T'], 
    ['CaSo4', 'F'], 
    ['PbSO4', 'F'], 
    ['RbNO3', 'T'], 
    ['HgBr2', 'F'], 
    ['CH3CO2Ag', 'T'], 
    ['AgCl', 'F'], 
    ['KOH', 'T'], 
    ['PbBr', 'F'], 
    ['Ag2S', 'F'], 
    ['BaCrO4', 'F'], 
    ['Mg3(PO4)2', 'F'], 
    ['Mg(NO3)2', 'T'], 
    ['KOH', 'F'], 
    ['SrCO3', 'F'], 
    ['Ag2SO4', 'F'], 
    ['Rb2SO4', 'T'], 
    ['K2CO3', 'T'], 
    ['BaF', 'F'], 
    ['AgNO3', 'T']
]

function preload() {
    pinksq = loadImage('assets/pink.png')
    greysq = loadImage('assets/grey.png')
    bhome = loadImage('assets/home.png')
    brestart = loadImage('assets/restart.png')
    bplay = loadImage('assets/play.png')
    bblank = loadImage('assets/blankrect.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60)
    textAlign(CENTER)

}
  
function gameOver() {
    text('Game Over',windowWidth/2,100)
    image(brestart,windowWidth/2-50,windowHeight/2-100,100,100)
    if (enter == true) {
        started = false
        enter=false
        correct = 0
        wrong = 0
    }
}
function beatGame() {
    text('You have completed all the questions',windowWidth/2,100)
    image(brestart,windowWidth/2-50,windowHeight/2-100,100,100)
    if (enter == true) {
        started = false
        enter=false
        correct = 0
        wrong = 0
    }
}

function welcome() {
    if (justOpened == true) {
        text('Once started, a compound will appear on the screen.',windowWidth/2,100)
        text('Use the on-screen buttons or press \'T\' if this is soluble, \'F\' if not.',windowWidth/2, 150)
        text('Press enter to start or Esc to view other games.',windowWidth/2,200)
    } else {
        text('Press enter to start',windowWidth/2,100)
        text('Press Esc to view other games',windowWidth/2,150)
    }
    if (enter == true) {
        started = true
        enter=false
        qon=0
        timeLeft = 3540
        justOpened=false
    }
    if (leave == true) {
        window.location.href = '/index.html'
    }
    image(bplay,windowWidth/2-50,windowHeight/2-100,100,100)
    image(bhome,windowWidth/2-50,windowHeight/2+50,100,100)
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

function drawButtons() {
    image(bblank,windowWidth/2-325,300,300,50)
    image(bblank,windowWidth/2+25,300,300,50)
    text('Soluble',windowWidth/2-175,340)
    text('Insoluble',windowWidth/2+175,340)
}

function draw() {
    textSize(windowWidth/40)
    background(220);
    boxes(correct,wrong)
    if (started == false) {
        welcome()
    } else if (timeLeft>0) {
        if (qon>=nq) {
            beatGame()
        } else {
            drawButtons()
            timeLeft--
            time=Math.ceil(timeLeft/60)
            text(time,windowWidth/2,100)
            text(qs[qon][0],windowWidth/2,200)
        }
    } else {
        gameOver()
    }
}

function guesst() {
    if (qs[qon][1] == 'T') {
        correct++
    } else{
        wrong++
    }
    qon++
}

function guessf() {
    if (qs[qon][1] == 'F') {
        correct++
    } else{
        wrong++
    }
    qon++
}

function keyPressed() {
    if (qon !=nq && timeLeft !=0) {
        if (keyCode === 84) {
            guesst()
        }
        if (keyCode === 70) {
            guessf()
        }
    }
    if (keyCode === 13) {
        enter = true
    }
    if (keyCode === 27) {
        leave = true
    }
}

function mouseClicked() {
    if (mouseX > windowWidth/2-50 && mouseY > windowHeight/2-100 && mouseX < windowWidth/2+50 && mouseY < windowHeight/2) {
        enter=true
    }
    if (mouseX > windowWidth/2-50 && mouseY > windowHeight/2+50 && mouseX < windowWidth/2+50 && mouseY < windowHeight/2+150) {
        leave=true
    }
    if (qon !=nq && timeLeft !=0) {
        if (mouseX > windowWidth/2-325 && mouseY > 300 && mouseX < windowWidth/2-25 && mouseY < 350) {
            guesst()
        }
        if (mouseX > windowWidth/2+25 && mouseY > 300 && mouseX < windowWidth/2+325 && mouseY < 350) {
            guessf()
        }
    }
}
