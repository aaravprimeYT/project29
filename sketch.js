
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimg,boyhand;
var tree,treeimg;

function preload()
{
  boyimg = loadImage("boy.png");
  treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;

  tree = createSprite(650,490,treeimg.width,treeimg.height);
  tree.addImage(treeimg);

  groundSprite=createSprite(width/2, 690, width,10);
  groundSprite.shapeColor=color(255,255,0);
  
  ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true});
  World.add(world, ground);

  stone = new Stone(78,568,25);


  boy = createSprite(130,625,100,100);
  boyhand = createSprite(80,570,1,1);
  boy.addImage(boyimg);
  boy.scale = 0.1;

  
  

	//Create the Bodies Here.
  mango1 = new Mango(650,334,50);
  mango2 = new Mango(596,445,50);
  mango3 = new Mango(794,437,50);
  mango4 = new Mango(700,435,50);
  mango5 = new Mango(705,360,50);
  mango6 = new Mango(630,385,50);
  mango7 = new Mango(530,415,50);
  mango8 = new Mango(735,405,50);
  mango9 = new Mango(750,445,50);
  mango10 = new Mango(660,400,50);
  mango11 = new Mango(590,340,50);
  mango12 = new Mango(545,460,50);
  string = new SlingShot(stone.body,boyhand);

  Engine.run(engine);
  
 
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  string.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  boyhand.visible = false;

  
  text(mouseX + ":" + mouseY,350,455);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}
function keyPressed() {
  if (keyCode === 32) {
      string.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if (distance<=lmango.radius+lstone.radius) {
    Matter.Body.setStatic(lmango.body,false);
  }
}

