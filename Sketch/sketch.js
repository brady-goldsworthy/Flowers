let x_middle;
let y_middle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  this.x_middle = windowWidth / 2;
  this.y_middle = windowHeight / 2;
}

function draw() {
  background(255);

  flower = new Flower(this.x_middle, this.y_middle);
  flower.update();
  flower.show();

  stroke(0);
  strokeWeight(3);
  // let cp1 = {x: this.x_middle + 33, y: this.y_middle - 50};
  // let p1 = {x: this.x_middle, y: this.y_middle};
  // let cp2 = {x: this.x_middle + 66, y: this.y_middle - 50};
  // let p2 = {x: this.x_middle + 100 , y: this.y_middle};

  //curve (cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);
  // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
  //bezier(cp1.x, cp1.y, p1.x, p1.y, p2.x, p2.y, cp2.x, cp2.y);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  this.x_middle = windowWidth / 2;
  this.y_middle = windowHeight / 2;
}
