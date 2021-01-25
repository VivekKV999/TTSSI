const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,390,1200,10)
    ground2=new Ground(500,300,300,10)
    ground3=new Ground(900,200,300,10)

    b1=new Box(440,273,40,40)
    b2=new Box(480,273,40,40)
    b3=new Box(520,273,40,40)
    b4=new Box(560,273,40,40)
    b5=new Box(600,273,40,40)


    b6=new Box(460,233,40,40)
    b7=new Box(500,233,40,40)
    b8=new Box(540,233,40,40)
    b9=new Box(580,233,40,40)

    b11=new Box(480,192,40,40)
    b12=new Box(520,192,40,40)
    b13=new Box(560,192,40,40)
   
    b14=new Box(500,152,40,40)
    b15=new Box(540,152,40,40)

    b16=new Box(520,110,40,40)

  
   b17=new Box(860,192,40,40)
   b18=new Box(880,192,40,40)
   b19=new Box(920,192,40,40)
  
   b21=new Box(870,154,40,40)
   b22=new Box(910,154,40,40)

   b23=new Box(885,110,40,40)

   ball1=new ball(50,250,30)


   shot=new SlingShot(ball1.ball,{x:100,y:250})
    Engine.run(engine);
}
function draw() {

    

    background(230);
   ground1.display();
   ground2.display();
   ground3.display();

  

   push ()
   fill("blue")
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   fill("yellow")
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   fill("blue")
   b11.display();
   b12.display();
   b13.display();
   fill("yellow")
   b14.display();
   b15.display();
   fill("blue")
   b16.display();

   fill("blue")
   b17.display();
   b18.display();
   b19.display();
   fill("yellow")
   b21.display();
   b22.display();
   fill("blue")
   b23.display();
pop ()

   ball1.display();
   shot.display();

   

}
function keyPressed() {
	if (keyCode ===32)
		Matter . Body . setPosition (ball1.ball, {x: 100, y: 250})
		shot. attach (ball1 . ball) ;
		//chain.attach();
		}	
function mouseDragged()
{
    Matter.Body.setPosition(ball1.ball,{x:mouseX,y:mouseY} )
}
function mouseReleased()
{
  //chain=(0,{x:300,y:100});
  //0 = null
  shot.fly();

}