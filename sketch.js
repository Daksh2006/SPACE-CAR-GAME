var  form,game;
var gameState = "start";
var trex,ground;



function preload(){
 //create a trex sprite
 var trex = createSprite(400,380,20,40);
 trex = loadImage("Trex.png");
 
 //scale and position the trex
 trex.scale = 0.5;
 trex.x = 70;
 
 var ground = createSprite(200,380,400,20);                                                                                                                                                
 ground = loadImage("ground2.png");
 ground.x = ground.width/2;
 console.log(ground.width);
 
 var invisibleGround = createSprite(200,390,400,10);
 //invisibleGround.shapeColor = "black";
 invisibleGround.visible = false;
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.start();
}

function draw() {
  if(gameState === "play"){
   game.play();

   //set background to white
  background("black");
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y > 361){
    trex.velocityY = -12 ;
  }

  //add gravity
  trex.velocityY += 0.8;
  
  //console.log(trex.y);
  ground.velocityX = -4;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  //stop trex from falling down
  trex.collide(invisibleGround);

 trex.diplay();
 ground.display();
  }
}

