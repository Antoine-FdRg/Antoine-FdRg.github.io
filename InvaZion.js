var jeu=1;
var speed1=2;
var direc1=0;
var speed2=2;
var direc2=0;
var pv1=3;
var pv2=3;
var chronotir1=0;
var cadence1=35;
var chronotir2=0;
var cadence2=35;
var nbrzombie=1;
var intervague=false;
var vague=0;
var murdespawn;
var difficulté=3;
var speedzombie=1.25;
var zalive;
var jalive=2;
var nrbjoueur;
var gold1=0, gold2=0;
var prixcad=2, prixsoin=1, prixsp=3, prixvis=32, prixrez=10;
var prixcad2=2, prixsoin2=1, prixsp2=3;
var lvlcad1=0, lvlsp1=0;
var lvlcad2=0, lvlsp2=0;
var chronocl=0;
var vis1=false;
var vis2=false;
var chargeur1=20, chargeur2=20;
var chronorel1=0, chronorel2=0;


function preload() {
  feu=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffeu.mp3?v=1561235829174');
  maison=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fmaison.png?v=1561235829623');
  p1=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fp1.png?v=1561235829764');
  p2=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fp2.png?v=1561235830107');
  p1r=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fp1r.png?v=1561235829904');
  p2r=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fp2r.png?v=1561235837649');
  zombi=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fzombie.png?v=1566748972725');
  son_mort_zombie=createAudio("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fmort_zombie.mp3?v=1606580227323")
  click=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fclick.mp3?v=1561235830058');
  heal=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fsoulagement.mp3?v=1571481661074');
  reload=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Freload.mp3?v=1561235830489');
  laser=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fimage.png?v=1580315231856');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // création des murs
  mur_g=createSprite(-5, windowHeight/2, 12, windowHeight);
  mur_d=createSprite(windowWidth+5, windowHeight/2, 12, windowHeight);
  mur_h=createSprite(windowWidth/2, -5, windowWidth, 12);
  mur_b=createSprite(windowWidth/2, windowHeight+5, windowWidth, 12);   
  //couleur de remplissage(rouge) des murs
  mur_g.shapeColor=color(100, 40, 0);
  mur_d.shapeColor=color(100, 40, 0);
  mur_h.shapeColor=color(100, 40, 0);
  mur_b.shapeColor=color(100, 40, 0); 
  // les "murs" sont statiques
  mur_d.immovable=true;
  mur_g.immovable=true;
  mur_h.immovable=true;
  mur_b.immovable=true;
  murs=new Group();
  murs.add(mur_d);
  murs.add(mur_g);
  murs.add(mur_b);
  murs.add(mur_h);

  pointeur=createSprite(windowWidth/2, windowHeight/2, 1, 1);
  pointeur.shapeColor=color(150, 150, 150);

  bouton_play=createSprite(windowWidth/2, windowHeight/2, windowWidth/5, windowHeight/10);
  bouton_play.shapeColor=color(255, 60, 10);

  bouton_duo=createSprite(windowWidth/2, windowHeight/30*20.5, windowWidth/7, windowHeight/12);
  bouton_duo.shapeColor=color(255, 60, 10);

  bouton_cadence=createSprite(windowWidth/10*3.5, windowHeight/10*3.7, windowWidth/6, windowHeight/6);
  bouton_cadence.shapeColor=color(230, 200, 0);

  bouton_soin=createSprite(windowWidth/10*6.5, windowHeight/10*3.7, windowWidth/6, windowHeight/6);
  bouton_soin.shapeColor=color(0, 180, 0);

  bouton_speed=createSprite(windowWidth/10*3.5, windowHeight/10*6.3, windowWidth/6, windowHeight/6);
  bouton_speed.shapeColor=color(0, 255, 230);

  bouton_viseur=createSprite(windowWidth/10*6.5, windowHeight/10*6.3, windowWidth/6, windowHeight/6);
  bouton_viseur.shapeColor=color(255, 0, 0);

  bouton_rez=createSprite(windowWidth/10*5, windowHeight/10*5, windowWidth/12, windowHeight/12);
  bouton_rez.shapeColor=color(148, 0, 255);

  home=createSprite(windowWidth/2, windowHeight/2, 60, 60);
  home.shapeColor=color(200, 200, 200);
  home.immovable=true;
  home.addImage(maison);

  j1=createSprite(windowWidth/2, windowHeight/30*18, 50, 40);
  j1.shapeColor=color(0, 0, 150);
  j1.immovable=true;
  j1.addImage(p1);

  j2=createSprite(windowWidth/2, windowHeight/30*11, 50, 40);
  j2.shapeColor=color(150, 0, 0);
  j2.immovable=true;
  j2.addImage(p2);

  laser1=createSprite(windowWidth, windowHeight);
  laser1.immovable=true;
  laser1.addImage(laser);

  laser2=createSprite(windowWidth, windowHeight);
  laser2.immovable=true;
  laser2.addImage(laser);

  tirs1=new Group();
  tir1=createSprite(windowWidth, windowHeight, 5, 2);
  tir1.immovable=true;

  tirs2=new Group();
  tir2=createSprite(windowWidth, windowHeight, 5, 2);
  tir2.immovable=true;

  zombie=createSprite(windowWidth/2, windowHeight/30*18, 50, 40);
  zombie.immovable=true;
  zombies=new Group();
}


