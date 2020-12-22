var bullet,wall ; 
var thickness,speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,57);

 bullet =  createSprite(50,200,50,50);
 bullet.shapeColor = color(0,0,0);
 
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "white";
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width ; 
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ; 
  }
return false ; 
}

function draw() {
  background(80,80,80); 
  bullet.velocityX = speed ;  
if(hasCollided(bullet,wall)) {
bullet.velocityX=0;

 
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

if(damage>50) {
  bullet.shapeColor = color(255,0,0);
  bullet.velocityX=0;

}
if(damage<50) { 
  bullet.shapeColor = color(0,255,0);
  bullet.velocityX=0;
}

}

drawSprites();
}