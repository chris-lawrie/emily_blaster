// start off simple...

let x, y;
let dx = 2;
let dy = 3;
let radius = 20;
let squareSize = 400;

function setup() {
  createCanvas(squareSize, squareSize);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255);

  // Update position
  x += dx;
  y += dy;

  // Check boundaries
  if (x + radius >= width || x - radius <= 0) {
    dx *= -1;
  }
  if (y + radius >= height || y - radius <= 0) {
    dy *= -1;
  }

  // Draw square
  rect(0, 0, squareSize, squareSize);

  // Draw ball
  ellipse(x, y, radius * 2);
}