function draw() {
  if (jeu==1) {
    menu();
  }
  if (jeu==3) {
    spawn();
  }
  if (jeu==11 && nbrjoueur==1 ) {
    solo();
  }
  if (jeu==11 && nbrjoueur==2 ) {
    duo();
  }
  if (jeu==21) {
    shop1();
  }
  if (jeu==22) {
    shop2();
  }
}

function menu() {
  background(150, 150, 150);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  drawSprite(bouton_play);
  drawSprite(bouton_duo);
  drawSprite(pointeur);
  textSize(windowWidth/40);
  textAlign(CENTER);
  text("SOLO PLAY ", windowWidth/2, windowHeight/30*15.70);
  textSize(windowWidth/53);
  text("PLAY in PAIR", windowWidth/2, windowHeight/30*21);
  textSize(windowWidth/50);
  text("Commands player 1",windowWidth/6,windowHeight/5*2);
  textSize(windowWidth/70);
  text("Movements : Z,Q,S,D",windowWidth/6,windowHeight/5*2.4);
  text("Shoot : F",windowWidth/6,windowHeight/5*2.7);
  text("Reload : G",windowWidth/6,windowHeight/5*3);
  textSize(windowWidth/50);
  text("Commands player 2",windowWidth/6*5,windowHeight/5*2);
  textSize(windowWidth/70);
  text("Movements : directionnal arrows",windowWidth/6*5,windowHeight/5*2.4);
  text("Shoot : 1",windowWidth/6*5,windowHeight/5*2.7);
  text("Reload : 2",windowWidth/6*5,windowHeight/5*3);
  
  if (mouseIsPressed && pointeur.overlap(bouton_play)) {
    click.play();
    jeu=3;
    nbrjoueur=1;
    removeSprite(bouton_play);
    removeSprite(pointeur);
  }
  if (mouseIsPressed && pointeur.overlap(bouton_duo)) {
    click.play();
    jeu=3;
    nbrjoueur=2;
    removeSprite(bouton_duo);
    removeSprite(pointeur);
  }
}

function spawn() {
  vague+=1;
  if (vague>0 && vague<5) {
    difficulté=1;
  }
  if (vague>4 && vague<9) {
    difficulté=2;
  }
  if (vague>8 && vague<13) {
    difficulté=3;
  }
  if (vague>12 && vague<17) {
    difficulté=4;
  }
  for (var i=0; i<nbrzombie; i++) {
    murdespawn=Math.round(random(0.51, difficulté+0.49));
    if (murdespawn==1) {
      zombie=createSprite(windowWidth, random(0, height), 50, 40);
      zombie.shapeColor=color(0, 100, 0);
      zombie.immovable=true;
      zombie.addSpeed(speedzombie, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180);
      zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180;
      zombie.addImage(zombi);
      zombies.add(zombie);
    }
    if (murdespawn==2) {
      zombie=createSprite(random(0, width), windowHeight, 50, 40);
      zombie.shapeColor=color(0, 100, 0);
      zombie.immovable=true;
      zombie.addImage(zombi);
      zombies.add(zombie);
      if (zombie.position.x<windowWidth/2) {
        zombie.addSpeed(speedzombie/2, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0);
        zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0;
      } else {
        zombie.addSpeed(speedzombie/2, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180);
        zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180;
      }
    }
    if (murdespawn==3) {
      zombie=createSprite(0, random(0, height), 50, 40);
      zombie.shapeColor=color(0, 100, 0);
      zombie.immovable=true;
      zombie.addImage(zombi);
      zombies.add(zombie);
      zombie.addSpeed(speedzombie, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0);
      zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0;
    }
    if (murdespawn==4 ) {
      zombie=createSprite(random(0, width), 0, 50, 40);
      zombie.shapeColor=color(0, 100, 0);
      zombie.immovable=true;
      zombie.addImage(zombi);
      zombies.add(zombie);
      if (zombie.position.x<windowWidth/2) {
        zombie.addSpeed(speedzombie/2, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0);
        zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+0;
      } else {
        zombie.addSpeed(speedzombie, 180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180);
        zombie.rotation=180*(Math.atan((zombie.position.y-windowHeight/2)/(zombie.position.x-windowWidth/2)))/Math.PI+180;
      }
    }
  }
  zalive=nbrzombie;
  nbrzombie+=1;
  jeu=11;
}


