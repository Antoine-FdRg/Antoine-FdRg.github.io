//déclaration des variables
var jeu=0;
var diff;
var smiley;
var vitessex=10;
var vitessey=10;
var mur_h,mur_b,mur_g,mur_d;
var img1,rect1,rect2,img2;
var groupe_smiley,smiley2;
var vie=20;
var test=false;
var xrect1;
var yrect1;
var xrect2;
var yrect2;
var ennemisspeed=5;
var heal,used,bonus;
var antidote=0;
var obj=25;
var imgperso;
var touchpadon=0;
var espacement=30;


function preload() {
  img1=loadImage("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fsteve.png?v=1561378226972");
  img2=loadImage("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fzombi.png?v=1566748903294");   
  img3=loadImage("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fheal2.png?v=1561378225485");
  soin=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fsoulagement.mp3?v=1571481661074")
  hit=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fhit.mp3?v=1561378781431");
  click=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fclick.mp3?v=1561235830058');
  pad=loadImage("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ftouchpad.png?v=1571085398978");
  cercle=loadImage("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpad.png?v=1571157971214");
  bulle=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fbulles.mp3?v=1571228556350");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  boutonfacile=createSprite(windowWidth/2,windowHeight/4,windowWidth/2,windowHeight/8);
  boutonfacile.shapeColor=color(0,150,0);
  boutonmoyen=createSprite(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/8);
  boutonmoyen.shapeColor=color(200,100,0);
  boutonhard=createSprite(windowWidth/2,windowHeight/4*3,windowWidth/2,windowHeight/8);
  boutonhard.shapeColor=color(150,0,0);pointeur=createSprite(mouseX, mouseY, 1 ,1 );
  pointeur=createSprite(mouseX, mouseY, 1 ,1 );
  pointeur.shapeColor=color(100,100,100);
  
  // création des murs
   mur_g=createSprite(-5,windowHeight/2,12,windowHeight);
   mur_d=createSprite(windowWidth+5,windowHeight/2,12,windowHeight);
   mur_h=createSprite(windowWidth/2,-5,windowWidth,12);
   mur_b=createSprite(windowWidth/2,windowHeight+5,windowWidth,12);
   mur_g.shapeColor=color(222, 0, 0);
   mur_d.shapeColor=color(222, 0, 0);
   mur_h.shapeColor=color(222, 0, 0);
   mur_b.shapeColor=color(222, 0, 0); 
   mur_d.immovable=true;
   mur_g.immovable=true;
   mur_h.immovable=true;
   mur_b.immovable=true;
  
   touchpad=createSprite(windowWidth/2,windowHeight/2,windowWidth/3,windowHeight/3);
   touchpad.addImage(pad);
   touchpad.scale=2;
    
   point=createSprite(windowWidth/2,windowHeight/2,windowWidth/3,windowHeight/3);
   point.addImage(cercle);
   point.scale=2;
  
   rect1=createSprite(xrect1,yrect1,windowWidth/10,windowWidth/10); //creation des rectangles
   rect1.position.x=random(60,windowWidth-30);
   rect1.position.y=random(60,windowHeight/4);
   rect1.shapeColor=color(100,100,100);
    
   rect2=createSprite(xrect2,yrect2,windowWidth/15,windowWidth/15);
   spawnnewzone();
   rect2.shapeColor=color(51, 204, 255);
   rect1.immovable=true;
   rect2.immovable=true;
   
   smiley=createSprite(windowWidth-20, windowHeight-20);
   smiley.addImage(img1);
   smiley.position.x=rect1.position.x;
   smiley.position.y=rect1.position.y;
   smiley.immovable=true;
   smiley.scale=windowWidth/500;
   
   groupe_smiley=new Group();
   for (var i=0;i < 7;i=i+1){ 
      smiley2=createSprite(random(20,windowWidth-20),random(20,windowHeight-20));
      smiley2.addImage(img2);
      smiley2.setVelocity(random(-ennemisspeed,ennemisspeed),random(-ennemisspeed,ennemisspeed));
      smiley2.mass=3;
      smiley2.scale=windowWidth/500;
      groupe_smiley.add(smiley2);
      }
  
   heal=createSprite(30,30);
   heal.position.x=random(30,windowWidth-30);
   heal.position.y=random(30,windowHeight-30);
   heal.immovable=true;
   heal.addImage(img3);
   heal.visible=false;
   bonus=0;
 }

