function setup() {
    createCanvas(windowWidth, windowHeight)
    logo = loadImage('assets/logolarge.png')
    bblank = loadImage('assets/blankrect.png')
    textAlign(CENTER)
}

  
function draw() {
    textSize(windowWidth/40)
    background(220);
    text('Welcome to Eduplayz! More games coming soon.',windowWidth/2,100)
    textSize(windowWidth/50)
    image(logo,windowWidth-250,10,200,200/3845*1306)
    image(bblank,windowWidth/2-375,200,350,50)
    image(bblank,windowWidth/2+25,200,350,50)
    text('OxiQuest',windowWidth/2-200,240)
    text('Soluble Solutions',windowWidth/2+200,240)  
}

function mouseClicked() {
    if (mouseX > windowWidth/2-375 && mouseY > 200 && mouseX < windowWidth/2-25 && mouseY < 250) {
        window.location.href = '/OxiQuest.html'
    }
    if (mouseX > windowWidth/2+25 && mouseY > 200 && mouseX < windowWidth/2+375 && mouseY < 250) {
        window.location.href = '/SolubleSolutions.html'
    }
}