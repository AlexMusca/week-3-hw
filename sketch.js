var x = 50;
var y = 50;
var d = 50;
var s = 50;

function setup() {
  createCanvas(800, 400);
  background(208)
  strokeWeight(4);
}

function draw() {
  fill(155);
  rect(x, y, s, s);
  rect(4*x, y, 2*s, 2*s);
  rect(8*x, y, 4*s, 4*s);

}
