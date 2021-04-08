//declaring the variables

var scene,arrow,bow;

var backgroundImg , bowImg , arrowImg;

var blueB , greenB , redB , pinkB;

var invisibleBT , invisbleBL;

var score=0;



function preload(){
  //loading Images
  
  backgroundImg = loadImage( "background0.png" );
  
  bowImg = loadImage( "bow0.png" );
  
  arrowImg = loadImage( "arrow0.png" );
  
  blueB = loadImage( "blue_balloon0.png" );
  
  redB = loadImage( "red_balloon0.png" );
  
  greenB = loadImage( "green_balloon0.png" );
  
  pinkB = loadImage( "pink_balloon0.png" );
}


function setup() {
  createCanvas(440, 440);
  
  //creating scene
  scene = createSprite(0,0,400,400);
  scene.addImage( backgroundImg  ); 
  scene.scale = 2.5;
  
  //creating bow
  bow = createSprite(390,210,15,40);
  bow.addImage(bowImg);
  bow.scale = 1;
  
  //creating arrow
  arrow = createSprite(390,220,10,10);
  arrow.addImage(arrowImg);
  arrow.scale = 0.3;
  
 
}


function draw() {

  
  //moving scene 
  scene.velocityX = -3;
  
  //reloading scene
  if(scene.x < 15){
     
     scene.x = scene.width/2
     }
  
  //moving bow and arrow with mouse
  bow.y = World.mouseY
  arrow.y=World.mouseY;
  
  
 var select_balloon = Math.round(random(1,4));
  
  if( frameCount%100===0 ){
     
     if( select_balloon === 1 ){
       redBalloon();
     }
  }
  
  
  
  if( frameCount%100===0){
    
    if(select_balloon === 2){
      blueBalloon();
      
    
  } 
  }
  
  
  if( frameCount%100===0){
    
    if(select_balloon === 3){
      greenBalloon();
      
    
  } 
  }
  
  
  if( frameCount%100===0){
    
    if(select_balloon === 4){
      pinkBalloon();
      
    
  } 
  }
  
  

  
  
  
  drawSprites();
  text( " Score : "+score,270,30 );

}

 function redBalloon(){
   
   var red = createSprite(0,Math.round(random(20 , 370),10,10));
   
   red.addImage(redB);
   red.velocityX = 3;
   red.scale = 0.1;
   red.lifetime = 115;
   
   console.log(red.y);
   
 }

 function pinkBalloon(){
   
   var pink = createSprite(0,Math.round(random(20 , 370),10,10));
   
   pink.addImage(pinkB);
   pink.velocityX = 3;
   pink.scale = 1;
   pink.lifetime = 115;

   console.log(pink.y); 
   
 }

 function blueBalloon(){
   
   var blue = createSprite(0,Math.round(random(20 , 370),10,10));
   
   blue.addImage(blueB);
   blue.velocityX = 3;
   blue.scale = 0.1;
   blue.lifetime = 115;
   
   console.log(blue.y);
   
 }

 function greenBalloon(){
   
   var green = createSprite(0,Math.round(random(20 , 370),10,10));
   
   green.addImage(greenB);
   green.velocityX = 3;
   green.scale = 0.1;
   green.lifetime = 115;
   
   console.log(green.y);
   
 }
