class Flower {
  constructor(x_middle, y_middle) {
      this.stem_bottom_x = x_middle;
      this.stem_bottom_y = y_middle;
      this.flower_height = 100;
      this.stem_top_x = x_middle;
      this.stem_top_y = y_middle - this.flower_height;
      //TODO Decide stem radius off of canvas size
      this.bloom_radius = 15;
  }

  update() {
    this.flowerStem = new FlowerStem(this.stem_bottom_x, this.stem_bottom_y, this.stem_top_x, this.stem_top_y);
    this.flowerTop = new FlowerTop(this.stem_top_x, this.stem_top_y, this.bloom_radius);
  }

  show() {
    this.flowerStem.update();
    this.flowerStem.show();

    this.flowerTop.update();
    this.flowerTop.show();
  }
}
