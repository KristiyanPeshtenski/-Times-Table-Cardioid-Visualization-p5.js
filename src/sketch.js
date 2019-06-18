// Time table
// draw N number of points in a circle and number it
// Multiply each of the numbers by value M 
// then connect the multiplied number with the resulted value 

let r;
let factor = 0;
let rgbValue = 0;
let incrementRgb = true;
let changeRgbIndex = false;
let rgbIndex = 0;
let rgbColor;

function setup() {
  createCanvas(640, 640);
  r = width / 2 - 16; 
}

function draw() {
  background(0);
  
  const totalPoints = 200 //parseInt(map(mouseX, 0, width, 0, 200));
  
  factor += 0.01;

  translate(width/2, height/2);
  
  if(rgbIndex == 0) {
    rgbColor = color(rgbValue, 255, 255);
  }
  else if (rgbIndex == 1) {
    rgbColor = color(255, rgbValue ,255);
  }
  else {
    color(255, 255, rgbValue);
  }

  stroke(rgbColor);
  noFill();
  circle(0, 0, r * 2);

  changergbValue();

  for(let i = 0; i < totalPoints; i++){
    let vector = getVector(i, totalPoints);
    fill(rgbColor)
    circle(vector.x, vector.y, 16);
  }

  for(let i = 0; i < totalPoints; i++){
    let a = getVector(i, totalPoints);
    let b = getVector(i * factor, totalPoints);
    line(a.x, a.y, b.x, b.y);
  }
}

function getVector(index, totalPoints) {
  let angle = map(index % totalPoints, 0, totalPoints, 0, TWO_PI);
  let v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function changergbValue(){
  if(incrementRgb) {
    rgbValue += 1;
    if (rgbValue == 255) {
      incrementRgb = false;
    }
  }
  else {
    rgbValue -= 1;
    if(rgbValue == 0) {
      incrementRgb = true;
      if (rgbIndex <= 2) {
        rgbIndex++;
      }
      else {
        rgbIndex = 0;
      }
    }
  }
}