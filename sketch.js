var happyimg,saddog;
var dog,Happydog,foodS,database,foodstock;

function preload()
{
	saddog=loadImage( "dogImg.png");
  happyimg=loadImage("dogImg1.png");
  
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage(saddog);
  dog.scale=0.25
 
   database=firebase.database();
   foodStock=database.ref("dog/food")
   foodStock.on("value",readStock,showError)
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
WriteStock(foodS);

}
fill(255)
 textSize(15);
 text("Note: Press UP_ARROW key to feed Drago milk!!",100,30) 
text("Food remaining : "+foodS,150,150)

drawSprites();
}
function readStock(data){
 
  foodS=data.val();
  console.log(foodS)
}
function WriteStock(x){
  if(x<=0){
    x=0
   }
 else{
    x=x-1
    database.ref('dog').update({
      food:x
     })
     dog.addImage(happyimg);
  } 
  
}
function showError(){
  console.log("error reading data")
  }


