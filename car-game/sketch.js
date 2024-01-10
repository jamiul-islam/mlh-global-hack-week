/**
 * learned about the canvas and how to draw shapes using the following video
 * reference: https://www.youtube.com/watch?v=KoWqdEACyLI
 */

// car driving game
var line1;
var line2;
var line3;

var car;

var isLeft;
var isRight;
var isAccelerating;

function setup() {
  createCanvas(400, 400);

  line1 = 0;
  line2 = 200;
  line3 = 400;

  car = {
    x: 200,
    speed: 1,
  };

  isLeft = false;
  isRight = false;
  isAccelerating = false;
}

function draw() {
  background(0);

  //draw the tarmac
  fill(100);
  noStroke();
  rect(100, 0, 250, 300);

  //draw the road lines
  stroke(255);
  line(200, line1, 200, line1 + 75);
  line(200, line2, 200, line2 + 75);
  line(200, line3, 200, line3 + 75);

  //draw the car
  fill(255, 0, 0);
  noStroke();
  rect(car.x - 10, 300, 20, 50);

  //updating the road lines
  line1 += car.speed;
  line2 += car.speed;
  line3 += car.speed;

  if (line1 >= 400) {
    line1 = -200;
  }

  if (line2 >= 400) {
    line2 = -200;
  }

  if (line3 >= 400) {
    line3 = -200;
  }

  //Move the car
  if (isLeft) {
    car.x -= 3;
  }

  if (isRight) {
    car.x += 3;
  }

  //stop the car going off of the road
  car.x = constrain(car.x, 100 + 10, 300 - 10);

  if (isAccelerating) {
    car.speed *= 1.01;
  } else {
    car.speed *= 0.99;
  }

  car.speed = constrain(car.speed, 1, 10);
}

function keyPressed() {
  console.log(key);
  if (key == "a") {
    isLeft = true;
  } else if (key == "d") {
    isRight = true;
  }

  if (key == "w") {
    isAccelerating = true;
  }

  console.log(isLeft, isRight, isAccelerating);
}

function keyReleased() {
  isLeft = false;
  isRight = false;
  isAccelerating = false;
}
