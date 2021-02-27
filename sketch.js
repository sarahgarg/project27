
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=  new bob(200,500,30);
bob2=  new bob(260,500,30);
bob3=  new bob(320,500,30);
bob4=  new bob(380,500,30);
bob5=  new bob(440,500,30);

roofbody = new roof(200,200,350,20);
World.add(world,roofbody);

rope1= new rope(bob1.body,roofbody.body,-120,0);
World.add(world,rope1);
rope2= new rope(bob2.body,roofbody.body,-60,0);
World.add(world,rope2);
rope3= new rope(bob3.body,roofbody.body,10,0);
World.add(world,rope3);
rope4= new rope(bob4.body,roofbody.body,80,0);
World.add(world,rope4);
rope5= new rope(bob5.body,roofbody.body,140,0);
World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("YELLOW");

 
  roofbody.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  drawSprites();
 
}
function keyPressed()
{
  if (keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-750,y:0});
  }
}



