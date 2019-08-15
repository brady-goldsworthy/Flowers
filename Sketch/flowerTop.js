//import mathjs from "mathjs"

class FlowerTop {
  constructor(stem_top_x, stem_top_y, bloom_radius) {
    this.bloom_center_x = stem_top_x;
    this.bloom_radius = bloom_radius;
    this.bloom_center_y = stem_top_y - this.bloom_radius;
    this.numPetals = 5;
    console.log("Theta:" + this.theta);

    this.petalArray = this.growPetals(this.numPetals);
  }

  update() {
    this.flowerBloom = new FlowerBloom(this.bloom_center_x, this.bloom_center_y, this.bloom_radius);

  }

  growPetals(numPetals) {
    let petalArray = new Array();

    let increment = 360/numPetals;

    let baseTheta = 0;
    let newTheta = increment;
    for (var i = 0; i < numPetals; i++) {
      petalArray.push(new FlowerPetal(this.bloom_center_x, this.bloom_center_y, this.bloom_radius, radians(baseTheta), radians(newTheta)));
      baseTheta += increment;
      newTheta += increment;
    }

    return petalArray;
  }

  show() {
      for (var i = 0; i < this.petalArray.length; i++) {
        this.petalArray[i].show();
      }

      this.flowerBloom.show();
  }
}
