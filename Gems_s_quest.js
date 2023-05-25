var sol; //sprite du sol
var fond;//image du fond
var perso_walk;//animation du personnage en mouvement
var perso_wait;//animation du personnage immobile
var perso;//sprite du personnage
var isjump=false;//test pour savoir si le personnage saute
var plateforme1,plateforme2,plateforme3,plateforme4,plateforme5,plateforme6,plateforme7,plateforme8,plateforme9;//sprites des palteformes
var lvl=1;//niveau atteint
var speed;//vitesse du personnage
var sortie;//sprite de la sortie du niveau
var exit;//image du niveau
var lave; //sprite tuant le personnage si il atteint le bas de la fenêtre
var grp_stars;//groupe des étoiles
var imageetoile;//varable aleatoire pour sélectionner l'image des étoiles
var pouvoir,espace,realite,ame,temps,esprit;//image des étoiles
var stars;//sprite des étoiles
var score=0;//score du joueur
var sprint=false;//test pour savoir si le personnage court
var nrg;//endurence permettant au joueur de courir, impossible de courir si elle atteint 0
var nrgm=300;//endurence initiale
var nrg=nrgm;//définition de l'endurence à l'endurence initiale
var grp_plfm;//groupe de plateformes pour gérer plus facilement les collisions
var chrono=5400;//temps disponible pour faire le plus grand score
var direction3=1;//direction du mouvement de la plateforme 3 (0:gauche , 1:droite)
var direction4=0;//direction du mouvement de la plateforme 4 (0:gauche , 1:droite)
var speedp;//vitesse de déplacement des plateformes
 
 
function preload(){
  fond=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fspace.png?v=1561411910029');//chargement de l'image du fond
  perso_walk=loadAnimation("https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpersomove-01.png?v=1561411910975","https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpersomove-02.png?v=1561411910463","https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpersomove-01.png?v=1561411910975","https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpersomove-04.png?v=1561411911167");//chargement de l'animation du personnage qui marche
  perso_wait=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpersostand-01.png?v=1561411910595');//chargement de l'animation du personnage immobile
  exit=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fportail.png?v=1561411914493');//chargement de l'image de la sortie
  pouvoir=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpouvoir.png?v=1561411887659');//chargement de l'image des étoiles
  espace=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fespace.png?v=1561411882975');//chargement de l'image des étoiles
  realite=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Frealite.png?v=1561411898962');//chargement de l'image des étoiles
  ame=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fame.png?v=1561411881986');//chargement de l'image des étoiles
  temps=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ftemps.png?v=1561411900372');//chargement de l'image des étoiles
  esprit=loadImage('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fesprit.png?v=1561411884342');//chargement de l'image des étoiles
  son1=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fcoin.mp3?v=1561413828506');//chargement du son lors du ramassage d'une étoile
  son2=createAudio('https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fportail_sound.mp3?v=1561411930502');//chargement du son lors du contact du personnage avec la sortie 
}