function solo() {
  background(100, 40, 0);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(20);
  text('Wave : ' + vague, windowWidth/10*6, windowHeight/30*2);
  if (intervague==true) {
    fill(255, 255, 255);
    textSize(40);
    text('Go back to home to trigger the next wave', windowWidth/10*5, windowHeight/30*6);
    textSize(30);
    text('T : open the shop', windowWidth/10, windowHeight/30*2);
  }
  textSize(20);
  fill(250, 188, 15);
  text('Coins : '+gold1, windowWidth/10*3, windowHeight/30*2);
  drawSprite(j1);
  drawSprite(home);
  drawSprites(tirs1);
  drawSprites(zombies);
  vie1();
  mouvement1();
  shoot1();
  viseur1();
  tirs1.overlap(murs, shoots);
  tirs1.overlap(zombies, shootz1);
  zombies.overlap(home, end);
  zombies.overlap(j1, dgtzombie1);
  fill(255, 0, 0);
  if (zalive==0) {
    intervague=true;
  }
  if (intervague==true && keyIsDown(84)) {
    jeu=21;
  }
  if (j1.overlap(home)==true && intervague==true ) {
    jeu=3;
    intervague=false;
  }
  if (pv1==0) {
    end();
  }
}

function duo() {
  background(100, 40, 0);
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(20);
  text('Wave : ' + vague, windowWidth/10*5, windowHeight/30*2);
  if (intervague==true) {
    fill(255, 255, 255);
    textSize(40);
    text('Go back to home to trigger the next wave', windowWidth/10*5, windowHeight/30*6);
  }
  drawSprite(j1);
  drawSprite(home);
  drawSprites(tirs1);
  drawSprite(j2);
  drawSprites(tirs2);
  drawSprites(zombies);
  if (j1.removed==false) {
    vie1();
    textSize(20);
    fill(250, 188, 15);
    text('Coins 1 : '+gold1, windowWidth/10*2, windowHeight/30*2);
    mouvement1();
    shoot1();
    viseur1();
  }
  if (j2.removed==false) {
    vie2();
    textSize(20);
    fill(250, 188, 15);
    text('Coins 2 : '+gold2, windowWidth/10*8, windowHeight/30*2);
    mouvement2();
    shoot2();
    viseur2();
  }
  tirs1.overlap(murs, shoots);
  tirs1.overlap(zombies, shootz1);
  tirs2.overlap(murs, shoots);
  tirs2.overlap(zombies, shootz2);
  zombies.overlap(home, end);
  if (j1.removed==false) {
    zombies.overlap(j1, dgtzombie1);
    if (intervague==true) {
      textAlign(CENTER);
      fill(255, 255, 255);
      textSize(30);
      text('T : open the shop ', windowWidth/10, windowHeight/30*28);
    }
  }
  if (j2.removed==false) {
    zombies.overlap(j2, dgtzombie2);
    if (intervague==true) {
      textAlign(CENTER);
      fill(255, 255, 255);
      textSize(30);
      text('5 : open the shop ', windowWidth/10*9, windowHeight/30*28);
    }
  }
  if (intervague==true) {
    if (j1.removed==false) {
      if (keyIsDown(84)) {
        jeu=21;
      }
    }
    if (j2.removed==false) {
      if (keyIsDown(101)) {
        jeu=22;
      }
    }
  }
  if (zalive==0) {
    intervague=true;
  }
  if ( intervague==true && j1.overlap(home)==true || intervague==true && j2.overlap(home)==true ) {
    jeu=3;
    intervague=false;
  }
  if (pv1<1) {
    removeSprite(j1);
  }
  if (pv2<1) {
    removeSprite(j2);
  }
  if (pv1<1 && pv2<1) {
    end();
  }
}

function vie1() {
  if (nbrjoueur==1) {
    fill(0, 0, 0);
    noStroke();
    rect(windowWidth/10*4, windowHeight/30, windowWidth/10.6, windowHeight/30);
    fill(0, 0, 150);
    rect(windowWidth/10*4, windowHeight/30, windowWidth/32*pv1, windowHeight/30 );
    fill(255, 255, 255);
    textSize(20);
    text('Lives : ' + pv1, windowWidth/10*4.3, windowHeight/60*3.5);
  } else {
    fill(0, 0, 0);
    noStroke();
    rect(windowWidth/10*3, windowHeight/30, windowWidth/10.6, windowHeight/30);
    fill(0, 0, 150);
    rect(windowWidth/10*3, windowHeight/30, windowWidth/32*pv1, windowHeight/30 );
    fill(255, 255, 255);
    textSize(20);
    text('Lives : ' + pv1, windowWidth/10*3.3, windowHeight/60*3.5);
  }
}

function vie2() {
  fill(0, 0, 0);
  noStroke();
  rect(windowWidth/10*6, windowHeight/30, windowWidth/10.66, windowHeight/30);
  fill(150, 0, 0);
  rect(windowWidth/10*6, windowHeight/30, windowWidth/32*pv2, windowHeight/30 );
  fill(255, 255, 255);
  textSize(20);
  text('Lives : ' + pv2, windowWidth/10*6.3, windowHeight/60*3.5);
}

