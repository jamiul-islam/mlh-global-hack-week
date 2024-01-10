/**
 * learned about the canvas and how to draw shapes using the following video
 * reference: https://www.youtube.com/watch?v=KoWqdEACyLI
 */

// drone driving game
var line1;
var line2;
var line3;

var drone;

var isLeft;
var isRight;
var isAccelerating;

function setup() {
  createCanvas(400, 400);

  line1 = 0;
  line2 = 200;
  line3 = 400;

  drone = {
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
  rect(100, 0, 200, 400);

  //draw the road lines
  stroke(255);
  line(200, line1, 200, line1 + 75);
  line(200, line2, 200, line2 + 75);
  line(200, line3, 200, line3 + 75);

  // draw a propeller(circle) beside the drone
  fill(0);
  stroke(0);
  ellipse(drone.x - 20, 350, 30); // left-back propeller
  ellipse(drone.x + 20, 350, 30); // right-back propeller
  ellipse(drone.x - 20, 300, 30); // left-front propeller
  ellipse(drone.x + 20, 300, 30); // right-front propeller
  //draw the drone
  fill(255);
  noStroke();
  rect(drone.x - 10, 300, 20, 50);
  /**
   * draw drone name "DJI" in the middle of the drone
   * the text should be gray
   */
  fill(100);
  textSize(10);
  text("DJI", drone.x - 7.5, 320, 20, 50);

  //updating the road lines
  line1 += drone.speed;
  line2 += drone.speed;
  line3 += drone.speed;

  if (line1 >= 400) {
    line1 = -200;
  }

  if (line2 >= 400) {
    line2 = -200;
  }

  if (line3 >= 400) {
    line3 = -200;
  }

  //Move the drone
  if (isLeft) {
    drone.x -= 3;
  }

  if (isRight) {
    drone.x += 3;
  }

  //stop the drone going off of the road
  drone.x = constrain(drone.x, 100 + 10, 300 - 10);

  if (isAccelerating) {
    drone.speed *= 1.01;
  } else {
    drone.speed *= 0.99;
  }

  drone.speed = constrain(drone.speed, 1, 10);
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
