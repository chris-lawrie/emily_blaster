var blaster;
var lines = [];
var blobs = [];
var hit_lines = [];
let all_lines = [
  "Hope is the thing with feathers -",
  "That perches in the soul -",
  "And sings the tune without the words -",
  "And never stops - at all -",
  "And sweetest - in the Gale - is heard -",
  "And sore must be the storm -",
  "That could abash the little Bird",
  "That kept so many warm -",
  "I’ve heard it in the chillest land -",
  "And on the strangest Sea -",
  "Yet - never - in Extremity,",
  "It asked a crumb - of me.",
];

function setup() {
  createCanvas(600, 600);
  blaster = new Blaster();

  let row1_y = 60;
  let row2_y = row1_y + 150;

  for (let i = 0; i < all_lines.length; i++) {
    if (i < 6) {
      lines[i] = new Line(i * 80 + 80, row1_y, all_lines[i]);
    } else {
      lines[i] = new Line((i - 6) * 80 + 80 + 40, row2_y, all_lines[i]);
    }
  }
}

function draw() {
  background(51);

  for (var i = 0; i < hit_lines.length; i++) {
    fill(255);
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    text(
      hit_lines[i].line_text,
      60 + hit_lines[i].height,
      60 + hit_lines[i].width * i * 1.8
    );
  }

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
    blobs[i].move();
    for (var j = 0; j < lines.length; j++) {
      if (blobs[i].hits(lines[j])) {
        console.log(lines[j]);
        hit_lines.push(lines[j]);
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

  blaster.show();
  blaster.move();
}

function keyReleased() {
  if (key != " ") {
    blaster.setDir(0);
  }
}

function keyPressed() {
  if (key === " ") {
    var blob = new Blob(blaster.x, height);
    blobs.push(blob);
  }

  if (keyCode === RIGHT_ARROW) {
    blaster.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    blaster.setDir(-1);
  }
}