function mouvement1() {
if (nbrjoueur==1) {
  if (keyIsDown(90) && j1.position.y >20) {//haut
    j1.position.y-=speed1 ;
    direc1=270;
    j1.rotation=270;
  }
  if (keyIsDown(68) && j1.position.x <width-20) {//droite
    j1.position.x+=speed1;
    direc1=0;
    j1.rotation=0;
  } 
  if (keyIsDown(83) && j1.position.y <height-20) {//bas
    j1.position.y+=speed1 ;
    direc1=90;
    j1.rotation=90;
  }
  if (keyIsDown(81) && j1.position.x >20) {//gauche
    j1.position.x-=speed1 ;
    direc1=180;
    j1.rotation=180;
  } 
  if (keyIsDown(81) && keyIsDown(90) && j1.position.y >20 && j1.position.x >20) {//haut gauche
    j1.position.y+=speed1/2 ;
    j1.position.x+=speed1/2;
    direc1=225;
    j1.rotation=225;
  } 
  if (keyIsDown(68) && keyIsDown(90) && j1.position.y >20 && j1.position.x <width-20) {//haut droite
    j1.position.y+=speed1/2 ;
    j1.position.x-=speed1/2 ;
    direc1=315;
    j1.rotation=315;
  } 
  if (keyIsDown(68) && keyIsDown(83) && j1.position.y <height-20 && j1.position.x <width-20) {//bas droite
    j1.position.y-=speed1/2 ;
    j1.position.x-=speed1/2;
    direc1=45;
    j1.rotation=45;
  }  
  if (keyIsDown(81) && keyIsDown(83) && j1.position.y <height-20 && j1.position.x >20) {//bas gauche
    j1.position.y-=speed1/2 ;
    j1.position.x+=speed1/2 ;
    direc1=135;
    j1.rotation=135;
  }
  if (keyIsDown(38) && j2.position.y >20) {//haut
    j1.position.y-=speed1 ;
    direc1=270;
    j1.rotation=270;
  }
  if (keyIsDown(39) && j2.position.x <width-20) {//droite
    j1.position.x+=speed1;
    direc1=0;
    j1.rotation=0;
  } 
  if (keyIsDown(40) && j2.position.y <height-20) {//bas
    j1.position.y+=speed1 ;
    direc1=90;
    j1.rotation=90;
  }
  if (keyIsDown(37) && j2.position.x >20) {//gauche
    j1.position.x-=speed1 ;
    direc1=180;
    j1.rotation=180;
  } 
  if (keyIsDown(37) && keyIsDown(38) && j1.position.y >20 && j1.position.x >20) {//haut gauche
    j1.position.y+=speed1/2 ;
    j1.position.x+=speed1/2;
    direc1=225;
    j1.rotation=225;
  } 
  if (keyIsDown(38) && keyIsDown(39) && j1.position.y >20 && j1.position.x <width-20) {//haut droite
    j1.position.y+=speed1/2 ;
    j1.position.x-=speed1/2 ;
    direc1=315;
    j1.rotation=315;
  } 
  if (keyIsDown(39) && keyIsDown(40) && j1.position.y <height-20 && j1.position.x <width-20) {//bas droite
    j1.position.y-=speed1/2 ;
    j1.position.x-=speed1/2;
    direc1=45;
    j1.rotation=45;
  }  
  if (keyIsDown(37) && keyIsDown(40) && j1.position.y <height-20 && j1.position.x >20) {//bas gauche
    j1.position.y-=speed1/2 ;
    j1.position.x+=speed1/2 ;
    direc1=135;
    j1.rotation=135;
  }
}else{
  if (keyIsDown(90) && j1.position.y >20) {//haut
    j1.position.y-=speed1 ;
    direc1=270;
    j1.rotation=270;
  }
  if (keyIsDown(68) && j1.position.x <width-20) {//droite
    j1.position.x+=speed1;
    direc1=0;
    j1.rotation=0;
  } 
  if (keyIsDown(83) && j1.position.y <height-20) {//bas
    j1.position.y+=speed1 ;
    direc1=90;
    j1.rotation=90;
  }
  if (keyIsDown(81) && j1.position.x >20) {//gauche
    j1.position.x-=speed1 ;
    direc1=180;
    j1.rotation=180;
  } 
  if (keyIsDown(81) && keyIsDown(90) && j1.position.y >20 && j1.position.x >20) {//haut gauche
    j1.position.y+=speed1/2 ;
    j1.position.x+=speed1/2;
    direc1=225;
    j1.rotation=225;
  } 
  if (keyIsDown(68) && keyIsDown(90) && j1.position.y >20 && j1.position.x <width-20) {//haut droite
    j1.position.y+=speed1/2 ;
    j1.position.x-=speed1/2 ;
    direc1=315;
    j1.rotation=315;
  } 
  if (keyIsDown(68) && keyIsDown(83) && j1.position.y <height-20 && j1.position.x <width-20) {//bas droite
    j1.position.y-=speed1/2 ;
    j1.position.x-=speed1/2;
    direc1=45;
    j1.rotation=45;
  }  
  if (keyIsDown(81) && keyIsDown(83) && j1.position.y <height-20 && j1.position.x >20) {//bas gauche
    j1.position.y-=speed1/2 ;
    j1.position.x+=speed1/2 ;
    direc1=135;
    j1.rotation=135;
  }
}
}

