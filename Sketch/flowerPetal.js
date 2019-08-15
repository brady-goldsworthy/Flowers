class FlowerPetal {
  constructor(bloomCenterX, bloomCenterY, bloomRadius, baseTheta, newTheta) {
    this.baseVector = this.rotateVector(bloomRadius, baseTheta);
    this.baseVectorCoords = this.getVectorCoords(this.baseVector);
    console.log("Base Vector Coordinates: " + this.baseVectorCoords);

    this.newVector = this.rotateVector(bloomRadius, newTheta);
    this.newVectorCoords = this.getVectorCoords(this.newVector);
    console.log("Rotated Vector Coordinates: " + this.newVectorCoords);

    this.scalar = 3;

    this.p1 = {x: bloomCenterX + this.baseVectorCoords[0], y: bloomCenterY + this.baseVectorCoords[1]};
    this.p2 = {x: bloomCenterX + this.newVectorCoords[0], y: bloomCenterY + this.newVectorCoords[1]};
    this.cp1 = {x: bloomCenterX + (this.baseVectorCoords[0] * this.scalar), y: bloomCenterY + (this.baseVectorCoords[1] * this.scalar)};
    this.cp2 = {x: bloomCenterX + (this.newVectorCoords[0] * this.scalar), y: bloomCenterY + (this.newVectorCoords[1] * this.scalar)};

    console.log("P1: " + this.p1.x + " ----- " + this.p1.y);


  }

  update() {

  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255);
    bezier(this.p1.x, this.p1.y, this.cp1.x, this.cp1.y, this.cp2.x, this.cp2.y, this.p2.x, this.p2.y);
  }

  rotateVector(bloomRadius, theta) {
    let originVector = math.matrix([[(1 * bloomRadius)],[(0 * bloomRadius)]]);
    let rotationMatrix = math.matrix([[cos(theta), (-1 * sin(theta))], [sin(theta), cos(theta)]]);

    return math.multiply(rotationMatrix, originVector);
  }

  getVectorCoords(vector) {
    var vectorCoords = new Array();
    vector.forEach(function (value, index, matrix) {
        //console.log('value:', value, 'index:', index);
        vectorCoords.push(value);
    })

    return vectorCoords;
  }

}
