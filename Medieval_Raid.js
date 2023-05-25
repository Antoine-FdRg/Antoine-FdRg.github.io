var jeu=0                                 //sprite.setCollider

var lvl=1; ///////////////////////////////////////////////////////////////////////////
var nbrpablo;
var vagueset=false;

var xp=0;
var xp_lvl=[0,10,20,30,40,50];
var xplvl=1;

var vitj = 3;
var isjump= false;
var isjackattack=false;
var chronoattackjack=0;
var chronoanimjack=12;
var pasjack=1;
var direcjack=2;
var armejack;
var sonepee;
var cadencejack=45;
var degatsjack;
var pvjack=100;
var shieldok=true;
var coupdepied;
var dgtpied=3;
var chronopied=0;
var timestun=60;
var flecherepost=false;

var cadenceep=90;
var vit = 2;

var chronoanimepeisteA=12;
var pasepeisteA=1;
var chronoattackA=0;
var isAattack=false;
var pvA=50;
var lvlepA;
var direcA;
var degatsA;
var cadenceA;
var rangeattackA=false;
var isA=false;
var Astun=false;
var chronoAstun;

var chronoanimepeisteB=12;
var pasepeisteB=1;
var chronoattackB=0;
var isBattack=false;
var pvB=150;
var pvBmax=150;
var lvlepB;
var direcB;
var degatsB;
var cadenceB;
var rangeattackB=false;
var isB=false;
var Bstun=false;
var chronoBstun;
var shieldB=false;
var spawnsbire=0;

var direcflecheA;
var vitfleche=15;
var isflecheA;

var vitarcher=1.5;
var rangearcher=550;
var chronoanimarcherA=12;
var pasarcherA=2;
var chronotirA=0;
var isarcherAattack=false;
var pvarcherA=50;
var direcarcherA=2;
var degatsarcherA=25;
var cadencearcherA=140;
var rangeattackarcherA=false;
var isarcherA=false;
var archerAstun=false;
var chronoarcherAstun;

var keyz, keyq, keys, keyd, keyk, keyl;

var degats=["0","20","30","40"];

function preload(){
jack1=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack1.png?v=1567586957881');
jack2=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack2.png?v=1567586958057');
jack11=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack11.png?v=1567600668269');
jack12=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack12.png?v=1567600668481');
jack21=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack21.png?v=1567586958705');
jack31=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fjack31.png?v=1567600668034')
fond=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffond.png?v=1566749301436');
  
click=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fclick.mp3?v=1561235830058');
coupshield=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoup_bouclier.mp3?v=1567589990207');
mort=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcri_mort.mp3?v=1567589990992");
pied=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoupdepied.mp3?v=1567589991237");
coupepee1=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoupepee1.mp3?v=1567591673845");
coupepee2=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoupepee2.mp3?v=1567591673435");
coupepee3=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoupepee3.mp3?v=1567591674234");
sonjack=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fsonjack.mp3?v=1567600291256");
  
ep11=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste1.png?v=1567586953526');
ep12=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste2.png?v=1567586952533');
ep13=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste11.png?v=1567586953816');
ep14=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste12.png?v=1567586955638');
ep15=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun1.png?v=1567586956086');
ep16=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun2.png?v=1567586956372');
  
ep21=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste3.png?v=1567586953994');
ep22=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste4.png?v=1567586953188');
ep23=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste31.png?v=1567586955009');
ep24=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste32.png?v=1567586953716');
ep25=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun3.png?v=1567586956650');
ep26=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun4.png?v=1567586956901');

ep31=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste5.png?v=1567586954820');
ep32=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste6.png?v=1567586953356');
ep33=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste51.png?v=1567586955528');
ep34=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste52.png?v=1567586955171');
ep35=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun5.png?v=1567586957016');
ep36=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeistestun6.png?v=1567586957390');
ep0=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fepeiste0.png?v=1567586954248');

arrow=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffleche.png?v=1566749298393');
archer1=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcher1.png?v=1567586955809');
archer2=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcher2.png?v=1567586955341');
archer11=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcher11.png?v=1567586951794');
archer12=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcher12.png?v=1567586952679');
archer13=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcher13.png?v=1567586952360');
archerstun1=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcherstun1.png?v=1567586952188');
archerstun2=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Farcherstun2.png?v=1567586952877')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  pointeur=createSprite(mouseX, mouseY, 1 ,1 );
  pointeur.shapeColor=color(100,100,100);
  bouton=createSprite(windowWidth/2,windowHeight/2,windowWidth/6,windowHeight/6);
  bouton.shapeColor=color(244,126,19);
  
  jack=createSprite(windowWidth/5,windowHeight/5*3);
  jack.addImage(jack1);
  jack.immovable=true;
  jack.scale=1.25;

  flecheA=createSprite(windowWidth,windowHeight);
  vitfleche=15;
  flecheA.mirrorX(1);
  flecheA.immovable=true;
  
  boutonepee=createSprite(windowWidth/5.5,windowHeight/8*6.1,windowWidth/10,windowHeight/3.5);
  boutonepee.shapeColor=color(140,160,140);
  
}