function mouvement2() {
  if (keyIsDown(38) && j2.position.y >20) {//haut
    j2.position.y-=speed2 ;
    direc2=270;
    j2.rotation=270;
  }
  if (keyIsDown(39) && j2.position.x <width-20) {//droite
    j2.position.x+=speed2;
    direc2=0;
    j2.rotation=0;
  } 
  if (keyIsDown(40) && j2.position.y <height-20) {//bas
    j2.position.y+=speed2 ;
    direc2=90;
    j2.rotation=90;
  }
  if (keyIsDown(37) && j2.position.x >20) {//gauche
    j2.position.x-=speed2 ;
    direc2=180;
    j2.rotation=180;
  } 
  if (keyIsDown(37) && keyIsDown(38) && j2.position.y >20 && j2.position.x >20) {//haut gauche
    j2.position.y+=speed2/2 ;
    j2.position.x+=speed2/2;
    direc2=225;
    j2.rotation=225;
  } 
  if (keyIsDown(38) && keyIsDown(39) && j2.position.y >20 && j2.position.x <width-20) {//haut droite
    j2.position.y+=speed2/2 ;
    j2.position.x-=speed2/2 ;
    direc2=315;
    j2.rotation=315;
  } 
  if (keyIsDown(39) && keyIsDown(40) && j2.position.y <height-20 && j2.position.x <width-20) {//bas droite
    j2.position.y-=speed2/2 ;
    j2.position.x-=speed2/2;
    direc2=45;
    j2.rotation=45;
  }  
  if (keyIsDown(37) && keyIsDown(40) && j2.position.y <height-20 && j2.position.x >20) {//bas gauche
    j2.position.y-=speed2/2 ;
    j2.position.x+=speed2/2 ;
    direc2=135;
    j2.rotation=135;
  }
}

function shoot1() {
  if (chronotir1>0) {
    chronotir1-=1;
  }
  if (chronorel1>0) {
    chronorel1-=1;
    textSize(17);
    fill(255,255,255);
    text('Reloading...',j1.position.x,j1.position.y+35);
  }
  if (chronorel1==1) {
    chargeur1=20;
    j1.addImage(p1);
  }
  if (chronotir1==0 && chargeur1>0 && chronorel1==0) {
    if (keyIsDown(70) || nbrjoueur==1 && keyIsDown(97)) {
      chronotir1=cadence1;
      chargeur1-=1;
      tir1=createSprite(j1.position.x, j1.position.y, 5, 3);
      tir1.addSpeed(30, direc1);
      tir1.shapeColor=color(255, 255, 0);
      tir1.rotation=direc1;
      tirs1.add(tir1);
      feu.play();
      if (chargeur1==0) {
        chronorel1=120;
        j1.addImage(p1r);
        reload.play();
      }
    }
  }
  if(keyIsDown(71)|| nbrjoueur==1 && keyIsDown(98)){
    chronorel1=120;
    j1.addImage(p1r);
    reload.play();
  }
}
function shoot2() {
  if (chronotir2>0) {
    chronotir2-=1;
  }
  if (chronorel2>0) {
    chronorel2-=1;
    fill(255,255,255);
    textSize(17);
    text('Reloading...',j2.position.x,j2.position.y+35);
  }
  if (chronorel2==1) {
    chargeur2=20;
    j2.addImage(p2);
  }
  if (chronotir2==0 && chronorel2==0 && chronorel2==0) {
    if (keyIsDown(97)) {
      chronotir2=cadence2;
      chargeur2-=1;
      tir2=createSprite(j2.position.x, j2.position.y, 5, 3);
      tir2.addSpeed(30, direc2);
      tir2.shapeColor=color(255, 255, 0);
      tir2.rotation=direc2;
      tirs2.add(tir2);
      feu.play();
      if (chargeur2==0) {
        chronorel2=120 ;
        j2.addImage(p2r);
        reload.play();
      }
    }
  }
  if(keyIsDown(98)){
    chronorel2=120;
    j2.addImage(p2r);
    reload.play();
  }
}

function shoots(sprite_1, sprite_2) {
  sprite_1.remove();
}
function shootz1(sprite_1, sprite_2) {
  son_mort_zombie.play()
  sprite_1.remove();
  sprite_2.remove();
  zalive-=1;
  gold1+=1;
}

