let myFont;

function preload() {
  myFont = "Georgia";
}

// TODO: maybe make this a class...?
function Line(x, y, line_text) {
  this.x = x;
  this.y = y;
  this.line_text = line_text;
  this.width = 10;
  this.height = this.line_text.length * 9;
  this.toDelete = false;

  this.xdir = 0.7;

  this.shiftDown = function () {
    this.xdir *= -1;
    this.y += 1;
  };

  this.evaporate = function () {
    this.toDelete = true;
  };

  this.move = function () {
    this.x = this.x + this.xdir;
  };

  this.show = function () {
    // stroke(255);
    noStroke();
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.width * 2, this.height);

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont(myFont);

    push();
    translate(this.x, this.y);
    rotate(-HALF_PI);
    text(this.line_text, 0, 0);
    pop();
  };
}
