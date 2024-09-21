function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,100,110);

  angleMode(DEGREES);
 //main
fill(255, 228, 110) ;
rect(700,120,500,570);
 //dot
 push();
 noStroke();
 fill(219, 204, 125) ;
 ellipse(755, 230, 40, 80);

 fill(219, 204, 125) ;
 ellipse(1150, 210, 30, 50);

 fill(219, 204, 125) ;
 ellipse(750, 330, 20, 40);

 fill(219, 204, 125) ;
 ellipse(800, 600, 50, 70);

 fill(219, 204, 125) ;
 ellipse(760, 530, 30, 40);

 fill(219, 204, 125) ;
 ellipse(1100, 500, 50, 70);

 fill(219, 204, 125) ;
 ellipse(1140, 580, 30, 40);
 pop();

//left eye
 push();
 fill(252, 250, 240) ;
 strokeWeight(5);
 ellipse(870, 290, 160, 160);
 

 fill(158, 232, 225) ;
 ellipse(880, 290, 60, 60);
 
 fill(42, 46, 46) ;
 ellipse(880, 290, 30, 30);

 line(870, 210, 870, 180);

 //right eye
 fill(252, 250, 240) ;
 ellipse(1030, 290, 160, 160);

 line(1030, 210,1030, 180);

 fill(158, 232, 225) ;
 ellipse(1020, 290, 60, 60);
  
 fill(42, 46, 46) ;
 ellipse(1020, 290, 30, 30);
 
 //nose
 fill(255, 228, 110) ;
 ellipse(950, 360, 70, 80);

 //mouse
 fill(77, 46, 33) ;
 rect(820,380,270,230,0,0,100,100);
 //tongue
 fill(176, 69, 53)
 arc(955, 606, 110, 110, 180, 360);

 //left t
 fill(250, 249, 240) ;
 push();
 translate(900, 380);
 rotate(10);
 rect(0,0,40,50,0,0,0,0);
 pop();

 //right t
 fill(250, 249, 240) ;
 push();
 translate(960,380);
 rotate(-10);
 rect(0,7,40,50,0,0,0,0);
 pop();
 
 pop();


}












function draw() {
}
