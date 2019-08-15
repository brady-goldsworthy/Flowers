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

    this.flowerPetal1 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, this.thetass, this.theta);
  }

  show() {
      this.flowerBloom.show();
      this.flowerPetal1.show();
      // this.flowerPetal2.show();
      // this.flowerPetalQ3.show();
      // this.flowerPetalQ4.show();
  }
}
