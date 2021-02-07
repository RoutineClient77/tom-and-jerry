var cat, mouse;
var garden, gardenImg; 
var cat1, cat2, cat3;
var mouse1, mouse2, mouse3;


function preload() {
    cat1.loadImage("cat1.png");
    cat2.loadAnimation("cat2.png" , "cat3.png");
    cat3.loadImage("cat4.png");

    mouse1.loadImage("mouse1.png");
    mouse2.loadAnimation("mouse2.png" , "mouse3.png");
    mouse3.loadImage("mouse4.png");

    gardenImg.loadImage("garden.png");





}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(150,150,10,10);
    cat.addImage(cat1);

    mouse = createSprite(850,850,10,10);
    cat.addImage(mouse1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.VELOCITYx = -5;
      cat.addAnimation("catRunning", cat2);
      cat.changeAnimation("catRunning");
  }


}
