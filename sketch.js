var groundsprite;
var coinimage;
var coinsprite;
var marioimage;
var mariosprite;
var ob1, ob2, ob3;
var obsprite;
function preload() {
  marioimage = loadAnimation("Capture1.png", "Capture3.png", "Capture4.png");
  coinimage = loadImage("coin.png");
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
}

function setup() {
  createCanvas(600, 200);
  mariosprite = createSprite(50, 150, 10, 10);
  mariosprite.addAnimation("marioimage", marioimage);
  mariosprite.scale = 0.5;

  groundsprite = createSprite(300, 190, 600, 10);
  score = 0;
}

function draw() {
  background("blue");
  textSize(20);
  fill(255);
  text("Score: " + score, 500, 40);
  spawnCoin();
  spawnObstacles();
  if (keyDown("space")) 
  {
    mariosprite.velocityY = -10;
  }
 
  mariosprite.velocityY=mariosprite.velocityY+1
  mariosprite.collide(groundsprite)
  drawSprites();
}

function spawnCoin() {
  if (frameCount % 60 == 0) {
    coinsprite = createSprite(600, 20, 10, 10);
    coinsprite.addImage("coinimage", coinimage);
    coinsprite.scale = 0.2;
    coinsprite.velocityX = -5;
  }
}

function spawnObstacles() {
  if (frameCount % 60 == 0) {
    obsprite = createSprite(600, 165, 10, 10);
    obsprite.scale = 0.2;
    obsprite.velocityX = -5;
    var r = Math.round(random(1, 3));
    switch (r) {
      case 1:
        obsprite.addImage(ob1);
        break;
      case 2:
        obsprite.addImage(ob2);
        break;
      case 3:
        obsprite.addImage(ob3);
        break;
    }
  }
}
