class FlowerPetal {
  constructor(bloom_center_x, bloom_center_y, bloom_radius, x_sign, y_sign) {
    this.p1 = {x:bloom_center_x, y:bloom_center_y - (bloom_radius * y_sign)};
    this.cp1 = {x:this.p1.x + (10 * x_sign), y:this.p1.y - (25 * y_sign)};
    this.p2 = {x:bloom_center_x + (bloom_radius * x_sign), y: bloom_center_y};
    this.cp2 = {x:this.p2.x + (25 * x_sign), y:this.p2.y - (10 * y_sign)};
  }

  update() {

  }

  show() {
      // bezier(x1, y1, x2, y2, x3, y3, x4, y4)
      bezier(this.p1.x, this.p1.y, this.cp1.x, this.cp1.y, this.cp2.x, this.cp2.y, this.p2.x, this.p2.y);  }
}
