class FlowerTop {
  constructor(stem_top_x, stem_top_y, bloom_radius) {
    this.bloom_center_x = stem_top_x;
    this.bloom_radius = bloom_radius;
    this.bloom_center_y = stem_top_y - this.bloom_radius;

  }

  update() {
    this.flowerBloom = new FlowerBloom(this.bloom_center_x, this.bloom_center_y, this.bloom_radius);
    //First quartile
    this.flowerPetalQ1 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y - this.bloom_radius, this.bloom_radius, 1, 1);
    //Second quartile
    this.flowerPetalQ2 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y - this.bloom_radius, this.bloom_radius, -1, 1);
    //Third quartile
    this.flowerPetalQ3 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y - this.bloom_radius, this.bloom_radius, -1, -1);
    //Second quartile
    this.flowerPetalQ4 = new FlowerPetal(this.bloom_center_x, this.bloom_center_y - this.bloom_radius, this.bloom_radius, 1, -1);
  }

  show() {
      this.flowerBloom.show();
      this.flowerPetalQ1.show();
      this.flowerPetalQ2.show();
      this.flowerPetalQ3.show();
      this.flowerPetalQ4.show();
  }
}
