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

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  this.x_middle = windowWidth / 2;
  this.y_middle = windowHeight / 2;
}
