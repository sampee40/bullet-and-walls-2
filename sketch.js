var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);

   bullet = createSprite(50,200,70,50);
  wall= createSprite(1200,200,thickness,height/2);
  
  bullet.shapeColor="orange";
wall.shapeColor=(80,80,80);
}

function draw() {
  
  background(0);
 
  speed= random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;

  function hasCollided(bullet,wall)
  {
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;

  }

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
  bullet.velocityX=speed;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  
  if(damage>10)
  {
  bullet.shapeColor=color(255,0,0);
  }
  else if(damage<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
 
  drawSprites();
}
}