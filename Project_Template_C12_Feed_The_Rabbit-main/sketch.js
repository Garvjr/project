var garden,rabbit;
var gardenImg,rabbitImg;
var Apples
var Leaves
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  drop = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var select_sprites = Math.round(random(1,2));
  
if (frameCount % 80 == 0) {
  if(select_sprites == 1)
    function createApples() 
  
 }

}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
 
 
drawSprites();
} 
 
 
function createApples(){
  Leaves = createSprite(random(50,350,),40,10,10);
  Leaves.addImage(drop);
  Leaves.scale=0.1
  Leaves.velocityY=2
  Leaves.lifetime(200)
}

function createLeaves(){
  Apples = createSprite(random(50,350,),40,10,10);
  Apples.addImage(drop);
  Apples.scale=0.1
  Apples.velocityY=2
  Apples.lifetime(200)
}