function setup() {
  createCanvas(windowWidth,windowHeight);//création de la fenetre de jeu
  speed=windowWidth/800;//la vitesse du personnage est adaptée à la taille de la fenêtre
  speedp=windowWidth/1066;//la vitesse de plateforme est adaptée à la taille de la fenêtre
  
 //sprite du sol
  sol=createSprite(windowWidth/2,windowHeight-15,windowWidth/16*3,windowHeight/70);//création
  sol.immovable=true;//il est immobile
  sol.shapeColor=color(250,random(110,255),0);//de couleur aléatoire
  
 //sprite du personnage
  perso=createSprite(sol.position.x,windowHeight-50);// création du personnage
  perso_bouge=perso.addAnimation("walk",perso_walk);// ajout des animations de déplacements
  perso_attend=perso.addAnimation("wait",perso_wait);//animation d'immobilité
  perso.changeAnimation("wait");// mise en position attente...
  
  //sprite des plateformes dasn un fonction pour le replacer de manière aléatoire à chaque niveau
  plfm();

 //sprite de la sortie
  sortie=createSprite(random(windowWidth/38*10,windowWidth/38*28),50);//création à une position aléatoire
  sortie.addImage(exit);//ajout d'une texture
  
 //sprite de ligne inférieure du la fenêtre du jeu où le personnage meurt
  lave=createSprite(windowWidth/2,windowHeight+5,windowWidth,windowHeight/70);//création du sprite 
  lave.shapeColor = color(255,50,0);//couleur rouge orangée
  
 //sprites des étoiles
  grp_stars= new Group(); //nouveau groupe de sprites pour gérer plus facilement les collisions
  for(var i=0;i<6;i++){//création de 6 sprites grace a une boucle
    stars=createSprite(random(100,windowWidth-100),random(0,windowHeight-350));//sprite à des positions aleatoire
    if(i==0){ //si la boucle se joue pour la 1ere fois
    stars.addImage(pouvoir);//les sprite sont des pierres magiques
    }
    if(i==1){//si la boucle se joue pour la 2eme fois
    stars.addImage(espace);//les sprite sont des pierres magiques
    }
    if(i==2){//si la boucle se joue pour la 3eme fois
    stars.addImage(realite);//les sprite sont des pierres magiques
    }
    if(i==3){//si la boucle se joue pour la 4eme fois
    stars.addImage(ame);//les sprite sont des pierres magiques
    }
    if(i==4){//si la boucle se joue pour la 5eme fois
    stars.addImage(temps);//les sprite sont des pierres magiques
    }
    if(i==5){//si la boucle se joue pour la 6eme fois
    stars.addImage(esprit);//les sprite sont des pierres magiques
    }
    stars.setVelocity(0,windowHeight/722);//elles tombent continuellement
    grp_stars.add(stars);//ces sprite apprtiennent au groupe
  }//fermeture de la boucle
}

function draw() {
  background(fond,0,0);//le fond est une image
  chrono=chrono-1;//le temps s'écoule en diminuant la valeur du chronometre
  if(chrono>4800){//pendant 10 sec un tutoriel s'affiche
    //image(info,windowWidth/2-150,windowHeight/5);//une image indiquant les touches de dépacement
    textSize(35);//texte de taille moyenne
    fill(255,255,255); //couleur orange
    text('Ramassez le maximum de pierres',windowWidth/3,windowHeight/5*4.1);  // but du jeu
    text('Atteignez le portail pour accéder au niveau suivant',windowWidth/4,windowHeight/5*4.4); // but du jeu
  }
  perso.addSpeed(windowHeight/3610, 90);// gère la gravité adaptée à la taille de la fenêtre dans la direction y puisque l'angle est de 90°
 //on gère les collisions
  perso.bounce(sol,frottement);// collision avec le sol qui renvoie à la fonction frottement
  perso.bounce(grp_plfm,frottement);//collision entre le perosonnage et les plateforme qui renvoie à la fonction frottement
  perso.bounce(plateforme3,frottement);//les plateformes 3 et 4 sont sépareées du groupe car sont mouvantes
  perso.bounce(plateforme4,frottement);
  grp_stars.bounce(sol,rebond);//collisions entre les etoiles et le sol qui renvoie a la fonction rebond
  grp_stars.bounce(grp_plfm,rebond);//collisions entre les etoiles et les plateformes qui renvoie a la fonction rebond
  grp_stars.bounce(plateforme3,rebond);//collisions entre les etoiles et les plateformes qui renvoie a la fonction rebond
  grp_stars.bounce(plateforme4,rebond);//collisions entre les etoiles et les plateformes qui renvoie a la fonction rebond
  perso.overlap(grp_stars,contact);//collision entre les personnage et les etoiles qui renvoie a la fonction contact
  drawSprites();//affichage des sprites
  sortie.rotation+=0.6;//le sprite de la sortie tourne sur lui meme
  if (perso.overlap(sortie)){ //si le personnage touche la sortie
    changementNiveau(); //on appelle la fonction changementNiveau
  }
  textSize(15); // texte de petite taille
  fill(255,255,255); //couleur blanche
  text("Niveau : "+lvl,windowWidth/30,windowHeight/35*3); //affichage de niveau
  text("Score : "+score,windowWidth/30,windowHeight/35*4); //affichage du score
  text("Temps : "+Math.round(chrono/60),windowWidth/30,windowHeight/35*5);//affichage du temps restant
  textAlign(RIGHT);
  text("Déplacements et saut : Q, D / flèches directionnelles",windowWidth/30*29.5,windowHeight/35*2);//indication des touches
  text("Courir : Maj / 0",windowWidth/30*29.5,windowHeight/35*3);//indication des touches
  textAlign(LEFT);
  perso.overlap(lave,gameover); //si le personnage touche la lave on appelle la fonction gameover
  courir();//on appelle la fonction faisant courir le personnage
  mouvement();//on appelle la fonction se déplacer le personnage
  if(chrono<0){//si le temps restant est nul
    gameover();//alors on appelle la fonction gameover
  }
  movePlfm3();//fonction de deplacement de la plateforme 3
  movePlfm4();//fonction de deplacement de la plateforme 3
 //barre d'endurence
  fill(130,110,10);//couleur jaune foncé
  rect(windowWidth/30,windowHeight/35,windowWidth/10,windowHeight/35);//rectangle de fond(barre vide)
  fill(255,210,5);//couleur jaune
  rect(windowWidth/30,windowHeight/35,windowWidth/100*nrg/30,windowHeight/35);//rectangle de barre remplie
  fill(0,0,0);//couleur noire
  text("Endurence : "+Math.round(nrg/30),windowWidth/25,windowHeight/20);//valeur de l'énergie restante
}


