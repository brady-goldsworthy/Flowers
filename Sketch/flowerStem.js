class FlowerStem {
  constructor(stem_bottom_x, stem_bottom_y, stem_top_x, stem_top_y) {
    this.cp1 = {x:stem_bottom_x - 0, y:stem_bottom_y};
    this.p1 = {x:stem_bottom_x, y:stem_bottom_y};
    this.cp2 = {x:stem_bottom_x - 0, y:stem_top_y};
    this.p2 = {x:stem_bottom_x , y:stem_top_y};
  }

  update() {

  }

  show() {
    stroke(0);
    strokeWeight(2);
    //curve (cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);
    curve (this.cp1.x, this.cp1.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.cp2.x, this.cp2.y);
  }


}