function draw() {
  if(jeu==0){
    menu();
  }
  if (jeu==1){
    jouer();
    fill(0,0,0);
    textSize(20);
    //text("Bouclier levé : " + isshield, windowWidth/50*3,windowHeight/30*11);
    //text(direcjack + " " + direcB, windowWidth/50*3,windowHeight/30*12);
  }
  if(pvjack>1){
  fill(0,0,0);
  textSize(17)
  textAlign(LEFT);
  text("Move : Q, D", windowWidth/50,windowHeight/30*5);
  text("Jump : Z", windowWidth/50,windowHeight/30*6);
  text("Shield : S", windowWidth/50,windowHeight/30*7);
  text("Attack : K", windowWidth/50,windowHeight/30*8);
  text("Kick : L", windowWidth/50,windowHeight/30*9);
  }
  
  if(pvjack<1){
    textAlign(CENTER);
    fill(100,0,0);
    textSize(100);
    text("Game Over!",windowWidth/2,windowHeight/4);
  }
}

function menu(){
  background(fond);
  drawSprite(bouton);
  drawSprite(pointeur);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  textAlign(CENTER);
  textSize(50);
  fill(0,0,0);
  text('JOUER',windowWidth/2,windowHeight/2);
  
  if(mouseIsPressed && pointeur.overlap(bouton) || (keyIsDown(32)) ){
    jeu=1;
    click.play();
  }
}

function jouer(){
  background(fond);
  if(pvjack>0){
    drawSprite(jack);
  }
  textSize(30);
  textAlign(CENTER);
  text('Level ' + lvl,windowWidth/2,windowHeight/20);
  
  armejack=1;
  degatsjack=degats[armejack];
  
  if(vagueset==false){
    setupvague()
  }
  if(pvjack>0){
    mouvement();
    jackattaque();
    jackshield();
    jackpied();
    calculpvjack();
    calculxp();
  }
  if(isA==true){
    drawSprite(epeisteA);
    mouvementA();
    attaqueA();
    calculpvA();
    calculstunA();
    epeisteA.overlap(jack,degatA);
    epeisteA.overlap(jack,stunA);
    jack.overlap(epeisteA,degatjackA);
  }
  if(isB==true){
    drawSprite(epeisteB);
    mouvementB();
    attaqueB();
    calculpvB();
    calculstunB();
    epeisteB.overlap(jack,degatB);
    epeisteB.overlap(jack,stunB);
    jack.overlap(epeisteB,degatjackB);
  }
  if(isarcherA==true){
    drawSprite(archerA);
    mouvementaA();
    attaqueaA();
    calculpvaA();
    calculstunaA();
    archerA.overlap(jack,degataA);
    archerA.overlap(jack,stunaA);
  }
  if(isflecheA==true){
    drawSprite(flecheA);
    calculflecheA();
  }else if (isflecheA==false){
    flecheA.remove();
  }
  
  if(nbrpablo==0){
    //shop();
  }

   endlvl();
}


function setupvague(){
  if(lvl==1){ // 1 ep fer
    nbrpablo=1;
    lvlepA=1;
    spawnA(); 
    pvA=50;
    vagueset=true;
  }
  if(lvl==2){ // 2 ep fer
    nbrpablo=2;
    lvlepA=1;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==3){ // 1 ep fer + 1 ep bronze
    nbrpablo=2;
    lvlepA=1;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==4){ // 2 ep bronze
    nbrpablo=2;
    lvlepA=2;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==5){ // boss ep (150 pv) + ep1 + ep 1 +ep 2
    nbrpablo=4;
    lvlepA=1;
    lvlepB=1;
    spawnB(); 
    pvB=150;
    pvBmax=150;
    vagueset=true;
  }
  if(lvl==6){ // 1 ep bronze + 1 ep acier
    nbrpablo=2;
    lvlepA=2;
    spawnA(); 
    pvA=50;
    vagueset=true;
  }
  if(lvl==7){ // 2 ep acier
    nbrpablo=2;
    lvlepA=3;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==8){ // 1 ep fer + 1 ar
    nbrpablo=2;
    lvlepA=1;
    pvA=50
    spawnA();
    pvarcherA=50;
    spawnaA();
    vagueset=true
  }
  if(lvl==9){ // 2 ep fer + 1 ar
    nbrpablo=3;
    lvlepA=1;
    pvA=50;
    spawnA();
    vagueset=true
  }
  if(lvl==10){ // boss ep (150 pv) + ep1 + ep 1 +ep 2
    nbrpablo=5;
    lvlepA=1;
    lvlepB=1;
    spawnB(); 
    pvB=200;
    pvBmax=200;
    vagueset=true;
    
  }if(lvl==11){ // 1 ep bronze + 1 ep fer + 1 ar
    nbrpablo=3;
    lvlepA=2;
    spawnA(); 
    pvA=50;
    vagueset=true;
  }
  if(lvl==12){ // 1 ep acier + ar
    nbrpablo=2;
    lvlepA=3;
    spawnA();
    pvA=50;
    spawnaA();
    pvarcherA=50;
    vagueset=true
  }
  if(lvl==13){ // 2 ep bronze + 1 ar
    nbrpablo=3;
    lvlepA=2;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==14){ // 1 ep bronze + 1 ep acier + 1 ar
    nbrpablo=3;
    lvlepA=2;
    spawnA();
    pvA=50;
    vagueset=true
  }
  if(lvl==15){ // boss ep (250 pv) + ep1 + ep 1 +ep 2
    nbrpablo=5;
    lvlepA=1;
    lvlepB=2;
    spawnB(); 
    pvB=250;
    pvBmax=250;
    vagueset=true;
  }
  if(lvl==16){ 
    textSize((50))
    text("Well played! More level will be available soon ;)",windowWidth/2,windowHeight/2);
    noLoop();
  }
}




