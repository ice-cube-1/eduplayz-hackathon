var enter = false
var leave = false
var cls = 0
var ps = 0
var crs = 0
var clhs = 0
var phs = 0
var crhs = 0
var scene = 'start'
var qon = 0
var button = 0
var clqs = [
    ['HCl',[-2,-1,1,2],2],
    ['HClO', [-2,-1,1,2],3],
    ['NaClO2',[-4,1,3,4],3],
    ['KClO3',[-3,1,3,5],4],
    ['Cl2O7',[-14,-2,1,7],4],
    ['ClO2',[-4,2,4,8],3]
]

var pqs = [
    ['PH3',[-5,3,5,7],2],
    ['PCl5',[-5,-1,5,7],3],
    ['H3PO4',[-4,-3,1,5],4],
    ['P4O10',[-5,-4,5,10],3],
    ['HPO3(2-)',[-6,1,2,3],4]
]

var crqs = [
    ['Cr',[-1,0,1,2],2],
    ['Cr(H2O)6(3+)',[0,2,3,6],3],
    ['Na2CrO4',[1,2,3,6],4],
    ['Cr2O7(2-)',[1,4,6,8],3],
]

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER)
    bhome = loadImage('assets/home.png')
    bplay = loadImage('assets/play.png')
    pinkdoorimg = loadImage('assets/door.png')
    greydoorimg = loadImage('assets/greydoor.png')
    bback = loadImage('assets/back.png')
    bblank = loadImage('assets/blankrect.png')
    logo = loadImage('assets/logolarge.png')
  }

function start() {
    text('Answer the questions behind each door to earn points',windowWidth/2,100)
    image(bplay,windowWidth/2-50,windowHeight/2-100,100,100)
    image(bhome,windowWidth/2-50,windowHeight/2+50,100,100)
    if (enter == true) {
        scene = 'doors'
        enter = false
    }
    if (leave == true) {
        window.location.href = '/index.html'
        leave=false
    }
}

function doors() {
    if ((windowWidth-400)/3 > ((windowHeight-200)/50)*29) {
        height=windowHeight-200
        width=height*29/50
    } else {
        width = (windowWidth-400)/3
        height=width*50/29
    }
    if (clhs == 120) {
        image(pinkdoorimg,100,50,width,height)
    } else {
        image(greydoorimg,100,50,width,height)
    }
    if (phs == 120) {
        image(pinkdoorimg,200+width,50,width,height)
    } else {
        image(greydoorimg,200+width,50,width,height)
    }
    if (crhs == 120) {
        image(pinkdoorimg,300+width*2,50,width,height)
    } else {
        image(greydoorimg,300+width*2,50,width,height)
    }
    image(bhome,windowWidth/2-50,windowHeight-125,100,100)
    text('Cl',100+width*0.5,windowHeight/2)
    text(clhs,100+width*0.5,windowHeight/2+50)
    text('P',200+width*1.5,windowHeight/2)
    text(phs,200+width*1.5,windowHeight/2+50)
    text('Cr',300+width*2.5,windowHeight/2)
    text(crhs,300+width*2.5,windowHeight/2+50)
}

function cl() {
    text('What is the oxidation state of chlorine in these compounds?',windowWidth/2,100)
    image(bplay,windowWidth/2-50,windowHeight/2-100,100,100)
    image(bback,windowWidth/2-50,windowHeight/2+50,100,100)
    if (enter == true) {
        scene = 'clq'
        enter = false
    }
    if (leave == true) {
        scene = 'doors'
        leave=false
    }
}

function p() {
    text('What is the oxidation state of Phosphorus in these compounds?',windowWidth/2,100)
    image(bplay,windowWidth/2-50,windowHeight/2-100,100,100)
    image(bback,windowWidth/2-50,windowHeight/2+50,100,100)
    if (enter == true) {
        scene = 'pq'
        enter = false
    }
    if (leave == true) {
        scene = 'doors'
        leave=false
    }
}

function cr() {
    text('What is the oxidation state of Chromium in these compounds?',windowWidth/2,100)
    image(bplay,windowWidth/2-50,windowHeight/2-100,100,100)
    image(bback,windowWidth/2-50,windowHeight/2+50,100,100)
    if (enter == true) {
        scene = 'crq'
        enter = false
    }
    if (leave == true) {
        scene = 'doors'
        leave=false
    }
}

function clq() {
    if (qon < 6) {
        enter=false
        text(clqs[qon][0],windowWidth/2,100)
        image(bblank,windowWidth/2-125,150,100,50)
        image(bblank,windowWidth/2+25,150,100,50)
        text(clqs[qon][1][0],windowWidth/2-75,190)
        text(clqs[qon][1][1],windowWidth/2+75,190)
        image(bblank,windowWidth/2-125,225,100,50)
        image(bblank,windowWidth/2+25,225,100,50)
        text(clqs[qon][1][2],windowWidth/2-75,265)
        text(clqs[qon][1][3],windowWidth/2+75,265)
        if (button != 0) {
            if (button == clqs[qon][2]) {
                cls+=20
            }
            qon++
            button = 0
        }
    } else {
        text(cls,windowWidth/2,100)
        if (cls > clhs) {
            clhs = cls
        }
        image(bback,windowWidth/2-50,windowHeight/2-100,100,100)
        if (enter == true) {
            scene='doors'
            qon = 0
            cls = 0
        }
    }
}

