var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("ghost-standing.png");

}

function setup(){
  
    createCanvas(600,600);
    
    tower = createSprite(300,300);
    tower.addImage("tower",towerImg);
    tower.velocityY = 2;
  
    doorsGroup = new Group();
    climbersGroup = new Group();
    invisibleBlockGroup = new Group();
  
    ghost = createSprite(200,200,50,50);
    ghost.scale = 0.3;
    ghost.addImage("ghost", ghostImg);
}

function draw(){
  
background(0);

    if(gameState === PLAY){

    if(tower.y > 400){
        tower.y = 300
}

    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;
}

    if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3;
}

    if(keyDown("space")){
    ghost.velocityY = -3;
}

    ghost.velocityY = ghost.velocityY + 0.8
}

    if(gameState === END){

        if(climbersGroup.isTouching(ghost)){
            ghost.velocityY = 0;
}
      
        if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
            ghost.destroy();
            
        //     doorsGroup.setLifetimeEach(-1);
          //   climbersGroup.setLifetimeEach(-1);
     
            // doorssGroup.setVelocityXEach(0);
             //climbersGroup.setVelocityXEach(0);  

            text("Game Over",500,50);
}
}
  
spawnDoors();
drawSprites();

camera.position.x = 300;
camera.position.y = ghost.y;

}

function spawnDoors() {
  
//write code here to spawn the doors in the tower
  
    if (frameCount % 240 === 0) {
        var door = createSprite(200, -50);
        door.addImage(doorImg);
  
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
  
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  
    door.x = Math.round(random(120,400));
    door.velocityY = 2;
  
    climber.x = door.x;
    climber.velocityY = 2;
  
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 2;
  
//assign lifetime to the variable
  
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
  
//add each door to the group
  
    doorsGroup.add(door);
    climbersGroup.add(climber);
  
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  
    ghost.depth = door.depth;
    ghost.depth +=1;

}
}
