
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var roof,chain

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      bob1 = new Bob(150,600)
      bob2 = new Bob(200,600)
	  bob2 = new Bob(250,600)
	  bob2 = new Bob(300,600)
	  bob2 = new Bob(350,600)
	  roof = new Ground(200,350)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.diaplay();
  roof.display();
  
  drawSprites();
 
}