function shootz2(sprite_1, sprite_2) {
  son_mort_zombie.play()
  sprite_1.remove();
  sprite_2.remove();
  zalive-=1;
  gold2+=1;
}

function viseur1() {
  if (vis1==true) {
    drawSprite(laser1);
    laser1.position.x=j1.position.x;
    laser1.position.y=j1.position.y;
    laser1.rotation=direc1;
  }
}

function viseur2() {
  if (vis2==true) {
    drawSprite(laser2);
    laser2.position.x=j2.position.x;
    laser2.position.y=j2.position.y;
    laser2.rotation=direc2;
  }
}

function dgtzombie1(sprite_1, sprite_2) {
  sprite_1.remove();
  zalive-=1;
  pv1-=1;
  gold1+=1;
}

function dgtzombie2(sprite_1, sprite_2) {
  sprite_1.remove();
  zalive-=1;
  pv2-=1;
  gold2+=1;
}



function shop1() {
  background(100, 40, 0);
  if (chronocl>0) {
    chronocl-=1;
  }
  if (nbrjoueur==1) {
    fill(255, 255, 255);
    textAlign(CENTER);
    textSize(20);
    text('Wave : ' + vague, windowWidth/10*6, windowHeight/30*2);
    vie1();
    textSize(20);
    fill(250, 188, 15);
    text('Coins : '+gold1, windowWidth/10*3, windowHeight/30*2);
    fill(255, 255, 255);
    textSize(30);
    text('Y : close the shop ', windowWidth/10, windowHeight/30*2);
  } else {
    fill(255, 255, 255);
    textAlign(CENTER);
    textSize(20);
    text('Wave : ' + vague, windowWidth/10*5, windowHeight/30*2);
    if (j1.removed==false) {
      vie1();
      textSize(20);
      fill(250, 188, 15);
      text('Coins 1 : '+gold1, windowWidth/10*2, windowHeight/30*2);
    }
    if (j2.removed==false) {
      vie2();
      textSize(20);
      fill(250, 188, 15);
      text('Coins 2 : '+gold2, windowWidth/10*8, windowHeight/30*2);
    }
    fill(255, 255, 255);
    textSize(30);
    text('Y : close the shop ', windowWidth/10, windowHeight/30*28);
  }
  fill(100, 100, 200);
  noStroke();
  rect(windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2, 10);
  pointeur=createSprite(windowWidth/2, windowHeight/2, 1, 1);
  pointeur.shapeColor=color(150, 150, 150);
  drawSprite(pointeur);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  drawSprite(bouton_cadence);
  drawSprite(bouton_soin);
  drawSprite(bouton_speed);
  drawSprite(bouton_viseur);
  if (cadence1>11) {
    bouton_cadence.shapeColor=color(230, 200, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Gun rate +', windowWidth/10*3.5, windowHeight/10*3.6);
    textSize(15);
    text(prixcad + ' coins', windowWidth/10*3.5, windowHeight/20*8 );
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10, windowHeight/60);
    fill(230, 200, 0);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10/5*lvlcad1, windowHeight/60 );
    noStroke();
  } else {
    bouton_cadence.shapeColor=color(120, 100, 0);
    textSize(30);
    fill(255, 255, 255);
    text('Gun rate +', windowWidth/10*3.5, windowHeight/10*3.6);
    textSize(15);
    text('Maximum gun rate', windowWidth/10*3.5, windowHeight/10*4);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10, windowHeight/60);
    fill(120, 100, 0);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10/5*lvlcad1, windowHeight/60 );
    noStroke();
  }

  if (pv1<3) {
    bouton_soin.shapeColor=color(0, 200, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Heal', windowWidth/10*6.5, windowHeight/10*3.6);
    textSize(15);
    fill(0, 0, 0);
    text(prixsoin + ' coins', windowWidth/10*6.5, windowHeight/10*4);
  } else {
    bouton_soin.shapeColor=color(0, 40, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Heal', windowWidth/10*6.5, windowHeight/10*3.6);
    textSize(15);
    fill(0, 0, 0);
    text('Maximum life', windowWidth/10*6.5, windowHeight/10*4);
  }
  if (speed1<5) {
    bouton_speed.shapeColor=color(0, 255, 230);
    textSize(30);
    fill(0, 0, 0);
    text('Speed +', windowWidth/10*3.5, windowHeight/10*6.3);
    textSize(15);
    text(prixsp + ' coins', windowWidth/10*3.5, windowHeight/10*6.6 );
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10, windowHeight/60);
    fill(0, 255, 230);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10/3*lvlsp1, windowHeight/60 );
    noStroke();
  } else {
    bouton_speed.shapeColor=color(0, 30, 20);
    textSize(30);
    fill(255, 255, 255);
    text('Speed +', windowWidth/10*3.5, windowHeight/10*6.3);
    textSize(15);
    text('Maximum speed', windowWidth/10*3.5, windowHeight/10*6.6);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10, windowHeight/60);
    fill(0, 30, 20);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10/3*lvlsp1, windowHeight/60 );
    noStroke();
  }
  if (vis1==false) {
    bouton_viseur.shapeColor=color(255, 0, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Laser sight', windowWidth/10*6.5, windowHeight/10*6.3);
    textSize(15);
    text(prixvis + ' coins', windowWidth/10*6.5, windowHeight/10*6.6 );
  } else {
    bouton_viseur.shapeColor=color(50, 0, 0);
    textSize(30);
    fill(255, 255, 255);
    text('Laser sight', windowWidth/10*6.5, windowHeight/10*6.3);
    textSize(15);
    text('Purchased', windowWidth/10*6.5, windowHeight/10*6.6);
  }
  if (j2.removed==true && nbrjoueur==2) {
    drawSprite(bouton_rez);
    textSize(18);
    fill(255, 255, 255);
    text('Resuscitation ', windowWidth/10*5, windowHeight/10*5);
    textSize(15);
    text(prixrez + ' coins', windowWidth/10*5, windowHeight/10*5.3 );
  }

  if (mouseIsPressed && pointeur.overlap(bouton_cadence) && gold1>=prixcad && cadence1>10 && chronocl==0) {
    click.play();
    gold1-=prixcad;
    prixcad=prixcad*2;
    cadence1-=5;
    chronocl=30;
    lvlcad1+=1;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_soin) && gold1>=prixsoin && pv1<3 && chronocl==0) {
    click.play();
    gold1-=prixsoin;
    pv1=3;
    prixsoin=prixsoin*1.5;
    prixsoin=prixsoin.toFixed(0);
    heal.play();
    chronocl=30;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_speed) && gold1>=prixsp && speed1<5 && chronocl==0) {
    click.play();
    gold1-=prixsp;
    prixsp=prixsp*3;
    speed1+=1;
    chronocl=30;
    lvlsp1+=1 ;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_viseur) && gold1>=prixvis && vis1==false && chronocl==0) {
    click.play();
    gold1-=prixvis;
    vis1=true;
    chronocl=30;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_rez) && gold2>=prixrez && j2.removed==true && chronocl==0) {
    click.play();
    gold1-=prixrez;
    prixcrez=prixrez*2 ;
    chronocl=30;
    j2=createSprite(windowWidth/2, windowHeight/30*11, 50, 40);
    j2.shapeColor=color(150, 0, 0);
    j2.immovable=true;
    j2.addImage(p2);
    pv2=3;
  }
  if (keyIsDown(89) || mouseIsPressed && mouseX>windowWidth/4*3 || mouseIsPressed && mouseY>windowHeight/4*3 || mouseIsPressed && mouseX<windowWidth/4 || mouseIsPressed && mouseY<windowHeight/4) {
    jeu=11;
  }
}


