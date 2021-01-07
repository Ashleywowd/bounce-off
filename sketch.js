var square1, square2



function setup()
 {
  createCanvas(800,400);
 square1 =createSprite(100, 200, 50, 50);
 square2= createSprite(400,200,50,50);

 square1.shapeColor="green";
 square2.shapeColor="green";

 square1.velocityX= 2;
 square2.velocityX= -4;

}

function draw()
 {
  background(0);  
 
  if(square1.x-square2.x < square1.width/2 + square2.width/2 && 
    square2.x-square1.x < square1.width/2 + square2.width/2 )
    {
      square1.shapeColor="yellow";
      square2.shapeColor="yellow";
      square1.velocityX = square1.velocityX * (-1)
      square2.velocityX = square2.velocityX * (-1)
    }
 
    if(square1.y-square2.y < square1.height/2 + square2.height/2 && 
      square2.y-square1.y < square1.height/2 + square2.height/2 )
      {
        square1.velocityY = square1.velocityY * (-1)
        square2.velocityY = square2.velocityY * (-1)
      }
   
 
  drawSprites();
}