function plfm(){//fonction créant les plateformes à des positions légèrement aléatoires        etage 1 : en bas / etage 4 : en haut
  plateforme1=createSprite(windowWidth/38*3,windowHeight-15,windowWidth/16*2,windowHeight/70);//etage 1-gauche
  plateforme1.immovable=true; //sprite immobile
  plateforme1.shapeColor=color(255,random(110,255),0); //couleur aleatoire proche du jaune orangé
  plateforme2=createSprite(windowWidth/38*35,windowHeight-15,windowWidth/16*2,windowHeight/70);//etage 1-droite
  plateforme2.immovable=true;//sprite immobile
  plateforme2.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme3=createSprite(windowWidth/16*6,windowHeight/25*19,windowWidth/16*2.4,windowHeight/70);//etage 2-gauche 
  plateforme3.immovable=true;//sprite immobile
  plateforme3.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme4=createSprite(windowWidth/16*10,windowHeight/25*19,windowWidth/16*2.4,windowHeight/70);//etage 2-droite 
  plateforme4.immovable=true;//sprite immobile
  plateforme4.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme5=createSprite(windowWidth/38*3,windowHeight/25*13,windowWidth/16,windowHeight/70);//etage 3-gauche
  plateforme5.immovable=true;//sprite immobile
  plateforme5.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme6=createSprite(random(windowWidth/16*7,windowWidth/16*9),windowHeight/25*13,windowWidth/16*2,windowHeight/70);//etage 3-centre
  plateforme6.immovable=true;//sprite immobile
  plateforme6.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme7=createSprite(windowWidth/38*35,windowHeight/25*13,windowWidth/16,windowHeight/70);//etage 3-droite
  plateforme7.immovable=true;//sprite immobile
  plateforme7.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme8=createSprite(windowWidth/38*13,windowHeight/25*7,windowWidth/16,windowHeight/70);//etage 4-gauche
  plateforme8.immovable=true;//sprite immobile
  plateforme8.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  plateforme9=createSprite(windowWidth/38*25,windowHeight/25*7,windowWidth/16,windowHeight/70);//etage 4-droite
  plateforme9.immovable=true;//sprite immobile
  plateforme9.shapeColor=color(255,random(110,255),0);//couleur aleatoire proche du jaune orangé
  grp_plfm=new Group();//nouveau groupe de sprite pour les plateformes
  grp_plfm.add(plateforme1);// où l'on ajoute toutes les plateformes sauf les mouvantes
  grp_plfm.add(plateforme2);
  grp_plfm.add(plateforme5);
  grp_plfm.add(plateforme6);
  grp_plfm.add(plateforme7);
  grp_plfm.add(plateforme8);
  grp_plfm.add(plateforme9);

}


