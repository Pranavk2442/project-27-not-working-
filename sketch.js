
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1;
var bob2;
var bob3;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new Roof(400,100,600,60);
	bob1=new Bob(200,500,130);
	bob2=new Bob(325,500,130);
	bob3=new Bob(450,500,130);
	bob4=new Bob(575,500,130);
	rope1=new Rope(bob1.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  drawSprites();
 
}



