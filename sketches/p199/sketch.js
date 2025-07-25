let segmentCount = 360;
let radius = 300;

function setup() {
  createCanvas(800, 800);
  //background("#ffffff");
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  let angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);
  for (let angle = 0; angle <= 360; angle += angleStep) {
    let vx = width / 2 + cos(radians(angle)) * radius;
    let vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }
  endShape();
  fill(0);
  text("please type a number from 1 to 5", 10, 20);
  text("segmentCount = " + segmentCount, 10, 30);
}

function keyPressed() {
  switch (key) {
    case "1":
      segmentCount = 360;
      break;
    case "2":
      segmentCount = 45;
      break;
    case "3":
      segmentCount = 24;
      break;
    case "4":
      segmentCount = 12;
      break;
    case "5":
      segmentCount = 6;
      break;
  }
}
