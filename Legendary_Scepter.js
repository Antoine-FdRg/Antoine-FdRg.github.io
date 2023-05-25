var jeu=0;

var passage=1
var nom=0;
var gold=20;
var habilete=0; 
var endurence=0;
var chance=0;

var infosceptre=0

var inventaire=["Couteau", "Tissu"]
var testtorche=0;
var clickok=true;

function preload(){
  taverne=loadImage('https://media.ouest-france.fr/v1/pictures/e916c0f7350ed7fe473d20fb752521a9-plouvorn-bientot-une-taverne-medievale-pont-prenn.jpg?width=1260&height=712&focuspoint=50%2C50&cropresize=1&client_id=cmsfront&sign=90d4e8bcb229bd84a4e1da688067108a3864484cb0b261e1912c06fe60fd8447')
  /*ruenuit=loadImage('https://live.staticflickr.com/1402/1251152990_c326c69d9e_b.jpg');
  place=loadImage('https://i.pinimg.com/originals/6f/1b/6e/6f1b6e299632274d95c98d58d677028c.jpg');
  chambre=loadImage('http://www.hevercastle.co.uk/wp-content/uploads/2015/07/F8O7648-RT-King-Henry-VIIIs-bedchamber-1020x680.jpg');
  villagejour=loadImage('https://www.esterel-cotedazur.com/wp-content/uploads/external/f68650f3ef7e69f63f6bd19088ba8780-5918527-1000x710.jpg');
  chemin=loadImage('https://upload.wikimedia.org/wikipedia/commons/a/a5/Plailly_%2860%29%2C_chemin_rural_n%C2%B0_42_de_Fontaine-Chaalis.jpg');
  montagne=loadImage('https://kerdowney.com/content/uploads/2015/08/mount-kilimanjaro-tanzania-kilimanjaro-climb-africa.jpg');
  grotte=loadImage('http://www.reserves-naturelles.org/sites/default/files/styles/large900/public/photos/rnn99-carroussel2_2013_11_07.jpg?itok=MGB8_hnM');
  couloirdonjon=loadImage('https://static.planetminecraft.com/files/resource_media/screenshot/1302/grandesalle_4589278.jpg');
  findonjon=loadImage('https://minecraft.fr/wp-content/uploads/2018/07/800px-Salle_du_portail_de_lEnd.png');
  //finalfight=loadImage('');
  //illumination
  cabane=loadImage('https://upload.wikimedia.org/wikipedia/commons/1/16/Conner-prairie-log-cabin-interior.jpg')*/
  click=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fclick.mp3?v=1561235830058')
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  textAlign(CENTER);
  
  pointeur=createSprite(mouseX, mouseY, 1 ,1 );
  pointeur.shapeColor=color(0,0,0);
  boutonplay=createSprite(windowWidth/2,windowHeight/2,windowWidth/4 ,windowHeight/10 );
  boutonplay.shapeColor=color(100,170,200);
  
  bouton1=createSprite(windowWidth/2,windowHeight/10*6,windowWidth/3.5 ,windowHeight/18 );
  bouton1.shapeColor=color(100,170,200);
  bouton2=createSprite(windowWidth/2,windowHeight/10*7,windowWidth/3.5 ,windowHeight/18 );
  bouton2.shapeColor=color(100,170,200);
  
}

function draw(){
  if (jeu==0){
    menu();
  }
  if (jeu==1){
    histoire();
    ath();
  }
  fill(255,255,255)
  text(inventaire.length,50,50);
}

function mousePressed(){
  pointeur=createSprite(mouseX, mouseY, 1 ,1 );
  pointeur.shapeColor=color(0,0,0);
}

function mouseReleased(){
  clickok=true; //reset du clic
  pointeur.remove();
}


function menu(){
  background(0);
  pointeur.position.x=mouseX;
  pointeur.position.y=mouseY;
  drawSprite(pointeur); 
  textSize(windowWidth/15)
  fill(180,250,255)
  text("Le Sceptre",windowWidth/2,windowHeight/20*3);
  text("Légendaire",windowWidth/2,windowHeight/20*5.5);
  boutonplay.position.x=windowWidth/2;
  boutonplay.position.y=windowHeight/2;
  boutonplay.width=windowWidth/4 ;
  drawSprite(boutonplay);
  fill(0);
  textSize(windowWidth/50)
  text("Commencer l'aventure",windowWidth/2,windowHeight/2+windowHeight/60);
  
  if(mouseIsPressed && pointeur.overlap(boutonplay)|| (keyIsDown(32)) ){
      chronoplay=200;
      jeu=1;
      click.play();
      clickok=false;
  }
}