function shop2() {
  background(100, 40, 0);
  if (chronocl>0) {
    chronocl-=1;
  }
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(20);
  text('Wave : ' + vague, windowWidth/10*5, windowHeight/30*2);
  if (j1.removed==false) {
    vie1();
    textSize(20);
    fill(250, 188, 15);
    text('Coins 1 : '+gold1, windowWidth/10*2, windowHeight/30*2);
  }
  if (j2.removed==false) {
    vie2();
    textSize(20);
    fill(250, 188, 15);
    text('Coins 2 : '+gold2, windowWidth/10*8, windowHeight/30*2);
  }
  textAlign(CENTER);
  fill(255, 255, 255);
  textSize(30);
  text('6 : close the shop ', windowWidth/10*9, windowHeight/30*28);
  fill(200, 100, 100);
  noStroke();
  rect(windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2, 10);
  pointeur=createSprite(windowWidth/2, windowHeight/2, 1, 1);
  pointeur.shapeColor=color(150, 150, 150);
  drawSprite(pointeur);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  drawSprite(bouton_cadence);
  drawSprite(bouton_soin);
  drawSprite(bouton_speed);
  drawSprite(bouton_viseur);

  if (cadence2>11) {
    bouton_cadence.shapeColor=color(230, 200, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Gun rate +', windowWidth/10*3.5, windowHeight/10*3.6);
    textSize(15);
    text(prixcad2 + ' coins', windowWidth/10*3.5, windowHeight/20*8 );
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10, windowHeight/60);
    fill(230, 200, 0);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10/5*lvlcad2, windowHeight/60 );
    noStroke();
  } else {
    bouton_cadence.shapeColor=color(120, 100, 0);
    textSize(30);
    fill(255, 255, 255);
    text('Gun rate +', windowWidth/10*3.5, windowHeight/10*3.6);
    textSize(15);
    text('Maximum gun rate', windowWidth/10*3.5, windowHeight/10*4);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10, windowHeight/60);
    fill(120, 100, 0);
    rect(windowWidth/10*3, windowHeight/20*8.5, windowWidth/10/5*lvlcad2, windowHeight/60 );
    noStroke();
  }

  if (pv2<3) {
    bouton_soin.shapeColor=color(0, 200, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Heal', windowWidth/10*6.5, windowHeight/10*3.6);
    textSize(15);
    fill(0, 0, 0);
    text(prixsoin + ' coins', windowWidth/10*6.5, windowHeight/10*4);
  } else {
    bouton_soin.shapeColor=color(0, 40, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Heal', windowWidth/10*6.5, windowHeight/10*3.6);
    textSize(15);
    fill(0, 0, 0);
    text('Maximum life', windowWidth/10*6.5, windowHeight/10*4);
  }
  if (speed2<5) {
    bouton_speed.shapeColor=color(0, 255, 230);  
    textSize(30);
    fill(0, 0, 0);
    text('Speed +', windowWidth/10*3.5, windowHeight/10*6.3);
    textSize(15);
    text(prixsp2 + ' coins', windowWidth/10*3.5, windowHeight/10*6.6 );
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10, windowHeight/60);
    fill(0, 255, 230);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10/3*lvlsp2, windowHeight/60 );
    noStroke();
  } else {
    bouton_speed.shapeColor=color(0, 30, 20);
    textSize(30);
    fill(255, 255, 255);
    text('Speed +', windowWidth/10*3.5, windowHeight/10*6.3);
    textSize(15);
    text('Maximum speed', windowWidth/10*3.5, windowHeight/10*6.6);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    strokeWeight(2);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10, windowHeight/60);
    fill(0, 30, 20);
    rect(windowWidth/10*3, windowHeight/20*13.7, windowWidth/10/3*lvlsp2, windowHeight/60 );
    noStroke();
  }
  if (vis2==false) {
    bouton_viseur.shapeColor=color(255, 0, 0);
    textSize(30);
    fill(0, 0, 0);
    text('Laser sight', windowWidth/10*6.5, windowHeight/10*6.3);
    textSize(15);
    text(prixvis + ' coins', windowWidth/10*6.5, windowHeight/10*6.6 );
  } else {
    bouton_viseur.shapeColor=color(50, 0, 0);
    textSize(30);
    fill(255, 255, 255);
    text('Laser sight', windowWidth/10*6.5, windowHeight/10*6.3);
    textSize(15);
    text('Purchased', windowWidth/10*6.5, windowHeight/10*6.6);
  }
  if (j1.removed==true) {
    drawSprite(bouton_rez);
    textSize(18);
    fill(255, 255, 255);
    text('Resuscitation ', windowWidth/10*5, windowHeight/10*5);
    textSize(15);
    text(prixrez + ' coins', windowWidth/10*5, windowHeight/10*5.3 );
  }


  if (mouseIsPressed && pointeur.overlap(bouton_cadence) && gold2>=prixcad2 && cadence2>10 && chronocl==0) {
    click.play();
    gold2-=prixcad2;
    prixcad2=prixcad2*2;
    cadence2-=5;
    chronocl=30;
    lvlcad2+=1;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_soin) && gold2>=prixsoin2 && pv2<3 && chronocl==0) {
    click.play();
    gold2-=prixsoin2;
    pv2=3;
    prixsoin2=prixsoin2*1.5;
    prixsoin2=prixsoin2.toFixed(0);
    heal.play();
    chronocl=30;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_speed) && gold2>=prixsp2 && speed2<5 && chronocl==0) {
    click.play();
    gold2-=prixsp2;
    prixsp2=prixsp2*3;
    speed2+=1;
    chronocl=30;
    lvlsp2+=1;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_viseur) && gold2>=prixvis && vis2==false && chronocl==0) {
    click.play();
    gold2-=prixvis;
    vis2=true;
    chronocl=30;
  }
  if (mouseIsPressed && pointeur.overlap(bouton_rez) && gold2>=prixrez && j1.removed==true && chronocl==0) {
    click.play();
    gold2-=prixrez;
    prixcrez=prixrez*2 ;
    chronocl=30;
    j1=createSprite(windowWidth/2, windowHeight/30*18, 50, 40);
    j1.shapeColor=color(0, 0, 150);
    j1.immovable=true;
    j1.addImage(p1);
    pv1=3;
  }
  if (keyIsDown(102) || mouseIsPressed && mouseX>windowWidth/4*3 || mouseIsPressed && mouseY>windowHeight/4*3 || mouseIsPressed && mouseX<windowWidth/4 || mouseIsPressed && mouseY<windowHeight/4) {
    jeu=11;
  }
}
function end() {
  background(0);
  fill(255, 0, 0);
  textSize(windowWidth/22);
  text("GAME OVER", windowWidth/2, windowHeight/2);
  textSize(windowWidth/32);
  text('Wave : ' + vague, windowWidth/2, windowHeight/30*20);
  textSize(windowWidth/36);
  text('Update to replay', windowWidth/2, windowHeight/30*25);
  noLoop();
}