function spawnA(){
  if(isA==false){
    epeisteA=createSprite(windowWidth+50,windowHeight/5*3);
    if(lvlepA==1){
      epeisteA.addImage(ep11);
    }else if (lvlepA==2){
      epeisteA.addImage(ep21);
    }else{
      epeisteA.addImage(ep31);
    }
    epeisteA.immovable=true;
    degatsA=degats[lvlepA];
    cadenceA=cadenceep;
    isA=true;
    epeisteA.scale=1.25;
  }
}

function spawnB(){
  if(isB==false){
    epeisteB=createSprite(windowWidth+50,windowHeight/5*3);
    if(lvlepB==1){
      epeisteB.addImage(ep11);
    }else if (lvlepB==2){
      epeisteB.addImage(ep21);
    }else{
      epeisteB.addImage(ep31);
    }
    epeisteB.immovable=true;
    degatsB=degats[lvlepB];
    cadenceB=cadenceep;
    epeisteB.scale=1.5;
    isB=true;
  }
}

function spawnaA(){
  if(isarcherA==false){
    archerA=createSprite(windowWidth+150,windowHeight/5*3);
    archerA.addImage(archer1);
    archerA.immovable=true;
    isarcherA=true;
    archerA.scale=1.25;
  }
}



function mouvement(){
  jack.addSpeed(windowHeight/1500, 90);//gravité
  if(jack.position.y>windowHeight/5*3){
    jack.velocity.y=0;
    isjump=false;
  }
  if (keyIsDown(90)){
      if(isjump==false){
         jack.addSpeed(windowHeight/50, 270); 
         isjump=true;
       }
  }   
  if(keyIsDown(81)){
    jack.position.x-=vitj;
    direcjack=1;
    jack.mirrorX(-1);
  } else if(keyIsDown(68)){
    jack.position.x+=vitj;
    direcjack=2;
    jack.mirrorX(1);
  }
  
  if(keyIsDown(81) || keyIsDown(68)){
    if(chronoanimjack>0){
      chronoanimjack-=1;
    }
    if(chronoanimjack==0){
      if (pasjack==1){
        jack.addImage(jack2);
        pasjack=2;
      }else{
        jack.addImage(jack1);
        pasjack=1;
      }
      chronoanimjack=12;
    }
  }else if (chronoattackjack==0 && keyIsDown(83)==false && chronopied==false){
    jack.addImage(jack1);
    chronoanimjack=12;
  }
}

function jackattaque(){
  if(chronoattackjack==0 && keyIsDown(75)){ //K
    chronoattackjack=cadencejack;
  }
    if(chronoattackjack==cadencejack){
      jack.addImage(jack11);
    }
    if(chronoattackjack==cadencejack/5*4){
      jack.addImage(jack12);
    }
    if(chronoattackjack==cadencejack/5*3){
      jack.addImage(jack1);
    }
    if(chronoattackjack==cadencejack/5*4){
      isjackattack=true;
      sonepee=Math.random()*3;
      if(sonepee<=1){
        coupepee1.play();
      }else if (sonepee>1 && sonepee<=2){
        coupepee3.play();
      }else if (sonepee>2 && sonepee<=3)
        coupepee2.play();
    }else{
      isjackattack=false;
    }
    if(chronoattackjack>0){
      chronoattackjack-=1;
    }
}

function jackshield(){
  if(keyIsDown(81) || keyIsDown(68) || keyIsDown(90) || keyIsDown(76) ){
    shieldok=false;
  }else{
    shieldok=true;
  }
  if(keyIsDown(83) && chronoattackjack==0 && shieldok==true){
    jack.addImage(jack21);
    isshield=true;
  }else{
    isshield=false;
  };
}

function jackpied(){
  if(keyIsDown(76) && chronopied==0){
    coupdepied=true;
    chronopied=45
  }
  if(chronopied==45){
    jack.addImage(jack31);
  }
  if(chronopied==44){
    coupdepied=false;
  }
  if(chronopied==30){
    jack.addImage(jack1);
  }
  if(chronopied>0){
    chronopied-=1;
  }
}

function degatjackA(){
  if(isAattack==true  &&  rangeattackA==true && isshield==false && direcjack!==direcA || isAattack==true  &&  rangeattackA==true && direcjack==direcA){
    pvjack-=degatsA;
    sonjack.play();
  }else if(isAattack==true  &&  rangeattackA==true && isshield==true && direcjack!==direcA){
  coupshield.play();
}
}

