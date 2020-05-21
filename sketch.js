var helicopterIMG, helicopterSprite, packageSprite,groundSprite,packageIMG,rect1Sprite,rect2Sprite,rect3Sprite;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)

    rect2Sprite=createSprite(460,625,20,100);
	rect2Sprite.shapeColor="red";
	rect3Sprite=createSprite(360,625,20,100);
	rect3Sprite.shapeColor="red";	
	rect1Sprite=createSprite(width/2,height-35,100,20);
	rect1Sprite.shapeColor="red";
   


	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { restitution:0,isStatic:true});
	World.add(world, packageBody);
	
	rect1 = Bodies.rectangle(width/2,height-35,100,20 , {isStatic:true} );
	World.add(world, rect1);
	rect2 = Bodies.rectangle(460,625,20,100 , {isStatic:true} );
	World.add(world, rect2); 
	rect3 = Bodies.rectangle(360,625,20,100, {isStatic:true} );
	World.add(world, rect3);
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



