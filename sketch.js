var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var left,bottom,right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5;

	//Create a Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPosition=width/2-100;
	boxY=610;

	left=createSprite(boxPosition,boxY,20,100);
	left.shapeColor=color(253,0,0);
	left= Bodies.rectangle(boxPosition+20,boxY,20,100 , {isStatic:true} );
 	World.add(world,left);

	bottom=createSprite(boxPosition+100, boxY+40,200,20);
	bottom.shapeColor=color(253,0,0);
	bottom = Bodies.rectangle(boxPosition+100, boxY+20, width, 10 , {isStatic:true} );
 	World.add(world,bottom);

	right=createSprite(boxPosition+200,boxY,20,100);
	right.shapeColor=color(253,0,0);
	right = Bodies.rectangle(boxPosition+120,boxY+60,20,100 , {isStatic:true} );
	World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