function degatjackB(){
  if(isBattack==true  &&  rangeattackB==true && (isshield==false || (isshield==true && direcjack==direcB)) ){
    pvjack-=degatsB;
    sonjack.play();
  }else if(isBattack==true  &&  rangeattackB==true && isshield==true && direcjack!==direcB){
  coupshield.play();
}
}

function degatjackaA(){
  if(isshield==false && direcjack!==direcarcherA || direcjack==direcarcherA){
    pvjack-=degatsarcherA;
    flecheA.remove();
    sonjack.play();
  }
}

function repost(){
  flecherepost=true;
  flecheA.mirrorX(-1);
  vitfleche=-vitfleche;
}

function calculpvjack(){
  if(pvjack>0){
     fill(0,0,0);
     rect(windowWidth/12,windowHeight/30,windowWidth/6,windowHeight/40);
     fill(0,255,0);
     rect(windowWidth/12,windowHeight/30,pvjack*windowWidth/600,windowHeight/40);
  }
  if(pvjack<1){
    fill(100,0,0);
    textSize(60);
    text("Game Over!",windowWidth/2,windowHeight/2);
    jack.remove();
    noLoop();
  }
}

function calculxp(){
  fill(0,0,0);
  rect(windowWidth/9.8,windowHeight/16,windowWidth/8,windowHeight/100);
  fill(255,255,0);
  rect(windowWidth/9.8,windowHeight/16,windowWidth/800*xp/xplvl*(xp_lvl[xplvl]/xplvl),windowHeight/100);
  if (xp>=xp_lvl[xplvl]){
    xp=xp-xp_lvl[xplvl];
    xplvl+=1;
    pvjack=100;
  }
}

function endlvl(){
  if (nbrpablo==0){
    fill(0,0,0);
    textSize(20);
    text('Press "P" to continue to fight',windowWidth/2,windowHeight/20*2);
   if(keyIsDown(80)){
    lvl+=1;
    vagueset=false;
   }
  }  
}



function mouvementA(){
 if(Astun==false){
  if(epeisteA.position.x>jack.position.x+50){
    epeisteA.position.x-=vit;
    direcA=1;
    epeisteA.mirrorX(-1);
    if(chronoanimepeisteA>0){
      chronoanimepeisteA-=1;
    }
    if(chronoanimepeisteA==0){
      if (pasepeisteA==1){
        if(lvlepA==1){
          epeisteA.addImage(ep11);
        }else if (lvlepA==2){
          epeisteA.addImage(ep21);
        }else{
          epeisteA.addImage(ep31);
        }
        pasepeisteA=2;
      }else{
        if(lvlepA==1){
          epeisteA.addImage(ep12);
        }else if (lvlepA==2){
          epeisteA.addImage(ep22);
        }else{
          epeisteA.addImage(ep32);
        }
        pasepeisteA=1;
      }
      chronoanimepeisteA=12;
    }
  }else if (epeisteA.position.x<jack.position.x-50){
    epeisteA.position.x+=vit;
    direcA=2;
    epeisteA.mirrorX(1);
    
    if(chronoanimepeisteA>0){
      chronoanimepeisteA-=1;
    }
    if(chronoanimepeisteA==0){
      if (pasepeisteA==1){
        if(lvlepA==1){
          epeisteA.addImage(ep12);
        }else if (lvlepA==2){
          epeisteA.addImage(ep22);
        }else{
          epeisteA.addImage(ep32);
        }
        pasepeisteA=2;
      }else{
        if(lvlepA==1){
          epeisteA.addImage(ep11);
        }else if (lvlepA==2){
          epeisteA.addImage(ep21);
        }else{
          epeisteA.addImage(ep31);
        }
        pasepeisteA=1;
      }
      chronoanimepeisteA=12;
    }
  }else if(chronoattackA==0){
    if(lvlepA==1){
       epeisteA.addImage(ep11);
     }else if (lvlepA==2){
      epeisteA.addImage(ep21);
     }else{
       epeisteA.addImage(ep31);
     }
    chronoanimepeisteA=12;
  }
  
  if(Math.sqrt(Math.pow((jack.position.x-epeisteA.position.x),2))<60 && pvjack>0 && pvA>0){
    rangeattackA=true;
  }else{
  rangeattackA=false;
  }
 }
}

