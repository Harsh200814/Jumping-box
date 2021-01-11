var music,surface1,surface2,surface3,surface4,edges,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(500,500);

  surface1=createSprite(55,500,115,25)
  surface1.shapeColor="blue";
  surface2=createSprite(185,500,115,25);
  surface2.shapeColor="yellow";
  surface3=createSprite(315,500,115,25);
  surface3.shapeColor="pink";
  surface4=createSprite(445,500,115,25);
  surface4.shapeColor="green";  
  box=createSprite((random(200,550)),50,30,30);
  box.velocityX=3;
  box.velocityY=3;
  box.shapeColor="white";
  edges=createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);
if(surface1.isTouching(box)){
box.bounceOff(surface1);
box.shapeColor="blue";
}
if(surface2.isTouching(box)){
box.velocityX=0;
box.velocityY=0;  
music.play();
box.shapeColor="yellow";}
if(surface3.isTouching(box)){
box.bounceOff(surface3);
box.shapeColor="pink";
}
if(surface4.isTouching(box)){
box.bounceOff(surface4);
box.shapeColor="green";
}  
drawSprites();
}
