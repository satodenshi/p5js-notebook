function setup() {
  createCanvas(720, 720);
  //background("#ffffff");
  noCursor();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  background(mouseY / 2, 100, 100);

  fill(360 - mouseY / 2, 100, 100);
  rect(360, 360, mouseX + 1, mouseX + 1);
}