function calculpvA(){
  if(pvA>0){
    if(direcA==1){
     fill(0,0,0);
     rect(epeisteA.position.x-windowWidth/12/5*1.5,epeisteA.position.y-windowHeight/6,windowWidth/12,windowHeight/50);
     fill(255,0,0);
     rect(epeisteA.position.x-windowWidth/12/5*1.5,epeisteA.position.y-windowHeight/6,pvA*windowWidth/600,windowHeight/50);
    }else{
     fill(0,0,0);
     rect(epeisteA.position.x-windowWidth/12/5*3.5,epeisteA.position.y-windowHeight/6,windowWidth/12,windowHeight/50);
     fill(255,0,0)
     rect(epeisteA.position.x-windowWidth/12/5*3.5,epeisteA.position.y-windowHeight/6,pvA*windowWidth/600,windowHeight/50);
    }
  }
  if(pvA<1){
    shieldB=false;
    chronoAstun=0;
    xp+=lvlepA;
    mort.play();
    epeisteA.remove();
    isA=false;
    nbrpablo-=1;
   if(nbrpablo>0){
    if(lvl==2){ 
      lvlepA=1;
      pvA=50;
      spawnA();
    }
    if(lvl==3){ 
      lvlepA=2;
      pvA=50;
      spawnA();
    }
    if(lvl==4){ 
      lvlepA=2;
      pvA=50;
      spawnA();
    }
    if(lvl==6){ 
      lvlepA=3;
      pvA=50;
      spawnA();
    }
    if(lvl==7){ 
      lvlepA=3;
      pvA=50;
      spawnA();
    }
    if(lvl==8){
    }
    if(lvl==9 && nbrpablo==2){ 
      lvlepA=1;
      pvA=50;
      spawnA();
      pvarcherA=50;
      spawnaA();
    }
    if(lvl==11 && nbrpablo==2){
      lvlepA=1;
      spawnA(); 
      pvA=50;
      spawnaA(); 
      pvarcherA=50;
    }
    if(lvl==12){
    }
    if(lvl==13 && nbrpablo==2){
      lvlepA=2;
      spawnA(); 
      pvA=50;
      spawnaA(); 
      pvarcherA=50;
    }
    if(lvl==14 && nbrpablo==2){
      lvlepA=3;
      spawnA(); 
      pvA=50;
      spawnaA(); 
      pvarcherA=50;
    }
   }
  }
}

function attaqueA(){
if(Astun==false){
  if(chronoattackA==0 &&  rangeattackA==true){
    chronoattackA=cadenceA;
  }
    if(chronoattackA==cadenceA){
        if(lvlepA==1){
          epeisteA.addImage(ep13);
        }else if (lvlepA==2){
          epeisteA.addImage(ep23);
        }else{
          epeisteA.addImage(ep33);
        }
    }
    if(chronoattackA==cadenceA/10*9){
        if(lvlepA==1){
          epeisteA.addImage(ep14);
        }else if (lvlepA==2){
          epeisteA.addImage(ep24);
        }else{
          epeisteA.addImage(ep34);
        }
    }
    if(chronoattackA==cadenceA/10*8){
        if(lvlepA==1){
          epeisteA.addImage(ep11);
        }else if (lvlepA==2){
          epeisteA.addImage(ep21);
        }else{
          epeisteA.addImage(ep31);
        }
    }
    if(chronoattackA==cadenceA/10*9){
      isAattack=true;
      sonepee=Math.random()*3;
      if(sonepee<=1){
        coupepee1.play();
      }else if (sonepee>1 && sonepee<=2){
        coupepee3.play();
      }else if (sonepee>2 && sonepee<=3)
        coupepee2.play();
      }else{
      isAattack=false;
    }
    
    if(chronoattackA>0){
      chronoattackA-=1;
    }
    }else{
     chronoattackA=0;
    isAattack=false;
    if(lvlepA==1){
      epeisteA.addImage(ep11)
    }else if (lvlepA==2){
      epeisteA.addImage(ep21);
    }else{
      epeisteA.addImage(ep31);
    }
   }
  }

function degatA(){
  if(isjackattack==true && direcjack==2 && jack.position.x<epeisteA.position.x){
    pvA-=degatsjack;
  }else if(isjackattack==true && direcjack==1 && jack.position.x>epeisteA.position.x){
    pvA-=degatsjack;
  }
}

function degatepeisteAa(){
  pvA-=degatsarcherA;
  isflecheA=false;
}

function stunA(){
  if(coupdepied==true && direcjack==2 && jack.position.x<epeisteA.position.x ){
    if(Math.random()<0.3){
      Astun=true;
      chronoAstun=timestun;
    }
    pvA-=dgtpied;
    pied.play();
  }else if(coupdepied==true && direcjack==1 && jack.position.x>epeisteA.position.x){
    if(Math.random()<0.3){
      Astun=true;
      chronoAstun=timestun;
    }
    pvA-=dgtpied;
    pied.play();
  }
}

function calculstunA(){
  if(chronoAstun>0){
    chronoAstun-=1;
  if(chronoAstun%15<8){
        if(lvlepA==1){
          epeisteA.addImage(ep15);
        }else if (lvlepA==2){
          epeisteA.addImage(ep25);
        }else{
          epeisteA.addImage(ep35);
        }
  }else{
        if(lvlepA==1){
          epeisteA.addImage(ep16);
        }else if (lvlepA==2){
          epeisteA.addImage(ep26);
        }else{
          epeisteA.addImage(ep36);
        }
  }
  }
  if(chronoAstun<1){
    Astun=false;
  }
}