function pq() {
    if (qon < 5) {
        enter=false
        text(pqs[qon][0],windowWidth/2,100)
        image(bblank,windowWidth/2-125,150,100,50)
        image(bblank,windowWidth/2+25,150,100,50)
        text(pqs[qon][1][0],windowWidth/2-75,190)
        text(pqs[qon][1][1],windowWidth/2+75,190)
        image(bblank,windowWidth/2-125,225,100,50)
        image(bblank,windowWidth/2+25,225,100,50)
        text(pqs[qon][1][2],windowWidth/2-75,265)
        text(pqs[qon][1][3],windowWidth/2+75,265)
        if (button != 0) {
            if (button == pqs[qon][2]) {
                ps+=24
            }
            qon++
            button = 0
        }
    } else {
        text(ps,windowWidth/2,100)
        if (ps > phs) {
            phs = ps
        }
        image(bback,windowWidth/2-50,windowHeight/2-100,100,100)
        if (enter == true) {
            scene='doors'
            qon = 0
            ps = 0
        }
    }
}

function crq() {
    if (qon < 4) {
        enter=false
        text(crqs[qon][0],windowWidth/2,100)
        image(bblank,windowWidth/2-125,150,100,50)
        image(bblank,windowWidth/2+25,150,100,50)
        text(crqs[qon][1][0],windowWidth/2-75,190)
        text(crqs[qon][1][1],windowWidth/2+75,190)
        image(bblank,windowWidth/2-125,225,100,50)
        image(bblank,windowWidth/2+25,225,100,50)
        text(crqs[qon][1][2],windowWidth/2-75,265)
        text(crqs[qon][1][3],windowWidth/2+75,265)
        if (button != 0) {
            if (button == crqs[qon][2]) {
                crs+=30
            }
            qon++
            button = 0
        }
    } else {
        text(crs,windowWidth/2,100)
        if (crs > crhs) {
            crhs = crs
        }
        image(bback,windowWidth/2-50,windowHeight/2-100,100,100)
        if (enter == true) {
            scene='doors'
            qon = 0
            crs = 0
        }
    }
}
  
function draw() {
    textSize(windowWidth/40)
    background(220);
    image(logo,windowWidth-250,10,200,200/3845*1306)
    if (scene == 'start') {
        start()
    } else if (scene == 'doors') {
        doors()
    } else if (scene == 'Cl') {
        cl()
    } else if (scene == 'P') {
        p()
    } else if (scene == 'Cr') {
        cr()
    } else if (scene == 'clq') {
        clq()
    } else if (scene == 'pq') {
        pq()
    } else if (scene == 'crq') {
        crq()
    }
    else {
        console.log('error')
    }
}

function mouseClicked() {
    enter=false
    if (mouseX > windowWidth/2-50 && mouseY > windowHeight/2-100 && mouseX < windowWidth/2+50 && mouseY < windowHeight/2) {
        enter=true
    }
    if (mouseX > windowWidth/2-50 && mouseY > windowHeight/2+50 && mouseX < windowWidth/2+50 && mouseY < windowHeight/2+150) {
        leave=true
    }
    if (scene=='doors') {
        if (mouseX > 100 && mouseY > 50 && mouseX < 100+width && mouseY < 50+height) {
            scene='Cl'
        }
        if (mouseX > 200+width && mouseY > 50 && mouseX < 200+width*2 && mouseY < 50+height) {
            scene='P'
        }
        if (mouseX > 300+width*2 && mouseY > 50 && mouseX < 300+width*3 && mouseY < 50+height) {
            scene='Cr'
        }
        if (mouseX > windowWidth/2-50 && mouseY > windowHeight-125 && mouseX < windowWidth/2+50 && mouseY < windowHeight-25) {
            window.location.href = '/index.html'
        }
    }
        if (mouseX > windowWidth/2-125 && mouseY > 150 && mouseX < windowWidth/2-25 && mouseY < 200) {
            button = 1
        }
        if (mouseX > windowWidth/2+25 && mouseY > 150 && mouseX < windowWidth/2+125 && mouseY < 200) {
            button = 2
        }
        if (mouseX > windowWidth/2-125 && mouseY > 225 && mouseX < windowWidth/2-25 && mouseY < 275) {
            button = 3
        }
        if (mouseX > windowWidth/2+25 && mouseY > 225 && mouseX < windowWidth/2+125 && mouseY < 275) {
            button = 4
        }
    }