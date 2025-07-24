let stepX;
let stepY;

function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  colorMode(HSB, width, height, 100);

  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      noStroke();
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}
