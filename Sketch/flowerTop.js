//import mathjs from "mathjs"

class FlowerTop {
  constructor(stem_top_x, stem_top_y, bloom_radius) {
    this.bloom_center_x = stem_top_x;
    this.bloom_radius = bloom_radius;
    this.bloom_center_y = stem_top_y - this.bloom_radius;
    this.theta = radians(60);
    this.thetass = radians(0);
    console.log("Theta:" + this.theta);


  }

  update() {
    this.flowerBloom = new FlowerBloom(this.bloom_center_x, this.bloom_center_y, this.bloom_radius);
    this.flowerPetal1 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(0), radians(72));
    this.flowerPetal2 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(72), radians(144));
    this.flowerPetal3 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(144), radians(216));
    this.flowerPetal4 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(216), radians(288));
    this.flowerPetal5 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(288), radians(360));
    //this.flowerPetal6 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(300), radians(360));
  }

  show() {
      this.flowerPetal1.show();
      this.flowerPetal2.show();
      this.flowerPetal3.show();
      this.flowerPetal4.show();
      this.flowerPetal5.show();
      //this.flowerPetal6.show();

      this.flowerBloom.show();
  }
}
