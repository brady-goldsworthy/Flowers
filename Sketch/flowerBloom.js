class FlowerBloom {
  constructor(stem_top_x, stem_top_y, bloom_radius) {
      this.bloom_radius = bloom_radius;
      this.bloom_center_x = stem_top_x;
      this.bloom_center_y = stem_top_y;
  }

  update() {

  }

  show() {
      stroke(0);
      strokeWeight(2);
      noFill();
      circle(this.bloom_center_x, this.bloom_center_y, this.bloom_radius * 2);
  }
}