function movePlfm3(){//fonction de deplacement de la plateforme 3
  if(direction3==1){//si la direction de la plateforme est de 1 
    plateforme3.position.x=plateforme3.position.x+speedp;// alors la plateforme se déplace vers la droite
  }else if(direction3==0){//si la direction de la plateforme est de 0 
    plateforme3.position.x=plateforme3.position.x-speedp;// alors la plateforme se déplace vers la gauche
  }
  if(plateforme3.position.x>windowWidth/16*6.8){//arrivée à un certain point à droite
    direction3=0;//la direction de la plateforme change
  }
  if(plateforme3.position.x<windowWidth/16*5){//arrivée à un certain point à gauche
    direction3=1;//la direction de la plateforme change
  }
}


function movePlfm4(){//fonction de deplacement de la plateforme 3
  if(direction4==1){//si la direction de la plateforme est de 1 
    plateforme4.position.x=plateforme4.position.x+speedp;// alors la plateforme se déplace vers la droite
  }else if(direction4==0){//si la direction de la plateforme est de 0
    plateforme4.position.x=plateforme4.position.x-speedp;// alors la plateforme se déplace vers la gauche
  }  
  if(plateforme4.position.x>windowWidth/16*11){//arrivée à un certain point à droite
    direction4=0;//la direction de la plateforme change
  }
  if(plateforme4.position.x<windowWidth/16*9.2){//arrivée à un certain point à gauche
    direction4=1;//la direction de la plateforme change
  }
}


function frottement(){//fonction gérant la chute du personnage
  perso.position.y=perso.position.y+1;//le personnage descend
  if(perso.overlap(grp_plfm) || perso.overlap(sol)){//si le personnage touche une plateforme ou le sol
    perso.velocity.y=0;//alors il ne tombe plus
    isjump=false;//et il n'est pas en train de sauter
  }else{//sinon
    perso.velocity.y=0;//il ne tombe plus
  } 
  if (perso.overlap(plateforme3) || perso.overlap(plateforme4)){// si le prsonnage touche une plateforme mouvante
    if(perso.overlap(plateforme3)){//si c'est la 3
      if(direction3==0){//et qu'elle se déplace vers la gauche
        perso.position.x=perso.position.x-speedp;//alors le personnage se deplace vers la gauche
      }else{//sinon
        perso.position.x=perso.position.x+speedp; //le personnage se deplace vers la droite
      }
    }
    if(perso.overlap(plateforme4)){//si c'est la 4
      if(direction4==0){//et qu'elle se déplace vers la gauche
        perso.position.x=perso.position.x-speedp;//alors le personnage se deplace vers la gauche
      }else{
        perso.position.x=perso.position.x+speedp; //alors le personnage se deplace vers la droite
      }
    }
    perso.velocity.y=0;//alors il ne tombe plus
    isjump=false;//et il n'est pas en train de sauter
  } 
}
 
 
function courir(){//fonction gérant la course du personnage
  if(keyIsDown(16)&&nrg>nrgm/10 || keyIsDown(96)&&nrg>nrgm/10){//si les touche maj gauche ou 0 sont préssées et que l'énergie actuelle est plus grande que le minimum requis pour courir(un dixieme de l'énergie maximale)
    sprint=true;//alors le personnage court
  } else {//sinon
     sprint=false;//il ne court pas
   }
  if(keyIsDown(16) && nrg>0 || keyIsDown(96) && nrg>0){//si les touche maj gauche ou 0 sont préssées et que l'énergie est plus grande que 0
    nrg=nrg-1;//alors l'énergie diminue
  } else if(nrg<nrgm){// sinon si l'énergie est plus petite que l'énergie maximale
     nrg=nrg+1;//alors l'énergie remonte
   }  
  }


function mouvement(){//fonction de déplacement du personnage
  if (keyIsDown(90) || keyIsDown(38)){//si on appuie sur les touches z ou fleche du haut
      if(isjump==false){//si le personnage de saute pas
         perso.addSpeed(windowHeight/80, 270); //alors il est est envoyé à  une hauteur dépendant de la taille de la fenêtre
         isjump=true;//et il saute
       }
  }        
  if (keyIsDown(81) || keyIsDown(37)){// si les touchent q ou flèche gauche sont préssées
      perso.mirrorX(-1); // symétrie en x du personnage
      perso.changeAnimation("walk");// le personnage joue l'animation walk
    if(sprint==false){//si le personnage ne court pas
      perso.velocity.x=-speed;//alors il se deplace vers la gauche en fonction de la vitesse
    }else{//sinon
      perso.velocity.x=-(speed*1.5); //il se deplace vers la gauche en fonction de 150% de la vitesse 
    }
   }else if (keyIsDown(68) || keyIsDown(39)){// si les touchent d ou flèche droite sont préssées
     perso.mirrorX(1);// symétrie en x du personnage
     perso.changeAnimation("walk");// le personnage joue l'animation walk
     if(sprint==false){//si le personnage ne court pas
       perso.velocity.x=speed;//alors il se deplace vers la droite en fonction de la vitesse
     }else{//sinon
       perso.velocity.x=speed*1.5; //il se deplace vers la droite en fonction de 150% de la vitesse 
     }
   }else{//sinon (aucune touche pressée)
     perso.changeAnimation("wait");// le personnage joue l'animation wait
     perso.velocity.x=0;//le personnage est immobile
   }
 }
                     
                     