function mouvementB(){
if(shieldB==false){
 if(Bstun==false){
  if(epeisteB.position.x>jack.position.x+50){
    epeisteB.position.x-=vit;
    direcB=1;
    epeisteB.mirrorX(-1);
    if(chronoanimepeisteB>0){
      chronoanimepeisteB-=1;
    }
    if(chronoanimepeisteB==0){
      if (pasepeisteB==1){
        if(lvlepB==1){
          epeisteB.addImage(ep12);
        }else if (lvlepB==2){
          epeisteB.addImage(ep22);
        }else{
          epeisteB.addImage(ep32);
        }
        pasepeisteB=2;
      }else{
        if(lvlepB==1){
          epeisteB.addImage(ep11);
        }else if (lvlepB==2){
          epeisteB.addImage(ep21);
        }else{
          epeisteB.addImage(ep31);
        }
        pasepeisteB=1;
      }
      chronoanimepeisteB=12;
    }
  }else if (epeisteB.position.x<jack.position.x-50){
    epeisteB.position.x+=vit;
    direcB=2;
    epeisteB.mirrorX(1);
    
    if(chronoanimepeisteB>0){
      chronoanimepeisteB-=1;
    }
    if(chronoanimepeisteB==0){
      if (pasepeisteB==1){
        if(lvlepB==1){
          epeisteB.addImage(ep12);
        }else if (lvlepB==2){
          epeisteB.addImage(ep22);
        }else{
          epeisteB.addImage(ep32);
        }
        pasepeisteB=2;
      }else{
        if(lvlepB==1){
          epeisteB.addImage(ep11);
        }else if (lvlepB==2){
          epeisteB.addImage(ep21);
        }else{
          epeisteB.addImage(ep31);
        } 
        pasepeisteB=1;
      }
      chronoanimepeisteB=12;
    }
  }else if(chronoattackB==0){
        if(lvlepB==1){
          epeisteB.addImage(ep11);
        }else if (lvlepB==2){
          epeisteB.addImage(ep21);
        }else{
          epeisteB.addImage(ep31);
        }
    chronoanimepeisteB=12;
  }
  
  if(Math.sqrt(Math.pow((jack.position.x-epeisteB.position.x),2))<60 && pvjack>0 && pvB>0){
    rangeattackB=true;
  }else{
    rangeattackB=false;
  }
 }
}else{
  epeisteB.addImage(ep0);
  if(epeisteB.position.x<jack.position.x){
    epeisteB.mirrorX(1);
    direcB=2;
  }else{
    epeisteB.mirrorX(-1);
    direcB=1;
  }
}
}

