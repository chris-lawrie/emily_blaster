function Blob(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function () {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function () {
    this.toDelete = true;
  };

  this.hits = function (line) {
    var dx = abs(this.x - line.x);
    var dy = abs(this.y - line.y);
    if (dx < this.r + line.width && dy < this.r + line.height / 2) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    this.y = this.y - 5;
  };
}