function draw(){
  frameRate(30)
  if(jeu==0){
    menu();
  }else if (jeu==1){
    frameRate(30)
    jouer();
  }
}

function menu(){
  
  background(120, 120, 120);
  drawSprite(boutonfacile);
  drawSprite(boutonmoyen);
  drawSprite(boutonhard);
  drawSprite(pointeur);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  textAlign(CENTER);
  textSize(40)
  text("Play easy mode",windowWidth/2,windowHeight/4);
  text("Play normal mode",windowWidth/2,windowHeight/2);
  text("Play hard mode",windowWidth/2,windowHeight/4*3);
  if(mouseIsPressed && pointeur.overlap(boutonfacile) ){
      jeu=1;
      click.play();
      diff=1;
    }
  if(mouseIsPressed && pointeur.overlap(boutonmoyen) ){
      jeu=1;
      click.play();
      diff=2;
    }
  if(mouseIsPressed && pointeur.overlap(boutonhard) ){
      jeu=1;
      click.play();
      diff=3;
    }
}

function jouer() {
  background(120, 49, 14);
  resetlvl();
  if(antidote!==obj){
   drawSprite(rect2);
  }
  if(antidote==obj){
   background(38,134,9);
  for (var i = groupe_smiley.length; i--; groupe_smiley[i].addImage(img1));
  groupe_smiley.bounce(smiley);
  smiley.bounce(groupe_smiley);
  }
  if(antidote!==obj){
    smiley.bounce(groupe_smiley,degat);
    drawSprite(rect2);
  }
  drawSprites(groupe_smiley);
  drawSprite(mur_h);
  drawSprite(mur_b);
  drawSprite(mur_g);
  drawSprite(mur_d);
  drawSprite(rect1);
  drawSprite(smiley);
  drawSprite(heal);
  textSize(windowWidth/90);
  fill(255,255,255);
  if(antidote==0){
    if(smiley.position.x>windowWidth/2){
      textAlign(CENTER);
      textSize(windowHeight/60);
      text("You are here ==>", smiley.position.x-100,smiley.position.y);
      text("You have go to", smiley.position.x-100,smiley.position.y+windowHeight/50);
      text("the blue square to ", smiley.position.x-100,smiley.position.y+windowHeight/50*2);
      text("create an antidote against zombies", smiley.position.x-100,smiley.position.y+windowHeight/50*3);
      text("without touching any oh them.", smiley.position.x-100,smiley.position.y+windowHeight/50*4);
      textSize(windowHeight/65);
      fill(51, 204, 255);
      text("Touch to use a touchpad", smiley.position.x-100,smiley.position.y+windowHeight/50*5);
    }else{
      textAlign(CENTER);
      textSize(windowHeight/60);
      text("<==You are here", smiley.position.x+100,smiley.position.y);
      text("You have to go to", smiley.position.x+100,smiley.position.y+windowHeight/50);
      text("the blue square to ", smiley.position.x+100,smiley.position.y+windowHeight/50*2);
      text("create an antidote against zombies", smiley.position.x+100,smiley.position.y+windowHeight/50*3);
      text("without being touched by any of them.", smiley.position.x+100,smiley.position.y+windowHeight/50*4);
      textSize(windowHeight/65);
      fill(51, 204, 255);
      text("Touch to use a touchpad", smiley.position.x+100,smiley.position.y+windowHeight/50*5);
    }
    textSize(windowWidth/120);
  }
    textAlign(CENTER);
    textSize(windowWidth/50)
    fill(255,255,255)
    text("If you get lag, try to drop the touchpad",windowWidth/2, windowHeight/30*29.5)
    mouvement();
    groupe_smiley.bounce(mur_g);
    groupe_smiley.bounce(mur_d);
    groupe_smiley.bounce(mur_h);
    groupe_smiley.bounce(mur_b);
    groupe_smiley.bounce(groupe_smiley);
    groupe_smiley.bounce(rect1);
    groupe_smiley.bounce(rect2);
    if (bonus==1){
      groupe_smiley.bounce(heal);
    }
  
 //création de la barre de vie
  fill(300,0,0);
  rect(windowWidth/12,windowHeight/70,windowWidth/3,windowHeight/38.3);
  fill(0,300,0);
  rect(windowWidth/12,windowHeight/70,vie*windowWidth/60,windowHeight/38.3);
  fill(0,0,0);
  textSize(windowWidth/40);
  text(vie+" HP",windowWidth/8,windowHeight/30);
  if ( vie==0) {
    gameover();
  }
  changementNiveau();
  spawnBonus();
  
  if (smiley.overlap(heal) && bonus==1){
   if (vie<20){
     vie=vie+1;
     soin.play();
   }   heal.visible=false; 
   bonus=0; 
   used=1; 
  }
  calculantidote();
}

