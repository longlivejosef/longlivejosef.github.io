let faceX = 315;
let faceY = 260;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(41, 150, 205);
  console.log(mouseX + ", " + mouseY); //output mouse location
  noStroke();
  fill(255, 213, 20);
  ellipse(300, 270, 300, 300);
  ellipse(faceX, faceY, 20, 15);

  if (mouseIsPressed){
      fill(0);
    textSize(50);
    text("oops!!", 255, 250);
   
    fill(255);
    ellipse(50, 50, 80, 80); //pop up left white eye
    ellipse(510, 510, 60, 60);//pop up right white eye
    fill(0);
    ellipse(50, 45, 30, 30); //pop up left pupil
    ellipse(510, 520, 30, 30);//pop up right pupil
   
  }
 
   push();
    fill(255);
  if (!mouseIsPressed){
    ellipse(faceX - 60, faceY - 50, 80, 80); //left eye white
 
    ellipse(faceX + 90, faceY - 10, 60, 60); //right eye white
  }
    pop();
 
    push();
  fill(0);
  if (!mouseIsPressed){
      ellipse(faceX + 90, faceY - 2, 30, 30); //right eye pupil

  ellipse(faceX - 60, faceY -58, 30, 30); //left eye pupil
  }
  pop();
 
  fill(213, 149, 28);
  arc(300, 350, 140, 100, 0, PI + QUARTER_PI, OPEN);//mouth
  fill(235, 43, 154);
  arc(290, 365, 60, 110, 0, PI + QUARTER_PI, OPEN);//tongue
}