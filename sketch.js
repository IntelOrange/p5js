var col = 0;

function setup() {
    createCanvas(600, 600);
    
}

function draw() {
    background(col);
    col = map(mouseX, 0, 600, 0, 255);
}

function mousePressed(){
    alert(col);
}