function rebond(etoile){//fonction qui fait rebondir les etoiles
  etoile.velocity.y=-0.1*lvl;//les étoiles remontent à une vitesse dépendant du niveau
}


function contact(sprite_1,sprite_2){//fonction gérant le contact entre personnage et étoiles
  sprite_2.remove();//l'étoile est supprimée
  score=score+1;//le score augmente
  son1.play();//un son est joué 
}

function changementNiveau(){//fonction gérant le passage au niveau suivant
  lvl=lvl+1;//le niveau augmente
  nrg=nrgm;//l'énergie remonte au maximum
  son2.play();//un son de portail magique est joué
  for (var i = grp_stars.length; i--; grp_stars[i].remove());//on supprime les étoile restantes
  perso.position.x=windowWidth/2;//le personnage revient à sa position initiale
  perso.position.y=windowHeight-30;//le personnage revient à sa position initiale
  for(var i=0;i<6;i++){//on recrée 10 étoiles
    stars=createSprite(random(100,windowWidth-100),random(0,windowHeight-350));
    if(i==0){ //si la boucle se joue pour la 1ere fois
    stars.addImage(pouvoir);//les sprite sont des pierres magiques
    }
    if(i==1){//si la boucle se joue pour la 2eme fois
    stars.addImage(espace);//les sprite sont des pierres magiques
    }
    if(i==2){//si la boucle se joue pour la 3eme fois
    stars.addImage(realite);//les sprite sont des pierres magiques
    }
    if(i==3){//si la boucle se joue pour la 4eme fois
    stars.addImage(ame);//les sprite sont des pierres magiques
    }
    if(i==4){//si la boucle se joue pour la 5eme fois
    stars.addImage(temps);//les sprite sont des pierres magiques
    }
    if(i==5){//si la boucle se joue pour la 6eme fois
    stars.addImage(esprit);//les sprite sont des pierres magiques
    }
    stars.setVelocity(0,windowHeight/722);//elles tombent continuellement
    grp_stars.add(stars);//ces sprite apprtiennent au groupe
  }//fermeture de la boucle
  for (var i = grp_plfm.length; i--; grp_plfm[i].remove());//on supprime les plateformes
  plateforme3.remove();//on supprime les plateformes
  plateforme4.remove();//on supprime les plateformes
  plfm();//on les recrées pour changer légèrement leur positions
  
  sortie.remove();//on supprime la sorie
  sortie=createSprite(random(windowWidth/38*10,windowWidth/38*28),50);//et on la recrée à une nouvelle position aléatoire
  sortie.addImage(exit);//et on ajoute l'image du portail magique
}

function gameover(){//fonction gérant l fin du jeu
  background(0,0,0);//le fond est noir
  fill(255,0,0);//couleur rouge
  textSize(40);//texte de grand taille
  text("Niveau : " + lvl,windowWidth/2-100,windowHeight/2+180);//on indique le niveau final
  text("Score : " + score,windowWidth/2-90,windowHeight/2+230);//on indique le score final
  textSize(60);//texte de très grande taile
  text("GAME OVER",windowWidth/2-200,windowHeight/2-150);// ecriture de "GAME OVER"
  for (var i = grp_stars.length; i--; grp_stars[i].remove())//on supprime les étoiles restantes
  for (var i = grp_plfm.length; i--; grp_plfm[i].remove())//on supprime les plateformes restantes
  noLoop();//on arrete le programme
}