function calculpvB(){
  if(pvB>0){ 
    if(direcB==1){
     fill(0,0,0);
     rect(windowWidth/2-windowWidth/(600/pvBmax)/2,windowHeight/8,windowWidth/(600/pvBmax),windowHeight/40);
     fill(255,0,0);
     rect(windowWidth/2-windowWidth/(600/pvBmax)/2,windowHeight/8,pvB*windowWidth/600,windowHeight/40);
    }else{
     fill(0,0,0);
     rect(windowWidth/2-windowWidth/(600/pvBmax)/2,windowHeight/8,windowWidth/(600/pvBmax),windowHeight/40);
     fill(255,0,0)
     rect(windowWidth/2-windowWidth/(600/pvBmax)/2,windowHeight/8,pvB*windowWidth/600,windowHeight/40);
    }
  }
  if(lvl==5){
    if(pvB<=pvBmax/4*3+degatsjack/2 && pvB>=pvBmax/4*3-degatsjack/2 && spawnsbire==0){ 
      lvlepA=1;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/4*2+degatsjack/2 && pvB>=pvBmax/4*2-degatsjack/2 && spawnsbire==1){ 
      lvlepA=1;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/4+degatsjack/2 && pvB>=pvBmax/4-degatsjack/2 && spawnsbire==2){ 
      lvlepA=2;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
  } 
  if(lvl==10){
    if(pvB<=pvBmax/5*4+degatsjack/2 && pvB>=pvBmax/5*4-degatsjack/2 && spawnsbire==0){ 
      lvlepA=1;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5*3+degatsjack/2 && pvB>=pvBmax/5*3-degatsjack/2 && spawnsbire==1){ 
      pvarcherA=50;
      spawnaA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5*2+degatsjack/2 && pvB>=pvBmax/5*2-degatsjack/2 && spawnsbire==2){ 
      pvarcherA=50;
      spawnaA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5+degatsjack/2 && pvB>=pvBmax/5-degatsjack/2 && spawnsbire==3){ 
      lvlepA=3
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
  }
  if(lvl==15){
    if(pvB<=pvBmax/5*4+degatsjack/2 && pvB>=pvBmax/5*4-degatsjack/2 && spawnsbire==0){ 
      lvlepA=1;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5*3+degatsjack/2 && pvB>=pvBmax/5*3-degatsjack/2 && spawnsbire==1){ 
      lvlepA=2;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5*2+degatsjack/2 && pvB>=pvBmax/5*2-degatsjack/2 && spawnsbire==2){ 
      lvlepA=3;
      pvA=50;
      spawnA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
    if(pvB<=pvBmax/5+degatsjack/2 && pvB>=pvBmax/5-degatsjack/2 && spawnsbire==3){ 
      pvarcherA=50;
      spawnaA();
      spawnsbire+=1;
      shieldB=true;
      chronoBstun=0;
      stunB=false
    }
  }
  if(pvB<1){
    xp+=lvlepB*6;
    mort.play();
    epeisteB.remove();
    isB=false;
    nbrpablo-=1;
    spawnsbire=0;
  }
}

function attaqueB(){
if( shieldB==false){
 if(Bstun==false){
  if(chronoattackB==0 &&  rangeattackB==true){
    chronoattackB=cadenceB;
  }
    if(chronoattackB==cadenceB){
        if(lvlepB==1){
          epeisteB.addImage(ep13);
        }else if (lvlepB==2){
          epeisteB.addImage(ep23);
        }else{
          epeisteB.addImage(ep33);
        }
    }
    if(chronoattackB==cadenceB/10*9){
        if(lvlepB==1){
          epeisteB.addImage(ep14);
        }else if (lvlepB==2){
          epeisteB.addImage(ep24);
        }else{
          epeisteB.addImage(ep34);
        }
    }
    if(chronoattackB==cadenceB/10*8){
        if(lvlepB==1){
          epeisteB.addImage(ep11);
        }else if (lvlepB==2){
          epeisteB.addImage(ep21);
        }else{
          epeisteB.addImage(ep31);
        }
    }
    if(chronoattackB==cadenceB/10*9){
      isBattack=true;
      sonepee=Math.random()*3;
      if(sonepee<=1){
        coupepee1.play();
      }else if (sonepee>1 && sonepee<=2){
        coupepee3.play();
      }else if (sonepee>2 && sonepee<=3)
        coupepee2.play();
    }else{
      isBattack=false;
    }
    if(chronoattackB>0){
      chronoattackB-=1;
    }
   }else{
    chronoattackB=0;
    isBattack=false;
        if(lvlepB==1){ 
          epeisteB.addImage(ep11);
        }else if (lvlepB==2){
          epeisteB.addImage(ep21);
        }else{
          epeisteB.addImage(ep31);
        }
  }
}
}

function degatB(){
  if(isjackattack==true && direcjack==2 && jack.position.x<epeisteB.position.x && shieldB==false){
    pvB-=degatsjack;
  }else if(isjackattack==true && direcjack==1 && jack.position.x>epeisteB.position.x && shieldB==false){
    pvB-=degatsjack;
  }
}

function stunB(){
  if(coupdepied==true && direcjack==2 && jack.position.x<epeisteB.position.x && shieldB==false){
    if(Math.random()<0.3){
      Bstun=true;
      chronoBstun=timestun;
    }
    pvB-=dgtpied;
    pied.play();
  }else if(coupdepied==true && direcjack==1 && jack.position.x>epeisteB.position.x && shieldB==false){
    if(Math.random()<0.3){
      Bstun=true;
      chronoBstun=timestun;
    }
    pvB-=dgtpied;
    pied.play();
  }
}

function calculstunB(){
  if(chronoBstun>0){
    chronoBstun-=1;
  if(chronoBstun%15<8){
        if(lvlepB==1){
          epeisteB.addImage(ep15);
        }else if (lvlepB==2){
          epeisteB.addImage(ep25);
        }else{
          epeisteB.addImage(ep35);
        }
  }else{
        if(lvlepB==1){
          epeisteB.addImage(ep16);
        }else if (lvlepB==2){
          epeisteB.addImage(ep26);
        }else{
          epeisteB.addImage(ep36);
        }
  }
  }
  if(chronoBstun<1){
    Bstun=false;
  }
}



function mouvementaA(){
 if(archerAstun==false){
  if(archerA.position.x>jack.position.x+rangearcher){
    archerA.position.x-=vitarcher;
    
    if(chronoanimarcherA>0){
      chronoanimarcherA-=1;
    }
    if(chronoanimarcherA==0){
      if (pasarcherA==1){
        archerA.addImage(archer2);
        pasarcherA=2;
      }else{
        archerA.addImage(archer1);
        pasarcherA=1;
      }
      chronoanimarcherA=12;
    }
  }else if (archerA.position.x<jack.position.x-rangearcher){
    archerA.position.x+=vitarcher;
    direcarcherA=2;               
    archerA.mirrorX(1);
    
    if(chronoanimarcherA>0){
      chronoanimarcherA-=1;
    }
    if(chronoanimarcherA==0){
      if (pasarcherA==1){
        archerA.addImage(archer2);
        pasarcherA=2;
      }else{
        archerA.addImage(archer1);
        pasarcherA=1;
      }
      chronoanimarcherA=12;
    }
  }else if(chronotirA==0){
    archerA.addImage(archer1);
    chronoanimarcherA=12;
  }
  if(archerA.position.x>jack.position.x){
    direcarcherA=1;    
    archerA.mirrorX(-1);
  }else if (archerA.position.x<jack.position.x){
    direcarcherA=2;    
    archerA.mirrorX(1);
  }
   
  if(direcarcherA==1 && archerA.position.x-jack.position.x<rangearcher && pvjack>0 && pvarcherA>0){
    rangeattackarcherA=true;
  }else if(direcarcherA==2 && jack.position.x-archerA.position.x<rangearcher && pvjack>0 && pvarcherA>0){
    rangeattackarcherA=true;
  }else {
    rangeattackarcherA=false;
  }
 }
}

function calculpvaA(){
  if(pvarcherA>0){
    if(direcarcherA==1){
     fill(0,0,0);
     rect(archerA.position.x-windowWidth/12/5*1.5,archerA.position.y-windowHeight/6,windowWidth/12,windowHeight/50);
     fill(255,0,0);
     rect(archerA.position.x-windowWidth/12/5*1.5,archerA.position.y-windowHeight/6,pvarcherA*windowWidth/600,windowHeight/50);
    }else{
     fill(0,0,0);
     rect(archerA.position.x-windowWidth/12/5*3.5,archerA.position.y-windowHeight/6,windowWidth/12,windowHeight/50);
     fill(255,0,0)
     rect(archerA.position.x-windowWidth/12/5*3.5,archerA.position.y-windowHeight/6,pvarcherA*windowWidth/600,windowHeight/50);
    }
  }
  if(pvarcherA<1){
    xp+=4;
    mort.play();
    archerA.remove();
    chronoarcherAstun=0;
    shieldB=false;
    isarcherA=false;
    nbrpablo-=1;
  }
}
function attaqueaA(){
  if(archerAstun==false){
    if(chronotirA==0 &&  rangeattackarcherA==true){
      chronotirA=cadencearcherA;
    }
      if(chronotirA==cadencearcherA){
        archerA.addImage(archer11);
      }
      if(chronotirA==cadencearcherA/20*19){
        archerA.addImage(archer12);              
      }
      if(chronotirA==cadencearcherA/20*17){
        archerA.addImage(archer13);
      }
      if(chronotirA==cadencearcherA/20*16){
       tirA()
        archerA.addImage(archer11);
      }
      if(chronotirA>0){
        chronotirA-=1;
      }
     }else{
      chronotirA=0;
      isarcherAattack=false;
      archerA.addImage(archer1);
     }
}

function tirA(){
  if(direcarcherA==1){
    flecheA=createSprite(archerA.position.x-55,archerA.position.y-30);
  }else{
    flecheA=createSprite(archerA.position.x+55,archerA.position.y-30);
  }
  vitfleche=15;
  flecheA.mirrorX(1);
  flecheA.immovable=true;
  flecheA.addImage(arrow);
  isflecheA=true;
  flecherepost=false;
  direcflecheA=direcarcherA;
}

function calculflecheA(){
  if(direcflecheA==1){
    flecheA.position.x-=vitfleche;
    flecheA.mirrorX(-1);
  }else{
    flecheA.position.x+=vitfleche;
  }
  if(flecheA.position.x<0 || flecheA.position.x>windowWidth || flecheA.overlap(jack)==true && isshield==false && chronoattackjack<1){
    isflecheA=false;
  }
    if(flecherepost==false && jack.overlap(flecheA)==true && chronoattackjack>cadencejack/5*3 ){
      repost();
    }
    if(flecherepost==false && jack.overlap(flecheA)==true && chronoattackjack<cadencejack/5*3){
      degatjackaA();
      isflecheA=false;
    }
    if(flecherepost==true && epeisteA.overlap(flecheA)==true){
      degatepeisteAa();
    }
    if(flecherepost==true && archerA.overlap(flecheA)==true){
      degatarchera();
    }
}

function degataA(){
  if(isjackattack==true && direcjack==2 && jack.position.x<archerA.position.x){
    pvarcherA-=degatsjack;
  }else if(isjackattack==true && direcjack==1 && jack.position.x>archerA.position.x){
    pvarcherA-=degatsjack;
  }
}

function degatarchera(){
  pvarcherA-=degatsarcherA;
  isflecheA=false;
}

function stunaA(){
  if(coupdepied==true && direcjack==2 && jack.position.x<archerA.position.x ){
    if(Math.random()<0.3){
      archerAstun=true;
      chronoarcherAstun=timestun;
    }
    pvarcherA-=dgtpied;
    pied.play();
  }else if(coupdepied==true && direcjack==1 && jack.position.x>archerA.position.x){
    if(Math.random()<0.3){
      archerAstun=true;
      chronoarcherAstun=timestun;
    }
    pvarcherA-=dgtpied;
    pied.play();
  }
}

function calculstunaA(){
  if(chronoarcherAstun>0){
    chronoarcherAstun-=1;
  if(chronoarcherAstun%15<8){
    archerA.addImage(archerstun1);
  }else{
    archerA.addImage(archerstun2);
  }
  }
  if(chronoarcherAstun<1){
    archerAstun=false;
  }
}

function shop(){
  fill(100,100,100);
  rect(windowWidth/10,windowHeight/5*3,windowWidth/2,windowHeight/3);
  drawSprite(boutonepee);
  fill(0,0,0);
  textSize(22);
  text("Epée en bronze",windowWidth/5.5,windowHeight/7*4.8)
}