// Write comments

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  fill('#BB30DA9E');
}

function draw() {
  let x = width*0.5*cos(0.01*frameCount);
  let y = height*0.5*sin(0.01*frameCount);
  console.log(x);
  circle(width/2 + x, height/2 + y, height/16);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