function ath(){
  textSize(windowWidth/50); 
  fill(255,240,130);
  textAlign(LEFT);
  text("__Inventaire__ ",windowWidth/10*7,windowHeight/20*12);
  text("__Statistiques__",windowWidth/10*8.4,windowHeight/20*14);
  textSize(windowWidth/60); 
  textAlign(LEFT);
  text("-"+inventaire[0],windowWidth/10*7.3,windowHeight/20*13);
  for (let i=0; i<inventaire.length; i++){
    text("-"+inventaire[i],windowWidth/10*7.3,windowHeight/20*(13+i));
  }
  text("-Habileté : "+habilete,windowWidth/10*8.6,windowHeight/20*15);
  text("-Endurence : "+endurence,windowWidth/10*8.6,windowHeight/20*16);
  text("-Chance : "+chance,windowWidth/10*8.6,windowHeight/20*17);
}


function histoire(){
  background(0);
  textSize(windowWidth/45); 
  fill(255,240,130);
  textAlign(LEFT);
  if (passage==1){
    if (nom==0){
      nom=prompt("Quel est votre nom aventurier?","Jack")
    }
    text(nom+", vos capacités sont estimées à :",windowWidth/6,windowHeight/20*4)
    if (habilete==0){
      for (let i=0; i<1; i++){
        habilete=Math.floor((Math.random() * 10) + 11);
      }
    }
    text("- Habileté :"+habilete,windowWidth/6,windowHeight/20*5)
    if (endurence==0){
      for (let i=0; i<1; i++){
        endurence=Math.floor((Math.random() * 10) + 11);
      }
    }
    text("- Endurence :"+endurence,windowWidth/6,windowHeight/20*6)
    if (chance==0){
      for (let i=0; i<1; i++){
        chance=Math.floor((Math.random() * 10) + 11);
      }
    }
    text("- Chance :"+chance,windowWidth/6,windowHeight/20*7)
    text("Vous possédez "+gold+" pièces d'or, un couteau et de simples vêtements en tissu.",windowWidth/6,windowHeight/20*8)
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Comencer l'aventure",bouton1.position.x, bouton1.position.y+windowHeight/80);
    pointeur.position.x=mouseX;
    pointeur.position.y=mouseY;
    drawSprite(pointeur); 
    if(mouseIsPressed && pointeur.overlap(bouton1)){
      passage=2;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==2){          //DEBUT 2
    background(taverne);
    textSize(windowWidth/55); 
    text("Année : 1257  Roi : Alphred IV  Lieu : Royaume Rifascin, Bourg-en-Bois",windowWidth/6,windowHeight/20*3);
    textSize(windowWidth/45); 
    text("Vous vous rendez à la taverne, comme tous les samedis soir. Il est 21:00. Vous",windowWidth/6,windowHeight/20*5);
    text('vous installez au comptoir. Le tavernier s\'approche de vous: ',windowWidth/6,windowHeight/20*6);
    text('"Bonsoir '+ nom+', j\'te sers quoi ce soir?"',windowWidth/6,windowHeight/20*7);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Un verre d'hydromel",bouton1.position.x, bouton1.position.y+windowHeight/80);
    bouton2.position.x=windowWidth/3;
    drawSprite(bouton2);
    text("Un verre de vin",bouton2.position.x, bouton2.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=3;
      click.play();
      clickok=false;
    }
    if(mouseIsPressed && pointeur.overlap(bouton2) && clickok==true){
      passage=3;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==3){        //COMMANDER 3
    background(taverne);
    text("Vous commandez votre verre. Le tavernier revient peu de temps après. Il vous ",windowWidth/6,windowHeight/20*4);
    text("donne votre boisson. Vous entendez une voix qui vous appelle:",windowWidth/6,windowHeight/20*5);
    text('"'+nom+' !"',windowWidth/6,windowHeight/20*6);
    text('Vous tournez la tête et apercevez trois de vos amis assis autours d\'une table.',windowWidth/6,windowHeight/20*7);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Se lever pour les rejoindre",bouton1.position.x, bouton1.position.y+windowHeight/80);
    bouton2.position.x=windowWidth/3;
    drawSprite(bouton2);
    text("Rester au comptoir",bouton2.position.x, bouton2.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=4.1;
      click.play();
      clickok=false;
    }
    if(mouseIsPressed && pointeur.overlap(bouton2) && clickok==true){
      passage=4.2;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==4.1){          //LES REJOINDRE 4.1
    background(taverne);
    text("Vous allez vous assoir avec eux. Ils se racontent des légendes celtes. Le",windowWidth/6,windowHeight/20*4);
    text("conteur se penche et attrape des torches et en distribue une à chacun ",windowWidth/6,windowHeight/20*5);
    text("d'entre vous puis quitte la taverne.",windowWidth/6,windowHeight/20*6);
    fill(180, 255, 255);
    text("Vous obtenez une torche",windowWidth/6,windowHeight/20*8);
    if (testtorche==0){
      inventaire.push("Torche");
      testtorche=1;
    }
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Quitter la taverne",bouton1.position.x, bouton1.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=5;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==4.2){          //LES IGNORER 4.2
    background(taverne);
    text("Vous préferez rester seul(e). Vous recommendez un verre puis vous ennuyez .",windowWidth/6,windowHeight/20*4);
    text("rapidement.",windowWidth/6,windowHeight/20*5);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Quitter la taverne",bouton1.position.x, bouton1.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=5;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==5){          //QUITTER... 5
    background(taverne);
    text("En vous approchant de la sortie, le vieil homme assis à côté de la porte ",windowWidth/6,windowHeight/20*4);
    text("vous attrape brusquement le poignez et vous dit :",windowWidth/6,windowHeight/20*5);
    text('"'+nom+' viens t\'assoir."',windowWidth/6,windowHeight/20*6);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("S\'asseoir",bouton1.position.x, bouton1.position.y+windowHeight/80);
    bouton2.position.x=windowWidth/3;
    drawSprite(bouton2);
    text("Partir",bouton2.position.x, bouton2.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=6.1;
      click.play();
      clickok=false;
    }
    if(mouseIsPressed && pointeur.overlap(bouton2) && clickok==true){
      passage=6.2;
      click.play();
      clickok=false;
    }
  }

  if (passage==6.1){          //S'ASSEOIR... 6.1
    background(taverne);
    text('"Je m\'appelle Arkasi, j\'ai besoin de ton aide. Le monde est menacé. La Fin ' ,windowWidth/6,windowHeight/20*4);
    text('est de retour ! Mais je m\'emporte, peut-être devrais-je t\'expliquer l\'histoire.',windowWidth/6,windowHeight/20*5);
    text('Depuis l\'an -3257 la Fin menace le monde tous les millénaires. Je ne sais pas à ',windowWidth/6,windowHeight/20*6);
    text('quoi elle ressemble Fin car seul l\'Élu est capable de la voir. Tous les ' ,windowWidth/6,windowHeight/20*7);
    text('millénaires, je suis chargé de trouver un héros pour l\'arrêter. Cette fois-ci ',windowWidth/6,windowHeight/20*8);
    text('c\'est ton tour. Pour ce faire tu devras trouver la seule arme capable d\'arrêter',windowWidth/6,windowHeight/20*9);
    text(' la Fin : le Sceptre Légendaire."',windowWidth/6,windowHeight/20*10);

    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("D'accord, au revoir",bouton1.position.x, bouton1.position.y+windowHeight/80);
    bouton2.position.x=windowWidth/3;
    drawSprite(bouton2);
    text("Où est le Sceptre?",bouton2.position.x, bouton2.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=7;
      click.play();
      clickok=false;
    }
    if(mouseIsPressed && pointeur.overlap(bouton2) && clickok==true){
      passage=7;
      click.play();
      clickok=false;
    }
  }
  
  if (passage==6.2){          //PARTIR 6.2
    background(taverne);
    text('"Assieds-toi!"',windowWidth/6,windowHeight/20*4);
    text('Une force vous assois contre votre gré.',windowWidth/6,windowHeight/20*5);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Ha d'accord",bouton1.position.x, bouton1.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=6.1;
      click.play();
      clickok=false;
    }
  }
  
  /*if (passage==7){          //EXPLICATION SCEPTRE 7
    text('"Assieds-toi!"',windowWidth/6,windowHeight/20*4);
    text('Une force vous assois contre votre gré.',windowWidth/6,windowHeight/20*5);
    
    bouton1.position.x=windowWidth/3;
    drawSprite(bouton1);
    textAlign(CENTER);
    fill(0);
    text("Ha d'accord",bouton1.position.x, bouton1.position.y+windowHeight/80);
    if(mouseIsPressed && pointeur.overlap(bouton1) && clickok==true){
      passage=6.1;
      click.play();
      clickok=false;
    }
  }*/
}