function calculantidote(){
  fill(150,150,150);
  rect(windowWidth/12*6,windowHeight/70,obj*12,windowHeight/40);
  fill(51, 204, 255);
  rect(windowWidth/12*6,windowHeight/70,antidote*12,windowHeight/40);
  fill(0,0,0);
  textSize(windowWidth/40);
  text(antidote,windowWidth/12*6.2,windowHeight/30);
}

function mouvement() {  
  if (mouseIsPressed){
    if (touchpadon==0){
      touchpadon=1;
      touchpad.position.x=mouseX;
      touchpad.position.y=mouseY;
    }else{
      drawSprite(touchpad);
      touchpad.scale=3;
      drawSprite(point);
      //if (Math.sqrt(Math.pow(mouseX)-Math.pow(touchpad.position.x))<300){
        point.position.x=mouseX;
      //}
      //if (Math.sqrt(Math.pow(mouseY)-Math.pow(touchpad.position.y))<300){
        point.position.y=mouseY;
      //}
    }
    if (mouseX<touchpad.position.x-espacement && smiley.position.x >20 ) {
      smiley.position.x=smiley.position.x-vitessex ;
    }
    if (mouseX>touchpad.position.x+espacement && smiley.position.x <width-20) {
      smiley.position.x=smiley.position.x+vitessex ;
    }
    if (mouseY<touchpad.position.y-espacement &&  smiley.position.y >20) {
      smiley.position.y=smiley.position.y-vitessey ;
     
    }
    if (mouseY>touchpad.position.y+espacement &&  smiley.position.y <height-20) {
      smiley.position.y=smiley.position.y+vitessey;
    }
  }else{
    touchpadon=0;
  }
}

function degat(){
  vie=vie-1;
  hit.play();
  smiley.position.x=rect1.position.x;
  smiley.position.y=rect1.position.y;
}


//test du contact de smiley avec le rectangle2
function changementNiveau() {
  if (smiley.overlapPoint(rect2.position.x, rect2.position.y)){
    antidote+=1;
    test=true;
    used=0;
   //si le bonus est visible et récupérable lors du passage au niveau superieur 
    if (bonus==1){ 
      heal.position.x=random(30,windowWidth-30);
      heal.position.y=random(30,windowHeight-30);
     //alors il devient invisible et irrécupérable
      heal.visible=false; //alors il devient invisible et irrécupérable
      bonus=0;
    }
  }
}


function spawnBonus(){
  if (antidote % 2 == 1 && used == 0){
     //alors il devient visible et récupérable 
    heal.visible=true;
    bonus=1;
  }
}


function resetlvl(){
   if (test==true){
      bulle.play();
      rect1.position.x=rect2.position.x;
      rect1.position.y=rect2.position.y;
      spawnnewzone();
      smiley.position.x=rect1.position.x;
      smiley.position.y=rect1.position.y;
      test=false;
      smiley2=createSprite(random(20,windowWidth-20),random(20,windowHeight-20));
      smiley2.addImage(img2);
      smiley2.setVelocity(random(-1-diff,diff+1),random(-1-diff,diff+1));
      smiley2.mass=3;
      smiley2.scale=windowWidth/500;;
      groupe_smiley.add(smiley2);    
  } 
}

function spawnnewzone(){
  rect2.position.x=random(60,windowWidth-30);
  rect2.position.y=random(60,windowHeight-windowHeight/50);
  let ecart = Math.sqrt(Math.pow(rect2.position.x-rect1.position.x, 2)+ Math.pow(rect2.position.y-rect1.position.y, 2))
  if ( ecart < windowHeight/4*diff || ecart >(windowHeight/4*diff+windowHeight/8)) {
    spawnnewzone();
    }  
}

function gameover() {
  background(0, 0, 0);
  textSize(windowWidth/20);
  fill (300,0,0);
  textAlign(CENTER);
  text("GAME OVER", windowWidth/2, windowHeight/5*2);
  
  textSize(windowWidth/50);
  text("Update web page to replay", windowWidth/2, windowHeight/5*4);
  noLoop();
}
