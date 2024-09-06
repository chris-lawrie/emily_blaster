function Blob(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function () {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function () {
    this.toDelete = true;
  };

  this.hits = function (line) {
    var d = dist(this.x, this.y, line.x, line.y);
    if (d < this.r + line.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    this.y = this.y - 5;
  };
}
