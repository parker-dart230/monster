let A=0;
let T=0;
let E=0;
let R=0;

function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(5, 29, 103,);
  
  strokeWeight(1);
  stroke(49, 133, 7);
  fill(49, 133, 7);
  rect(0,300,550,100);
  noFill();
  
  stroke(10);
  fill(160);
  ellipse(500,50,60,60);
  
  fill(174);
  ellipse(490,43,10,10);
  
  fill(174);
  ellipse(520,55,10,10);
  
  
  strokeWeight(1);
  stroke(10);
  fill(103, 7, 133);
  rect(R+257,85,35,75,10);
  
  strokeWeight(1);
  stroke(10);
  fill(103, 7, 133);
  ellipse(A+275,50,65,75);
  
  
  fill(247);
  ellipse(A+275,50,30,30);
  
  fill(47, 247, 7);
  ellipse(A+275,50,10,10);
  
  strokeWeight(0);
  fill(187, 237, 233,150);
  triangle(T+277,150,T+400,330,T+150,330);
  
  stroke(1);
  fill(158);
  strokeWeight(2)
  ellipse(A+275,170,180,50);
  
  
  fill(135, 62, 19);
  strokeWeight(1)
  square(30,250,65)
  
  fill(48, 20, 4);
  triangle(63,220,105,250,20,250);
  
  fill(187, 237, 233);
  ellipse(E+220,172,20,10);
  
  fill(187, 237, 233);
  ellipse(E+255,172,20,10);
  
  fill(187, 237, 233);
  ellipse(E+292,172,20,10);
  
  fill(187, 237, 233);
  ellipse(E+330,172,20,10);
  
  A = A +1;
  T = T +1; 
  E = E +1;
  R = R +1;
  
  
  
  
  
    
  
  
  
  
  
}