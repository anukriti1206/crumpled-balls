
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var left,bottom,right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,20);
	ground = new Ground(400,670,800,20);

	left = new DustbinParts(550,610,20,100);
    bottom = new DustbinParts(650,650,180,20);
	right = new DustbinParts(750,610,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  left.display();
  right.display();
  bottom.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}


