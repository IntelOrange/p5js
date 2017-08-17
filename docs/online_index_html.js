var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(1000, 800);
  frameRate(15);
  snake = new Snake();
  pickLocation();
  document.getElementById("score");
  canvas.style = "position:absolute; left: 50%; height: auto; margin-left: -400px;";
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255);
  rect(food.x, food.y, scl, scl);

  //Post Score
  document.getElementById("score").textContent = "Score : " + snake.total;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
