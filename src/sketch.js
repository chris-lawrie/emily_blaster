var blaster;
var lines = [];
var blobs = [];

function setup() {
  createCanvas(600, 600);
  blaster = new Blaster();
  for (var i = 0; i < 6; i++) {
    lines[i] = new Line(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  blaster.show();
  blaster.move();

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
    blobs[i].move();
    for (var j = 0; j < lines.length; j++) {
      if (blobs[i].hits(lines[j])) {
        lines[j].evaporate();
        blobs[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < lines.length; i++) {
    lines[i].show();
    lines[i].move();
    if (lines[i].x > width || lines[i].x < 0) {
      edge = true;
    }
    if (lines[i].toDelete) {
      lines.splice(i, 1);
    }
  }

  if (edge) {
    for (var i = 0; i < lines.length; i++) {
      lines[i].shiftDown();
    }
  }

  for (var i = blobs.length - 1; i >= 0; i--) {
    if (blobs[i].toDelete) {
      blobs.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != " ") {
    blaster.setDir(0);
  }
}

function keyPressed() {
  if (key === " ") {
    console.log(blaster.x, height);
    var blob = new Blob(blaster.x, height);
    blobs.push(blob);
  }

  if (keyCode === RIGHT_ARROW) {
    blaster.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    blaster.setDir(-1);
  }
}
