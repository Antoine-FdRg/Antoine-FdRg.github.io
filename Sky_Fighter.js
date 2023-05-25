var jeu = 0;
var chronoplay;
var chronopropre;
var chronofin;
var objectif = 0;
var bonusx;
var bonusy;
var numbonusx;
var numbonusy;

var mitraillette = new Object();
var mitraillette = { cadence: "10", degats: "6" };
var pistolet = new Object();
var pistolet = { cadence: "20", degats: "11" };
var fusil = new Object();
var fusil = { cadence: "40", degats: "17" };
var pompe = new Object();
var pompe = { cadence: "80", degats: "5", plombs: "6" };
var mulths = 1.8; //1.8

var manchemenu = 1;
var sol,
  perso1,
  perso2,
  tir1,
  tir2,
  sld1 = 0,
  sld2 = 0,
  point1 = 0,
  point2 = 0;
var checkslider = false;
var arme1 = 2;
var arme2 = 2;
var map = 1; //classsique, le pillier, iceberg, grotte, ville fantôme
var plateforme1,
  plateforme2,
  plateforme3,
  plateforme4,
  plateforme5,
  plateforme6,
  plateforme7,
  plateforme8,
  grp_plfm;
var murb, murg, murd;
var dgtmur = 15;
var testtete1 = 0,
  testtete2 = 0;
var perso1_walk, perso1_wait, perso2_walk, perso2_wait;
var persosld_walk, persosld_wait;
var isjump1 = false;
var isjump2 = false;
var direc1 = 1;
var direc2 = 2;
var speed1 = 4;
var speed2 = 4;
var resetvelocity1 = false,
  boopé1 = false;
var resetvelocity2 = false,
  boopé2 = false;
var viemax = 100;
var damage1;
var damage2;
var damage1b = 35;
var damage2b = 35;
var cadence1;
var cadence2;
var chronotir1 = 0;
var chronotir2 = 0;

var heal, soin;
var boost, dmgx2;
var shield, invincibilité;
var speed, vitesse;
var healact = "ok";
var shieldact = "ok";
var boostact = "ok";
var vitesseact = "ok";
var clickok = true;

var chronobonus = 360; //temps initial d'apparition d'un bonus
var powerup = 0;
var direcbonus = 1;
var chronodmg1 = 0;
var chronodmg2 = 0;
var chronosld1 = 0;
var chronosld2 = 0;
var chronovit1 = 0;
var chronovit2 = 0;

var direction6 = 0;
var directionsol = 0;
var direction1 = 0;
var direction2 = 0;
var direction3 = 0;
var direction4 = 0;
var speedp = 2;

var chronogaz = 0;
var timegaz = 1800; //1800
var manchemenu = 0;
var chronohab1 = 0,
  chronohab2 = 0;
var hab1 = 1; // 1: dash , 2: blast , 3: repulsor , 4: jump
var hab2 = 1;
var delaihab = 360;

function preload() {
  titre = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ftitre.png?v=1579628043650"
  );
  fond1 = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffond2.jpg?v=1561379678558"
  );
  fond2 = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffondjungle.jpg?v=1578773572249"
  );
  fond3 = loadImage(
    "https://cdn.glitch.com/fd0959a2-266c-4c3f-af69-d0733ced8ca5%2Ffondglace.jpg?v=1574505108665"
  );
  fond4 = loadImage(
    "https://cdn.glitch.com/fd0959a2-266c-4c3f-af69-d0733ced8ca5%2Ffondgrotte.jpg?v=1574521158577"
  );
  fond5 = loadImage(
    "https://cdn.glitch.com/fd0959a2-266c-4c3f-af69-d0733ced8ca5%2Ffondbrume.jpg?v=1574606905227"
  );
  perso1_walk = loadAnimation(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso1-1.png?v=1574251293302",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso1-2.png?v=1574251293144",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso1-1.png?v=1574251293302",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso1-4.png?v=1574251293201"
  );
  perso1_wait = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso1-1.png?v=1574251293302"
  );
  perso2_walk = loadAnimation(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso2-1.png?v=1574251293242",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso2-2.png?v=1574251293342",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso2-1.png?v=1574251293242",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso2-4.png?v=1574251293273"
  );
  perso2_wait = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso2-1.png?v=1574251293242"
  );
  tete = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fhead.png?v=1574192256381"
  );
  persosld_walk = loadAnimation(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso-1sld.png?v=1561284196760",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso-2sld.png?v=1561284197997",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso-1sld.png?v=1561284196760",
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso-4sld.png?v=1561284198354"
  );
  persosld_wait = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fperso-1sld.png?v=1561284196760"
  );
  pm = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fpm.png?v=1579708491998"
  );
  gun = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fgun.png?v=1579708491951"
  );
  rifle = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Frifle.png?v=1579709629894"
  );
  shotgun = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fshotgun.png?v=1579708492085"
  );
  heal = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fheal.png?v=1561284197155"
  );
  shield = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fshield.png?v=1561284198080"
  );
  boost = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fdmgx2.png?v=1561284195963"
  );
  speed = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fvitesse.png?v=1561284198759"
  );
  repulsor1 = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Frepulsor%201.png?v=1580311984783"
  );
  repulsor2 = loadImage(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Frepulsor%202.png?v=1580311984890"
  );
  sondgt = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fdgt.mp3?v=1561284192381"
  );
  sonhs = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fson%20HS.mp3?v=1575475899627"
  );
  sontp = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2FTeleport.mp3?v=1578767368923"
  );
  sonheal = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fsoulagement.mp3?v=1571481661074"
  );
  feu = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Ffeu.mp3?v=1561284192640"
  );
  cri = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Froar.mp3?v=1561284198707"
  );
  sonshield = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fshield.mp3?v=1561284195779"
  );
  click = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fclick.mp3?v=1561235830058"
  );
  countdown = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2Fdecompte.mp3?v=1561284195553"
  );
  musique = createAudio(
    "https://cdn.glitch.com/c9cab909-f4dc-4c2d-acb9-77f7ddd405c3%2FTransforyou.mp3?v=1578768350084"
  );
  map = 1;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vie1 = viemax;
  vie2 = viemax;
  chronobonus = 360;
  powerup = 0;
  chronogaz = 0;
  chronodmg1 = 0;
  chronodmg2 = 0;
  chronosld1 = 0;
  chronosld2 = 0;

  pointeur = createSprite(mouseX, mouseY, 1, 1);
  pointeur.shapeColor = color(100, 100, 100);
  boutonplay = createSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 4,
    windowHeight / 10
  );
  boutonplay.shapeColor = color(0, 170, 200);

  boutonpm1 = createSprite(
    windowWidth / 14,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpm1.shapeColor = color(0, 100, 200);
  boutonpistolet1 = createSprite(
    (windowWidth / 14) * 2,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpistolet1.shapeColor = color(0, 100, 200);
  boutonfusil1 = createSprite(
    (windowWidth / 14) * 3,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonfusil1.shapeColor = color(0, 100, 200);
  boutonpompe1 = createSprite(
    (windowWidth / 14) * 4,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpompe1.shapeColor = color(0, 100, 200);

  boutonpm2 = createSprite(
    (windowWidth / 14) * 10,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpm2.shapeColor = color(0, 100, 200);
  boutonpistolet2 = createSprite(
    (windowWidth / 14) * 11,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpistolet2.shapeColor = color(0, 100, 200);
  boutonfusil2 = createSprite(
    (windowWidth / 14) * 12,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonfusil2.shapeColor = color(0, 100, 200);
  boutonpompe2 = createSprite(
    (windowWidth / 14) * 13,
    (windowHeight / 8) * 3,
    windowWidth / 17,
    windowHeight / 12
  );
  boutonpompe2.shapeColor = color(0, 100, 200);

  boutondash1 = createSprite(
    windowWidth / 14,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutondash1.shapeColor = color(0, 100, 200);
  boutonblast1 = createSprite(
    (windowWidth / 14) * 2,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonblast1.shapeColor = color(0, 100, 200);
  boutonboop1 = createSprite(
    (windowWidth / 14) * 3,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonboop1.shapeColor = color(0, 100, 200);
  boutonboop1 = createSprite(
    (windowWidth / 14) * 3,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonboop1.shapeColor = color(0, 100, 200);
  boutonjump1 = createSprite(
    (windowWidth / 14) * 4,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonjump1.shapeColor = color(0, 100, 200);

  boutondash2 = createSprite(
    (windowWidth / 14) * 10,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutondash2.shapeColor = color(0, 100, 200);
  boutonblast2 = createSprite(
    (windowWidth / 14) * 11,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonblast2.shapeColor = color(0, 100, 200);
  boutonboop2 = createSprite(
    (windowWidth / 14) * 12,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonboop2.shapeColor = color(0, 100, 200);
  boutonjump2 = createSprite(
    (windowWidth / 14) * 13,
    windowHeight / 2,
    windowWidth / 22,
    windowHeight / 15
  );
  boutonjump2.shapeColor = color(0, 100, 200);

  slider = createSprite(
    (windowWidth / 10) * 3.625,
    (windowHeight / 7) * 5 + windowHeight / 180,
    windowWidth / 60,
    windowHeight / 20
  );
  slider.shapeColor = color(0, 170, 200);

  boutonparam = createSprite(
    (windowWidth / 6) * 3,
    (windowHeight / 10) * 9,
    windowWidth / 8,
    windowHeight / 8
  );
  boutonparam.shapeColor = color(0, 170, 200);

  boutonheal = createSprite(
    (windowWidth / 6) * 1.5,
    (windowHeight / 10) * 9,
    windowWidth / 8,
    windowHeight / 10
  );
  boutonheal.shapeColor = color(0, 170, 200);
  boutonshield = createSprite(
    (windowWidth / 6) * 2.5,
    (windowHeight / 10) * 9,
    windowWidth / 6.5,
    windowHeight / 10
  );
  boutonshield.shapeColor = color(0, 170, 200);
  boutonboost = createSprite(
    (windowWidth / 6) * 3.5,
    (windowHeight / 10) * 9,
    windowWidth / 8,
    windowHeight / 10
  );
  boutonboost.shapeColor = color(0, 170, 200);
  boutonvitesse = createSprite(
    (windowWidth / 6) * 4.5,
    (windowHeight / 10) * 9,
    windowWidth / 8,
    windowHeight / 10
  );
  boutonvitesse.shapeColor = color(0, 170, 200);

  boutonmap1 = createSprite(
    (windowWidth / 6) * 1.8,
    (windowHeight / 10) * 7,
    windowWidth / 12,
    windowHeight / 10
  );
  boutonmap1.shapeColor = color(0, 170, 200);
  boutonmap2 = createSprite(
    (windowWidth / 6) * 2.4,
    (windowHeight / 10) * 7,
    windowWidth / 12,
    windowHeight / 10
  );
  boutonmap2.shapeColor = color(0, 100, 200);
  boutonmap3 = createSprite(
    (windowWidth / 6) * 3,
    (windowHeight / 10) * 7,
    windowWidth / 12,
    windowHeight / 10
  );
  boutonmap3.shapeColor = color(0, 100, 200);
  boutonmap4 = createSprite(
    (windowWidth / 6) * 3.6,
    (windowHeight / 10) * 7,
    windowWidth / 12,
    windowHeight / 10
  );
  boutonmap4.shapeColor = color(0, 100, 200);
  boutonmap5 = createSprite(
    (windowWidth / 6) * 4.2,
    (windowHeight / 10) * 7,
    windowWidth / 12,
    windowHeight / 10
  );
  boutonmap5.shapeColor = color(0, 100, 200);

  boutonpreset1 = createSprite(
    (windowWidth / 6) * 0.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Sniper duel : rifle, blaster, iceberg, no heal, no speed
  boutonpreset1.shapeColor = color(0, 100, 200);
  boutonpreset2 = createSprite(
    (windowWidth / 6) * 1.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Hardcore
  boutonpreset2.shapeColor = color(0, 100, 200);
  boutonpreset3 = createSprite(
    (windowWidth / 6) * 2.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Alpha version
  boutonpreset3.shapeColor = color(0, 100, 200);
  boutonpreset4 = createSprite(
    (windowWidth / 6) * 3.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Carnage
  boutonpreset4.shapeColor = color(0, 100, 200);
  boutonpreset5 = createSprite(
    (windowWidth / 6) * 4.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Endless
  boutonpreset5.shapeColor = color(0, 100, 200);
  boutonpreset6 = createSprite(
    (windowWidth / 6) * 5.5,
    (windowHeight / 10) * 1.5,
    windowWidth / 10,
    windowHeight / 10
  ); //Endless
  boutonpreset6.shapeColor = color(0, 100, 200);

  perso1 = createSprite((windowWidth / 16) * 5, windowHeight - 50);
  perso1_bouge = perso1.addAnimation("walk", perso1_walk);
  perso1_attend = perso1.addAnimation("wait", perso1_wait);
  perso1sld_walk = perso1.addAnimation("walksld", persosld_walk);
  perso1sld_attend = perso1.addAnimation("waitsld", persosld_wait);
  perso1.changeAnimation("wait");
  perso1.mirrorX(-1);

  perso2 = createSprite((windowWidth / 16) * 11, windowHeight - 50);
  perso2_bouge = perso2.addAnimation("walk", perso2_walk);
  perso2_attend = perso2.addAnimation("wait", perso2_wait);
  perso2sld_bouge = perso2.addAnimation("walksld", persosld_walk);
  perso2sld_attend = perso2.addAnimation("waitsld", persosld_wait);
  perso2.changeAnimation("wait");

  murg = createSprite(-5, windowHeight / 2, 5, windowHeight * 3);
  murg.shapeColor = color(255, 200, 0);
  murg.immovable = true;
  murd = createSprite(windowWidth + 5, windowHeight / 2, 5, windowHeight * 3);
  murd.shapeColor = color(255, 200, 0);
  murd.immovable = true;
  murs = new Group();
  murs.add(murg);
  murs.add(murd);

  gaz = createSprite(
    windowWidth / 2,
    (3 / 2) * windowHeight,
    windowWidth,
    windowHeight
  );

  tirs1 = new Group();
  tir1 = createSprite(10, 10, 5, 2); //windowWidth,windowHeight
  tir1.immovable = true;
  tirs2 = new Group();
  tir2 = createSprite(10, 20, 5, 2);
  tir2.immovable = true;
  blast1 = createSprite(windowWidth, windowHeight, 5, 2);
  blast1.immovable = true;
  blast2 = createSprite(windowWidth, windowHeight, 5, 2);
  blast2.immovable = true;
  bump1 = createSprite(windowWidth, windowHeight, 5, 15);
  bump1.immovable = true;
  bump2 = createSprite(windowWidth, windowHeight, 5, 15);
  bump2.immovable = true;

  soin = createSprite(windowWidth, windowHeight);
  soin.addImage(heal);
  soin.immovable = true;
  soin.visible = false;

  dmgx2 = createSprite(windowWidth, windowHeight);
  dmgx2.addImage(boost);
  dmgx2.immovable = true;
  dmgx2.visible = false;

  invincibilité = createSprite(windowWidth, windowHeight);
  invincibilité.addImage(shield);
  invincibilité.immovable = true;
  invincibilité.visible = false;

  vitesse = createSprite(windowWidth, windowHeight);
  vitesse.addImage(speed);
  vitesse.immovable = true;
  vitesse.visible = false;

  sol = createSprite(
    windowWidth / 2,
    windowHeight - windowHeight / 30,
    (windowWidth / 16) * 8,
    windowHeight / 30
  ); //création du sol
  sol.immovable = true;
  sol.shapeColor = color(random(110, 150), random(110, 150), random(110, 150));

  plateforme1 = createSprite(
    (windowWidth / 16) * 8,
    (windowHeight / 30) * 22,
    (windowWidth / 16) * 5,
    windowHeight / 30
  ); //etage 1-milieu
  plateforme1.immovable = true;
  plateforme1.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme2 = createSprite(
    (windowWidth / 16) * 2,
    (windowHeight / 30) * 22,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 1-gauche
  plateforme2.immovable = true;
  plateforme2.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme3 = createSprite(
    (windowWidth / 16) * 14,
    (windowHeight / 30) * 22,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 1-droite
  plateforme3.immovable = true;
  plateforme3.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme4 = createSprite(
    (windowWidth / 16) * 4,
    (windowHeight / 30) * 15,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 2-gauche
  plateforme4.immovable = true;
  plateforme4.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme5 = createSprite(
    (windowWidth / 16) * 12,
    (windowHeight / 30) * 15,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 2-droite
  plateforme5.immovable = true;
  plateforme5.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme6 = createSprite(
    (windowWidth / 16) * 8,
    (windowHeight / 30) * 9,
    (windowWidth / 16) * 3,
    windowHeight / 30
  ); //etage 3-milieu
  plateforme6.immovable = true;
  plateforme6.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme7 = createSprite(
    (windowWidth / 16) * 3,
    (windowHeight / 30) * 7,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 3-gauche
  plateforme7.immovable = true;
  plateforme7.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  plateforme8 = createSprite(
    (windowWidth / 16) * 13,
    (windowHeight / 30) * 7,
    (windowWidth / 16) * 2,
    windowHeight / 30
  ); //etage 3-droite
  plateforme8.immovable = true;
  plateforme8.shapeColor = color(
    random(110, 150),
    random(110, 150),
    random(110, 150)
  );
  grp_plfm = new Group();
  grp_plfm.add(plateforme1);
  grp_plfm.add(plateforme2);
  grp_plfm.add(plateforme3);
  grp_plfm.add(plateforme4);
  grp_plfm.add(plateforme5);
  grp_plfm.add(plateforme6);
  grp_plfm.add(plateforme7);
  grp_plfm.add(plateforme8);
}

function draw() {
  if (jeu == 0) {
    menu();
  }
  if (jeu == 0.5) {
    param();
  }
  if (jeu == 1) {
    decompte();
  }

  if (jeu == 2) {
    playgame();
    musique.play();
  }

  if (jeu == 12) {
    win2();
  }

  if (jeu == 11) {
    win1();
  }
  if (jeu == 10) {
    egality();
  }
  //text(cadence1, 50, 50);
  //text(damage1, 50, 75);
  //text(arme1, 50, 100);
}

function mouseReleased() {
  clickok = true; //reset du clic
  checkslider = false;
}

function menu() {
  background(100, 100, 100);
  image(
    titre,
    windowWidth / 2 - windowWidth / 6,
    windowHeight / 20,
    windowWidth / 3,
    windowHeight / 3.5
  );
  textAlign(CENTER);
  drawSprite(boutonplay);
  fill(0, 170, 200);
  noStroke();
  beginShape();
  vertex(
    windowWidth / 2 - windowWidth / 8,
    windowHeight / 2 - windowHeight / 20
  );
  vertex(
    windowWidth / 2 + windowWidth / 8,
    windowHeight / 2 - windowHeight / 20
  );
  vertex(windowWidth / 2 + windowWidth / 7, windowHeight / 2);
  vertex(
    windowWidth / 2 + windowWidth / 8,
    windowHeight / 2 + windowHeight / 20
  );
  vertex(
    windowWidth / 2 - windowWidth / 8,
    windowHeight / 2 + windowHeight / 20
  );
  vertex(windowWidth / 2 - windowWidth / 7, windowHeight / 2);
  endShape(CLOSE);
  fill(0);
  textSize(windowWidth / 32);
  text("PLAY", windowWidth / 2, (windowHeight / 20) * 10.5);

  pointeur.position.x = mouseX;
  pointeur.position.y = mouseY;
  drawSprite(pointeur);

  textSize(30);
  text("Player 1's kit", windowWidth / 6, (windowHeight / 8) * 2);
  text("Player 2's kit", (windowWidth / 6) * 5, (windowHeight / 8) * 2);
  fill(255, 255, 255);
  drawSprite(boutonpm1);
  textSize(windowWidth / 94);
  image(
    pm,
    windowWidth / 14 - windowWidth / 40,
    (windowHeight / 8) * 3 - windowHeight / 30,
    windowWidth / 20,
    windowHeight / 15
  );
  text("Submachine", windowWidth / 14, (windowHeight / 8) * 3);
  text(" gun", windowWidth / 14, (windowHeight / 8) * 3.2);
  drawSprite(boutonpistolet1);
  image(
    gun,
    (windowWidth / 14) * 2 - windowWidth / 40,
    (windowHeight / 8) * 3 - windowHeight / 30,
    windowWidth / 20,
    windowHeight / 15
  );
  text("Gun", (windowWidth / 14) * 2, (windowHeight / 8) * 3);
  drawSprite(boutonfusil1);
  image(
    rifle,
    (windowWidth / 14) * 3 - windowWidth / 34,
    (windowHeight / 8) * 3 - windowHeight / 32,
    windowWidth / 17,
    windowHeight / 33
  );
  text("Rifle", (windowWidth / 14) * 3, (windowHeight / 8) * 3);
  drawSprite(boutonpompe1);
  image(
    shotgun,
    (windowWidth / 14) * 4 - windowWidth / 36,
    (windowHeight / 8) * 3 - windowHeight / 49,
    windowWidth / 18,
    windowHeight / 33
  );
  text("Shotgun", (windowWidth / 14) * 4, (windowHeight / 8) * 3);

  drawSprite(boutonpm2);
  image(
    pm,
    (windowWidth / 14) * 10 - windowWidth / 40,
    (windowHeight / 8) * 3 - windowHeight / 30,
    windowWidth / 20,
    windowHeight / 15
  );
  text("Submachine", (windowWidth / 14) * 10, (windowHeight / 8) * 3);
  text(" gun", (windowWidth / 14) * 10, (windowHeight / 8) * 3.2);
  drawSprite(boutonpistolet2);
  image(
    gun,
    (windowWidth / 14) * 11 - windowWidth / 40,
    (windowHeight / 8) * 3 - windowHeight / 30,
    windowWidth / 20,
    windowHeight / 15
  );
  text("Gun", (windowWidth / 14) * 11, (windowHeight / 8) * 3);
  drawSprite(boutonfusil2);
  image(
    rifle,
    (windowWidth / 14) * 12 - windowWidth / 34,
    (windowHeight / 8) * 3 - windowHeight / 32,
    windowWidth / 17,
    windowHeight / 33
  );
  text("Rifle", (windowWidth / 14) * 12, (windowHeight / 8) * 3);
  drawSprite(boutonpompe2);
  image(
    shotgun,
    (windowWidth / 14) * 13 - windowWidth / 36,
    (windowHeight / 8) * 3 - windowHeight / 49,
    windowWidth / 18,
    windowHeight / 33
  );
  text("Shotgun", (windowWidth / 14) * 13, (windowHeight / 8) * 3);

  drawSprite(boutondash1);
  text("Dash", (windowWidth / 14) * 1, windowHeight / 2);
  drawSprite(boutonblast1);
  text("Blaster", (windowWidth / 14) * 2, windowHeight / 2);
  drawSprite(boutonboop1);
  text("Repulsor", (windowWidth / 14) * 3, windowHeight / 2);
  drawSprite(boutonjump1);
  text("Jump", (windowWidth / 14) * 4, windowHeight / 2);

  drawSprite(boutondash2);
  text("Dash", (windowWidth / 14) * 10, windowHeight / 2);
  drawSprite(boutonblast2);
  text("Blaster", (windowWidth / 14) * 11, windowHeight / 2);
  drawSprite(boutonboop2);
  text("Repulsor", (windowWidth / 14) * 12, windowHeight / 2);
  drawSprite(boutonjump2);
  text("Jump", (windowWidth / 14) * 13, windowHeight / 2);

  fill(0);
  textSize(windowWidth / 70);
  text("Commands player 1", windowWidth / 10, (windowHeight / 5) * 3.2);
  textSize(windowWidth / 90);
  text("Movements : Z,Q,S,D", windowWidth / 10, (windowHeight / 5) * 3.6);
  text("Shoot : F", windowWidth / 10, (windowHeight / 5) * 3.9);
  text("Capacity : G", windowWidth / 10, (windowHeight / 5) * 4.2);
  textSize(windowWidth / 70);
  text("Commands player 2", (windowWidth / 10) * 9, (windowHeight / 5) * 3.2);
  textSize(windowWidth / 90);
  text(
    "Movements : directional arrows",
    (windowWidth / 10) * 9,
    (windowHeight / 5) * 3.6
  );
  text("Shoot : 1", (windowWidth / 10) * 9, (windowHeight / 5) * 3.9);
  text("Capacity : 2", (windowWidth / 10) * 9, (windowHeight / 5) * 4.2);
  textSize(windowWidth / 94);

  drawSprite(boutonparam);
  textSize(windowWidth / 50);
  text("Settings", (windowWidth / 6) * 3, (windowHeight / 10) * 9);

  if (mouseIsPressed && pointeur.overlap(boutonpm1)) {
    arme1 = 3;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpistolet1)) {
    arme1 = 2;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonfusil1)) {
    arme1 = 1;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpompe1)) {
    arme1 = 10;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpm2)) {
    arme2 = 3;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpistolet2)) {
    arme2 = 2;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonfusil2)) {
    arme2 = 1;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpompe2)) {
    arme2 = 10;
    click.play();
  }

  if (mouseIsPressed && pointeur.overlap(boutondash1)) {
    hab1 = 1;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonblast1)) {
    hab1 = 2;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonboop1)) {
    hab1 = 3;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonjump1)) {
    hab1 = 4;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutondash2)) {
    hab2 = 1;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonblast2)) {
    hab2 = 2;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonboop2)) {
    hab2 = 3;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonjump2)) {
    hab2 = 4;
    click.play();
  }

  if (arme1 == 3) {
    cadence1 = mitraillette.cadence;
    damage1 = mitraillette.degats;
    boutonpm1.shapeColor = color(0, 170, 200);
    boutonpistolet1.shapeColor = color(0, 100, 200);
    boutonfusil1.shapeColor = color(0, 100, 200);
    boutonpompe1.shapeColor = color(0, 100, 200);
  }
  if (arme1 == 2) {
    cadence1 = pistolet.cadence;
    damage1 = pistolet.degats;
    boutonpistolet1.shapeColor = color(0, 170, 200);
    boutonpm1.shapeColor = color(0, 100, 200);
    boutonfusil1.shapeColor = color(0, 100, 200);
    boutonpompe1.shapeColor = color(0, 100, 200);
  }
  if (arme1 == 1) {
    cadence1 = fusil.cadence;
    damage1 = fusil.degats;
    boutonfusil1.shapeColor = color(0, 170, 200);
    boutonpistolet1.shapeColor = color(0, 100, 200);
    boutonpm1.shapeColor = color(0, 100, 200);
    boutonpompe1.shapeColor = color(0, 100, 200);
  }
  if (arme1 == 10) {
    cadence1 = pompe.cadence;
    damage1 = pompe.degats;
    boutonpompe1.shapeColor = color(0, 170, 200);
    boutonfusil1.shapeColor = color(0, 100, 200);
    boutonpistolet1.shapeColor = color(0, 100, 200);
    boutonpm1.shapeColor = color(0, 100, 200);
  }
  if (arme2 == 3) {
    cadence2 = mitraillette.cadence;
    damage2 = mitraillette.degats;
    boutonpompe2.shapeColor = color(0, 100, 200);
    boutonpm2.shapeColor = color(0, 170, 200);
    boutonpistolet2.shapeColor = color(0, 100, 200);
    boutonfusil2.shapeColor = color(0, 100, 200);
  }
  if (arme2 == 2) {
    cadence2 = pistolet.cadence;
    damage2 = pistolet.degats;
    boutonpompe2.shapeColor = color(0, 100, 200);
    boutonpistolet2.shapeColor = color(0, 170, 200);
    boutonpm2.shapeColor = color(0, 100, 200);
    boutonfusil2.shapeColor = color(0, 100, 200);
  }
  if (arme2 == 1) {
    cadence2 = fusil.cadence;
    damage2 = fusil.degats;
    boutonpompe2.shapeColor = color(0, 100, 200);
    boutonfusil2.shapeColor = color(0, 170, 200);
    boutonpistolet2.shapeColor = color(0, 100, 200);
    boutonpm2.shapeColor = color(0, 100, 200);
  }
  if (arme2 == 10) {
    cadence2 = pompe.cadence;
    damage2 = pompe.degats;
    boutonpompe2.shapeColor = color(0, 170, 200);
    boutonfusil2.shapeColor = color(0, 100, 200);
    boutonpistolet2.shapeColor = color(0, 100, 200);
    boutonpm2.shapeColor = color(0, 100, 200);
  }

  if (hab1 == 1) {
    boutondash1.shapeColor = color(0, 170, 200);
    boutonblast1.shapeColor = color(0, 100, 200);
    boutonboop1.shapeColor = color(0, 100, 200);
    boutonjump1.shapeColor = color(0, 100, 200);
  }
  if (hab1 == 2) {
    boutondash1.shapeColor = color(0, 100, 200);
    boutonblast1.shapeColor = color(0, 170, 200);
    boutonboop1.shapeColor = color(0, 100, 200);
    boutonjump1.shapeColor = color(0, 100, 200);
  }
  if (hab1 == 3) {
    boutondash1.shapeColor = color(0, 100, 200);
    boutonblast1.shapeColor = color(0, 100, 200);
    boutonboop1.shapeColor = color(0, 170, 200);
    boutonjump1.shapeColor = color(0, 100, 200);
  }
  if (hab1 == 4) {
    boutondash1.shapeColor = color(0, 100, 200);
    boutonblast1.shapeColor = color(0, 100, 200);
    boutonboop1.shapeColor = color(0, 100, 200);
    boutonjump1.shapeColor = color(0, 170, 200);
  }
  if (hab2 == 1) {
    boutondash2.shapeColor = color(0, 170, 200);
    boutonblast2.shapeColor = color(0, 100, 200);
    boutonboop2.shapeColor = color(0, 100, 200);
    boutonjump2.shapeColor = color(0, 100, 200);
  }
  if (hab2 == 2) {
    boutondash2.shapeColor = color(0, 100, 200);
    boutonblast2.shapeColor = color(0, 170, 200);
    boutonboop2.shapeColor = color(0, 100, 200);
    boutonjump2.shapeColor = color(0, 100, 200);
  }
  if (hab2 == 3) {
    boutondash2.shapeColor = color(0, 100, 200);
    boutonblast2.shapeColor = color(0, 100, 200);
    boutonboop2.shapeColor = color(0, 170, 200);
    boutonjump2.shapeColor = color(0, 100, 200);
  }
  if (hab2 == 4) {
    boutondash2.shapeColor = color(0, 100, 200);
    boutonblast2.shapeColor = color(0, 100, 200);
    boutonboop2.shapeColor = color(0, 100, 200);
    boutonjump2.shapeColor = color(0, 170, 200);
  }

  fill(0, 100, 200);
  rect(
    (windowWidth / 10) * 3,
    (windowHeight / 7) * 5,
    (windowWidth / 10) * 4,
    windowHeight / 90
  );
  drawSprite(slider);
  fill(0);
  text("Score required to win", windowWidth / 2, (windowHeight / 10) * 6.6);
  textSize(26);
  text(objectif, slider.position.x, slider.position.y + windowHeight / 90);
  if (mouseIsPressed && pointeur.overlap(slider) && checkslider == false) {
    checkslider = true;
  }
  if (
    mouseX > (windowWidth / 10) * 3 &&
    mouseX < (windowWidth / 10) * 7 &&
    mouseIsPressed &&
    checkslider == true
  ) {
    slider.position.x = mouseX;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 3 &&
    slider.position.x < (windowWidth / 10) * 3.25
  ) {
    objectif = 1;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 3.25 &&
    slider.position.x < (windowWidth / 10) * 3.5
  ) {
    objectif = 2;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 3.5 &&
    slider.position.x < (windowWidth / 10) * 3.75
  ) {
    objectif = 3;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 3.75 &&
    slider.position.x < (windowWidth / 10) * 4
  ) {
    objectif = 4;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 4 &&
    slider.position.x < (windowWidth / 10) * 4.25
  ) {
    objectif = 5;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 4.25 &&
    slider.position.x < (windowWidth / 10) * 4.5
  ) {
    objectif = 6;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 4.5 &&
    slider.position.x < (windowWidth / 10) * 4.75
  ) {
    objectif = 7;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 4.75 &&
    slider.position.x < (windowWidth / 10) * 5
  ) {
    objectif = 8;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 5 &&
    slider.position.x < (windowWidth / 10) * 5.25
  ) {
    objectif = 9;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 5.25 &&
    slider.position.x < (windowWidth / 10) * 5.5
  ) {
    objectif = 10;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 5.5 &&
    slider.position.x < (windowWidth / 10) * 5.75
  ) {
    objectif = 11;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 5.75 &&
    slider.position.x < (windowWidth / 10) * 6
  ) {
    objectif = 12;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 6 &&
    slider.position.x < (windowWidth / 10) * 6.25
  ) {
    objectif = 13;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 6.25 &&
    slider.position.x < (windowWidth / 10) * 6.5
  ) {
    objectif = 14;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 6.5 &&
    slider.position.x < (windowWidth / 10) * 6.75
  ) {
    objectif = 15;
  }
  if (
    slider.position.x >= (windowWidth / 10) * 6.75 &&
    slider.position.x < (windowWidth / 10) * 7
  ) {
    objectif = 16;
  }

  if (
    mouseIsPressed &&
    pointeur.overlap(boutonparam) &&
    clickok == true &&
    checkslider == false
  ) {
    boutonparam.position.y = (windowHeight / 10) * 9;
    jeu = 0.5;
    clickok = false;
    click.play();
  }

  if (
    (mouseIsPressed && pointeur.overlap(boutonplay) && checkslider == false) ||
    keyIsDown(32)
  ) {
    chronoplay = 200;
    jeu = 1;
    click.play();
  }
}

function param() {
  background(100, 100, 100);
  fill(0, 170, 200);
  noStroke();
  pointeur.position.x = mouseX;
  pointeur.position.y = mouseY;
  drawSprite(pointeur);

  drawSprite(boutonparam);
  textAlign(CENTER);
  fill(0);
  textSize(windowWidth / 50);
  text("Done", (windowWidth / 6) * 3, (windowHeight / 10) * 9);

  if (mouseIsPressed && pointeur.overlap(boutonparam) && clickok == true) {
    boutonparam.position.y = (windowHeight / 10) * 9;
    jeu = 0;
    clickok = false;
    click.play();
  }

  textSize(windowWidth / 70);
  text("Presets", windowWidth / 2, (windowHeight / 10) * 0.8);
  textSize(windowWidth / 94);
  drawSprite(boutonpreset1);
  text("Sniper duel", (windowWidth / 6) * 0.5, (windowHeight / 10) * 1.5);
  drawSprite(boutonpreset2);
  text("Hardcore", (windowWidth / 6) * 1.5, (windowHeight / 10) * 1.5);
  drawSprite(boutonpreset3);
  text("Old version", (windowWidth / 6) * 2.5, (windowHeight / 10) * 1.5);
  drawSprite(boutonpreset4);
  text("Carnage", (windowWidth / 6) * 3.5, (windowHeight / 10) * 1.5);
  drawSprite(boutonpreset5);
  text("Endless", (windowWidth / 6) * 4.5, (windowHeight / 10) * 1.5);
  drawSprite(boutonpreset6);
  text("Random", (windowWidth / 6) * 5.5, (windowHeight / 10) * 1.5);

  textSize(windowWidth / 70);
  text("Maps", windowWidth / 2, (windowHeight / 10) * 2.8);
  textSize(windowWidth / 94);
  drawSprite(boutonmap1);
  boutonmap1.position.y = (windowHeight / 10) * 3.5;
  text("Clasical Map", (windowWidth / 6) * 1.8, (windowHeight / 10) * 3.5);
  drawSprite(boutonmap2);
  boutonmap2.position.y = (windowHeight / 10) * 3.5;
  text("Trees", (windowWidth / 6) * 2.4, (windowHeight / 10) * 3.5);
  drawSprite(boutonmap3);
  boutonmap3.position.y = (windowHeight / 10) * 3.5;
  text("Iceberg", (windowWidth / 6) * 3, (windowHeight / 10) * 3.5);
  drawSprite(boutonmap4);
  boutonmap4.position.y = (windowHeight / 10) * 3.5;
  text("The Cave", (windowWidth / 6) * 3.6, (windowHeight / 10) * 3.5);
  drawSprite(boutonmap5);
  boutonmap5.position.y = (windowHeight / 10) * 3.5;
  text("Ghost Town", (windowWidth / 6) * 4.2, (windowHeight / 10) * 3.5);

  textSize(windowWidth / 70);
  text("Bonus", windowWidth / 2, (windowHeight / 10) * 5.3);
  textSize(windowWidth / 94);
  drawSprite(boutonheal);
  boutonheal.position.y = (windowHeight / 10) * 6;
  if (healact == "ok") {
    text(
      "Disable health bonus",
      (windowWidth / 6) * 1.5,
      (windowHeight / 10) * 6
    );
  } else {
    text(
      "Activate health bonus",
      (windowWidth / 6) * 1.5,
      (windowHeight / 10) * 6
    );
  }
  drawSprite(boutonshield);
  boutonshield.position.y = (windowHeight / 10) * 6;
  if (shieldact == "ok") {
    text(
      "Disable invincibility bonus",
      (windowWidth / 6) * 2.5,
      (windowHeight / 10) * 6
    );
  } else {
    text(
      "Activate invincibility bonus",
      (windowWidth / 6) * 2.5,
      (windowHeight / 10) * 6
    );
  }
  drawSprite(boutonboost);
  boutonboost.position.y = (windowHeight / 10) * 6;
  if (boostact == "ok") {
    text(
      "Disable damages boost",
      (windowWidth / 6) * 3.5,
      (windowHeight / 10) * 6
    );
  } else {
    text(
      "Activate damages boost",
      (windowWidth / 6) * 3.5,
      (windowHeight / 10) * 6
    );
  }
  drawSprite(boutonvitesse);
  boutonvitesse.position.y = (windowHeight / 10) * 6;
  if (vitesseact == "ok") {
    text(
      "Disable speed boost",
      (windowWidth / 6) * 4.5,
      (windowHeight / 10) * 6
    );
  } else {
    text(
      "Activate speed bonus",
      (windowWidth / 6) * 4.5,
      (windowHeight / 10) * 6
    );
  }

  if (mouseIsPressed && pointeur.overlap(boutonpreset1)) {
    //sniper duel
    arme1 = 1;
    arme2 = 1;
    hab1 = 2;
    hab2 = 2;
    map = 5;
    healact = 1;
    shieldact = "ok";
    boostact = "ok";
    vitesseact = 4;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpreset2)) {
    //hardcore
    arme1 = 10;
    arme2 = 10;
    hab1 = 1;
    hab2 = 1;
    map = 4;
    healact = 1;
    shieldact = 2;
    boostact = "ok";
    vitesseact = "ok";
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpreset3)) {
    //old
    arme1 = 2;
    arme2 = 2;
    hab1 = 1;
    hab2 = 1;
    map = 1;
    healact = "ok";
    shieldact = 2;
    boostact = 3;
    vitesseact = 4;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpreset4)) {
    //carnage
    arme1 = 3;
    arme2 = 3;
    hab1 = 4;
    hab2 = 4;
    map = 2;
    healact = 1;
    shieldact = "ok";
    boostact = 3;
    vitesseact = "ok";
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpreset5)) {
    //endless
    arme1 = 2;
    arme2 = 2;
    hab1 = 1;
    hab2 = 1;
    map = 3;
    healact = "ok";
    shieldact = "ok";
    boostact = 3;
    vitesseact = 4;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonpreset6) && clickok == true) {
    //random
    clickok = false;
    let a = Math.floor(random(0, 3.999));
    if (a == 0) {
      arme1 = 1;
      arme2 = 1;
    } else if (a == 1) {
      arme1 = 2;
      arme2 = 2;
    } else if (a == 2) {
      arme1 = 3;
      arme2 = 3;
    } else if (a == 3) {
      arme1 = 10;
      arme2 = 10;
    }
    a = Math.floor(random(0, 2.999));
    if (a == 0) {
      hab1 = 1;
      hab2 = 1;
    } else if (a == 1) {
      hab1 = 2;
      hab2 = 2;
    } else if (a == 2) {
      hab1 = 3;
      hab2 = 3;
    }
    a = Math.floor(random(0, 4.999));
    if (a == 0) {
      map = 1;
    } else if (a == 1) {
      map = 2;
    } else if (a == 2) {
      map = 3;
    } else if (a == 3) {
      map = 4;
    } else if (a == 4) {
      map = 5;
    }
    a = Math.floor(random(0, 1.999));
    if (a == 0) {
      healact = "ok";
    } else if (a == 1) {
      healact = 1;
    }
    a = Math.floor(random(0, 1.999));
    if (a == 0) {
      shieldact = "ok";
    } else if (a == 1) {
      shieldact = 2;
    }
    a = Math.floor(random(0, 1.999));
    if (a == 0) {
      boostact = "ok";
    } else if (a == 1) {
      boostact = 3;
    }
    a = Math.floor(random(0, 1.999));
    if (a == 0) {
      vitesseact = "ok";
    } else if (a == 1) {
      vitesseact = 3;
    }
    click.play();
  }

  if (mouseIsPressed && pointeur.overlap(boutonmap1)) {
    map = 1;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonmap2)) {
    map = 2;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonmap3)) {
    map = 3;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonmap4)) {
    map = 4;
    click.play();
  }
  if (mouseIsPressed && pointeur.overlap(boutonmap5)) {
    map = 5;
    click.play();
  }

  if (mouseIsPressed && clickok == true && pointeur.overlap(boutonheal)) {
    if (healact == "ok") {
      healact = 1;
    } else {
      healact = "ok";
    }
    clickok = false;
    click.play();
  }
  if (mouseIsPressed && clickok == true && pointeur.overlap(boutonshield)) {
    if (shieldact == "ok") {
      shieldact = 2;
    } else {
      shieldact = "ok";
    }
    clickok = false;
    click.play();
  }
  if (mouseIsPressed && clickok == true && pointeur.overlap(boutonboost)) {
    if (boostact == "ok") {
      boostact = 3;
    } else {
      boostact = "ok";
    }
    clickok = false;
    click.play();
  }
  if (mouseIsPressed && clickok == true && pointeur.overlap(boutonvitesse)) {
    if (vitesseact == "ok") {
      vitesseact = 4;
    } else {
      vitesseact = "ok";
    }
    clickok = false;
    click.play();
  }

  if (map == 1) {
    boutonmap1.shapeColor = color(0, 170, 200);
    boutonmap2.shapeColor = color(0, 100, 200);
    boutonmap3.shapeColor = color(0, 100, 200);
    boutonmap4.shapeColor = color(0, 100, 200);
    boutonmap5.shapeColor = color(0, 100, 200);
  }
  if (map == 2) {
    boutonmap1.shapeColor = color(0, 100, 200);
    boutonmap2.shapeColor = color(0, 170, 200);
    boutonmap3.shapeColor = color(0, 100, 200);
    boutonmap4.shapeColor = color(0, 100, 200);
    boutonmap5.shapeColor = color(0, 100, 200);
  }
  if (map == 3) {
    boutonmap1.shapeColor = color(0, 100, 200);
    boutonmap2.shapeColor = color(0, 100, 200);
    boutonmap3.shapeColor = color(0, 170, 200);
    boutonmap4.shapeColor = color(0, 100, 200);
    boutonmap5.shapeColor = color(0, 100, 200);
  }
  if (map == 4) {
    boutonmap1.shapeColor = color(0, 100, 200);
    boutonmap2.shapeColor = color(0, 100, 200);
    boutonmap3.shapeColor = color(0, 100, 200);
    boutonmap4.shapeColor = color(0, 170, 200);
    boutonmap5.shapeColor = color(0, 100, 200);
  }
  if (map == 5) {
    boutonmap1.shapeColor = color(0, 100, 200);
    boutonmap2.shapeColor = color(0, 100, 200);
    boutonmap3.shapeColor = color(0, 100, 200);
    boutonmap4.shapeColor = color(0, 100, 200);
    boutonmap5.shapeColor = color(0, 170, 200);
  }

  if (healact == "ok") {
    boutonheal.shapeColor = color(0, 170, 200);
  } else {
    boutonheal.shapeColor = color(0, 100, 200);
  }

  if (shieldact == "ok") {
    boutonshield.shapeColor = color(0, 170, 200);
  } else {
    boutonshield.shapeColor = color(0, 100, 200);
  }

  if (boostact == "ok") {
    boutonboost.shapeColor = color(0, 170, 200);
  } else {
    boutonboost.shapeColor = color(0, 100, 200);
  }

  if (vitesseact == "ok") {
    boutonvitesse.shapeColor = color(0, 170, 200);
  } else {
    boutonvitesse.shapeColor = color(0, 100, 200);
  }
}

function decompte() {
  if (chronoplay > 0) {
    countdown.play();
    background(0, 170, 200);
    chronoplay -= 1;
    textSize(50);
    chronopropre = chronoplay / 60;
    text(
      chronopropre.toFixed(0),
      (windowWidth / 30) * 14.5,
      (windowHeight / 30) * 12
    );
  }
  if (chronoplay == 0) {
    jeu = 2;
    setup();
    mapset = 0;
    //hab1=4;
    //hab2=4;
  }
}

function playgame() {
  arrplan();
  perso1.bounce(sol, frottement1);
  perso1.bounce(grp_plfm, frottement1);
  perso1.bounce(plateforme6, frottement1);
  perso2.bounce(sol, frottement2);
  perso2.bounce(grp_plfm, frottement2);
  perso2.bounce(plateforme6, frottement2);

  perso1.overlap(gaz, gaz1);
  perso2.overlap(gaz, gaz2);
  tirs1.overlap(murs, shoot1s);
  tirs1.overlap(sol, shoot1s);
  tirs1.overlap(grp_plfm, shoot1s);
  tirs1.overlap(tirs2, shootsup);
  tirs1.overlap(perso2, degat2);
  tirs2.overlap(murs, shoot2s);
  tirs2.overlap(sol, shoot2s);
  tirs2.overlap(grp_plfm, shoot2s);
  tirs2.overlap(tirs1, shootsup);
  tirs2.overlap(perso1, degat1);
  blast1.overlap(murs, shoot1s);
  blast1.overlap(grp_plfm, shoot1s);
  blast1.overlap(perso2, degatblast2);
  blast2.overlap(murs, shoot2s);
  blast2.overlap(grp_plfm, shoot2s);
  blast2.overlap(perso1, degatblast1);
  //bump1.overlap(murs,shoot1s);
  //bump1.overlap(grp_plfm,shoot1s);
  bump1.overlap(perso2, boop2);
  //bump2.overlap(murs,shoot2s);
  //bump2.overlap(grp_plfm,shoot2s);
  bump2.overlap(perso1, boop1);
  perso1.overlap(dmgx2, boost1);
  perso2.overlap(dmgx2, boost2);
  perso1.overlap(invincibilité, shield1);
  perso2.overlap(invincibilité, shield2);
  perso1.overlap(vitesse, vitesse1);
  perso2.overlap(vitesse, vitesse2);

  chronogaz += 1;
  perso1.scale = windowWidth / 1600;
  drawSprite(perso1);
  perso2.scale = windowWidth / 1600;
  drawSprite(perso2);
  drawSprites(tirs1);
  drawSprites(tirs2);
  drawSprite(blast1);
  drawSprite(blast2);
  drawSprites(murs);
  drawSprite(sol);
  drawSprites(grp_plfm);
  bump1.scale = windowWidth / 1600;
  drawSprite(bump1);
  bump2.scale = windowWidth / 1600;
  drawSprite(bump2);
  dmgx2.scale = windowWidth / 1600;
  drawSprite(dmgx2);
  soin.scale = windowWidth / 1600;
  drawSprite(soin);
  invincibilité.scale = windowWidth / 1600;
  drawSprite(invincibilité);
  vitesse.scale = windowWidth / 1600;
  drawSprite(vitesse);
  drawSprite(gaz);
  mouvement1();
  mouvement2();
  if (map == 1 || map == 3) {
    movePlfm();
  }
  shoot1();
  shoot2();
  calculvie();
  calculpoints();
  bonus();
  movebonus();
  gazup();
  calculdmg();
  calculsld();
  calculvit();
  calculhab();
  habilité1();
  habilité2();
}

function arrplan() {
  if (mapset == 0) {
    setmap();
    mapset = 1;
  }
  if (map == 1) {
    background(fond1);
  }
  if (map == 2) {
    background(fond2);
  }
  if (map == 3) {
    background(fond3);
  }
  if (map == 4) {
    background(fond4);
  }
  if (map == 5) {
    background(fond5);
  }
}
function calculhab() {
  if (chronohab1 > 0) {
    chronohab1 -= 1;
    fill(255, 0, 0);
    rect(
      (windowWidth / 20) * 6.5,
      windowHeight / 38 + windowHeight / 100,
      (windowWidth / 15 / 360) * (360 - chronohab1),
      windowHeight / 250
    );
  }
  if (chronohab2 > 0) {
    chronohab2 -= 1;
    fill(0, 255, 0);
    rect(
      (windowWidth / 20) * 12.2,
      windowHeight / 38 + windowHeight / 100,
      (windowWidth / 15 / 360) * (360 - chronohab2),
      windowHeight / 250
    );
  }
  if (chronohab1 == 0) {
    fill(255, 0, 0);
    textSize(windowWidth / 88.88);
    textAlign(LEFT);
    if (hab1 == 1) {
      rect(
        (windowWidth / 20) * 6.5,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(255, 255, 255);
      text("Dash ", (windowWidth / 20) * 6.6, (windowHeight / 35) * 1.65);
    }
    if (hab1 == 2) {
      rect(
        (windowWidth / 20) * 6.5,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(255, 255, 255);
      text("Blast ", (windowWidth / 20) * 6.6, (windowHeight / 35) * 1.65);
    }
    if (hab1 == 3) {
      rect(
        (windowWidth / 20) * 6.5,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(255, 255, 255);
      text("Repulsor ", (windowWidth / 20) * 6.6, (windowHeight / 35) * 1.65);
    }
    if (hab1 == 4) {
      rect(
        (windowWidth / 20) * 6.5,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(255, 255, 255);
      text("Jump ", (windowWidth / 20) * 6.6, (windowHeight / 35) * 1.65);
    }
  }
  if (chronohab2 == 0) {
    fill(0, 255, 0);
    textSize(windowWidth / 88.88);
    textAlign(LEFT);
    if (hab2 == 1) {
      rect(
        (windowWidth / 20) * 12.2,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(0);
      text("Dash ", (windowWidth / 20) * 12.3, (windowHeight / 35) * 1.65);
    }
    if (hab2 == 2) {
      rect(
        (windowWidth / 20) * 12.2,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(0);
      text("Blast ", (windowWidth / 20) * 12.3, (windowHeight / 35) * 1.65);
    }
    if (hab2 == 3) {
      rect(
        (windowWidth / 20) * 12.2,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(0);
      text("Repulsor ", (windowWidth / 20) * 12.3, (windowHeight / 35) * 1.65);
    }
    if (hab2 == 4) {
      rect(
        (windowWidth / 20) * 12.2,
        windowHeight / 38,
        windowWidth / 15,
        windowHeight / 36
      );
      fill(0);
      text("Jump ", (windowWidth / 20) * 12.3, (windowHeight / 35) * 1.65);
    }
  }
}

function habilité1() {
  if (keyIsDown(71) && chronohab1 < 1) {
    //dash
    if (hab1 == 1) {
      if (direc1 == 1) {
        perso1.position.x -= windowWidth / 4; //gauche
        chronohab1 = delaihab;
      } else {
        perso1.position.x += windowWidth / 4; //droite
        chronohab1 = delaihab;
      }
      sontp.play();
    }
    if (hab1 == 2) {
      if (direc1 == 1) {
        blast1 = createSprite(
          perso1.position.x - 15,
          perso1.position.y - 19,
          10,
          5
        );
        blast1.velocity.x = -13;
        blast1.shapeColor = color(255, 50, 0);
        feu.play();
        chronohab1 = delaihab;
      } else {
        blast1 = createSprite(
          perso1.position.x + 15,
          perso1.position.y - 19,
          10,
          5
        );
        blast1.velocity.x = +13;

        blast1.shapeColor = color(255, 50, 0);
        feu.play();
        chronohab1 = delaihab;
      }
    }
    if (hab1 == 3) {
      if (direc1 == 1) {
        bump1 = createSprite(
          perso1.position.x - 15,
          perso1.position.y - 19,
          5,
          15
        );
        bump1.velocity.x = -13;
        bump1.addImage(repulsor1);
        feu.play();
        chronohab1 = delaihab;
      } else {
        bump1 = createSprite(
          perso1.position.x + 15,
          perso1.position.y - 19,
          5,
          15
        );
        bump1.velocity.x = +13;
        bump1.addImage(repulsor1);
        bump1.mirrorX(-1);
        feu.play();
        chronohab1 = delaihab;
      }
    }
    if (hab1 == 4) {
      perso1.addSpeed(windowHeight / 35, 270);
      isjump1 = true;
      /*let xp=perso1.position.x
       let yp=perso1.position.y
       perso1.position.x=perso2.position.x
       perso1.position.y=perso2.position.y
       perso2.position.x=xp
       perso2.position.y=yp*/
      chronohab1 = delaihab;
    }
  }
}

function habilité2() {
  if (keyIsDown(98) && chronohab2 < 1) {
    if (hab2 == 1) {
      if (direc2 == 1) {
        perso2.position.x -= windowWidth / 4;
        chronohab2 = delaihab;
      } else {
        perso2.position.x += windowWidth / 4;
        chronohab2 = delaihab;
      }
      sontp.play();
    }
    if (hab2 == 2) {
      if (direc2 == 1) {
        blast2 = createSprite(
          perso2.position.x - 15,
          perso2.position.y - 19,
          10,
          5
        );
        blast2.velocity.x = -13;
        blast2.shapeColor = color(50, 255, 0);
        feu.play();
        chronohab2 = delaihab;
      } else {
        blast2 = createSprite(
          perso2.position.x + 15,
          perso2.position.y - 19,
          10,
          5
        );
        blast2.velocity.x = +13;
        blast2.shapeColor = color(50, 255, 0);
        feu.play();
        chronohab2 = delaihab;
      }
    }
    if (hab2 == 3) {
      if (direc2 == 1) {
        bump2 = createSprite(
          perso2.position.x - 15,
          perso2.position.y - 19,
          5,
          15
        );
        bump2.velocity.x = -13;
        bump2.addImage(repulsor2);
        feu.play();
        chronohab2 = delaihab;
      } else {
        bump2 = createSprite(
          perso2.position.x + 15,
          perso2.position.y - 19,
          5,
          15
        );
        bump2.velocity.x = +13;
        bump2.addImage(repulsor2);
        bump2.mirrorX(-1);
        feu.play();
        chronohab2 = delaihab;
      }
    }
    if (hab2 == 4) {
      perso2.addSpeed(windowHeight / 35, 270);
      isjump2 = true;
      /*let xp=perso1.position.x
       let yp=perso1.position.y
       perso1.position.x=perso2.position.x
       perso1.position.y=perso2.position.y
       perso2.position.x=xp
       perso2.position.y=yp*/
      chronohab2 = delaihab;
    }
  }
}

function degatblast1(sprite_1, sprite_2) {
  sprite_1.remove();
  if (sld1 == 0) {
    vie1 -= damage2b;
    sondgt.play();
  }
}
function degatblast2(sprite_1, sprite_2) {
  sprite_1.remove();
  if (sld2 == 0) {
    vie2 -= damage1b;
    sondgt.play();
  }
}

function boop1(sprite_1, sprite_2) {
  if (sld1 == 0) {
    vie1 -= 5;
    sprite_2.velocity.x = 0;
    sprite_2.velocity.y = 0;
    sondgt.play();
    if (sprite_1.velocity.x > 0) {
      sprite_2.position.y -= 5;
      sprite_2.addSpeed(windowWidth / 80, 315);
    } else {
      sprite_2.position.y -= 5;
      sprite_2.addSpeed(windowWidth / 80, 225);
    }
    boopé1 = true;
  }
  sprite_1.remove();
}
function boop2(sprite_1, sprite_2) {
  if (sld2 == 0) {
    vie2 -= 5;
    sprite_2.velocity.x = 0;
    sprite_2.velocity.y = 0;
    sondgt.play();
    if (sprite_1.velocity.x > 0) {
      sprite_2.position.y -= 5;
      sprite_2.addSpeed(windowWidth / 80, 315);
    } else {
      sprite_2.position.y -= 5;
      sprite_2.addSpeed(windowWidth / 80, 225);
    }
    boopé2 = true;
  }
  sprite_1.remove();
}

function mouvement1() {
  perso1.addSpeed(windowHeight / 1500, 90); //gravité
  if (keyIsDown(90)) {
    //saut 38
    if (isjump1 == false) {
      perso1.addSpeed(windowHeight / 50, 270);
      isjump1 = true;
    }
  } else if (
    keyIsDown(83) &&
    perso1.overlap(grp_plfm) == false &&
    perso1.overlap(sol) == false
  ) {
    //dash vers le bas 40
    perso1.addSpeed(windowHeight / 50, 90);
    perso1.velocity.x = 0;
  }
  if (keyIsDown(81) && boopé1 == false) {
    // vers la gauche 37
    perso1.mirrorX(-1);
    perso1.velocity.x = -speed1;
    resetvelocity1 = false;
    direc1 = 1;
    if (sld1 == 0) {
      perso1.changeAnimation("walk");
    } else {
      perso1.changeAnimation("walksld");
    }
  } else if (keyIsDown(68) == false) {
    //attente
    if (map !== 3 && resetvelocity1 == false) {
      perso1.velocity.x = 0;
      resetvelocity1 = true;
    }
    if (sld1 == 0) {
      perso1.changeAnimation("wait");
    } else {
      perso1.changeAnimation("waitsld");
    }
  }
  if (keyIsDown(68) && boopé1 == false) {
    // vers la droite 39
    perso1.mirrorX(1);
    perso1.velocity.x = speed1;
    resetvelocity1 = false;
    direc1 = 2;
    if (sld1 == 0) {
      perso1.changeAnimation("walk");
    } else {
      perso1.changeAnimation("walksld");
    }
  } else if (keyIsDown(81) == false) {
    //attente
    if (map !== 3 && resetvelocity1 == false) {
      perso1.velocity.x = 0;
      resetvelocity1 = true;
    }
    if (sld1 == 0) {
      perso1.changeAnimation("wait");
    } else {
      perso1.changeAnimation("waitsld");
    }
  }
  if (
    (map == 3 && perso1.overlap(grp_plfm)) ||
    (map == 3 && perso1.overlap(sol))
  ) {
    //glissade
    perso1.velocity.x /= 1.01;
  } else if (map == 3) {
    perso1.velocity.x /= 1.03;
  }
  if (
    (boopé1 == true && perso1.overlap(grp_plfm)) ||
    (boopé1 == true && perso1.overlap(sol))
  ) {
    boopé1 = false;
    if (map == 3) {
      perso1.velocity.x /= 1.01;
    } else {
      perso1.velocity.x = 0;
    }
    resetvelocity1 = false;
  }
}

function mouvement2() {
  perso2.addSpeed(windowHeight / 1500, 90); //gravité
  if (keyIsDown(38)) {
    //saut
    if (isjump2 == false) {
      perso2.addSpeed(windowHeight / 50, 270);
      isjump2 = true;
    }
  } else if (
    keyIsDown(40) &&
    perso2.overlap(grp_plfm) == false &&
    perso2.overlap(sol) == false
  ) {
    //dash vers le bas
    perso2.addSpeed(windowHeight / 50, 90);
    perso2.velocity.x = 0;
  }
  if (keyIsDown(37) && boopé2 == false) {
    // vers la gauche
    perso2.mirrorX(-1);
    perso2.velocity.x = -speed2;
    resetvelocity2 = false;
    direc2 = 1;
    if (sld2 == 0) {
      perso2.changeAnimation("walk");
    } else {
      perso2.changeAnimation("walksld");
    }
  } else if (keyIsDown(39) == false) {
    //attente
    if (map !== 3 && resetvelocity2 == false) {
      perso2.velocity.x = 0;
      resetvelocity2 = true;
    }
    if (sld2 == 0) {
      perso2.changeAnimation("wait");
    } else {
      perso2.changeAnimation("waitsld");
    }
  }
  if (keyIsDown(39) && boopé2 == false) {
    // vers la droite
    perso2.mirrorX(1);
    perso2.velocity.x = speed2;
    resetvelocity2 = false;
    direc2 = 2;
    if (sld2 == 0) {
      perso2.changeAnimation("walk");
    } else {
      perso2.changeAnimation("walksld");
    }
  } else if (keyIsDown(37) == false) {
    //attente
    if (map !== 3 && resetvelocity2 == false) {
      perso2.velocity.x = 0;
      resetvelocity2 = true;
    }
    if (sld2 == 0) {
      perso2.changeAnimation("wait");
    } else {
      perso2.changeAnimation("waitsld");
    }
  }
  if (
    (map == 3 && perso2.overlap(grp_plfm)) ||
    (map == 3 && perso2.overlap(sol))
  ) {
    //glissade
    perso2.velocity.x /= 1.01;
  } else if (map == 3) {
    perso2.velocity.x /= 1.03;
  }
  if (
    (boopé2 == true && perso2.overlap(grp_plfm)) ||
    (boopé2 == true && perso2.overlap(sol))
  ) {
    boopé2 = false;
    if (map == 3) {
      perso2.velocity.x /= 1.01;
    } else {
      perso2.velocity.x = 0;
    }
    resetvelocity2 = false;
  }
}

function frottement1(sprite_1, sprite_2) {
  perso1.position.y = perso1.position.y + 1;
  if (map == 1 || map == 2) {
    if (
      perso1.overlap(grp_plfm) ||
      (perso1.overlap(sol) &&
        sprite_1.position.x > sprite_2.position.x - sprite_2.width / 2 &&
        sprite_1.position.x < sprite_2.position.x + sprite_2.width / 2)
    ) {
      perso1.velocity.y = 0;
      isjump1 = false;
    } else {
      perso1.velocity.y = 0;
    }
  } else if (map == 3 || map == 4 || map == 5) {
    if (
      (perso1.overlap(grp_plfm) &&
        sprite_1.position.x > sprite_2.position.x - sprite_2.width / 2 &&
        sprite_1.position.x < sprite_2.position.x + sprite_2.width / 2) ||
      (sprite_1.overlap(sol) &&
        sprite_1.position.x > sprite_2.position.x - sprite_2.width / 2 &&
        sprite_1.position.x < sprite_2.position.x + sprite_2.width / 2)
    ) {
      perso1.velocity.y = 0;
      isjump1 = false;
    } else {
      perso1.velocity.y = 0;
    }
  }
  if (perso1.overlap(plateforme6) && map == 1) {
    if (direction6 == 0) {
      perso1.position.x = perso1.position.x - speedp / 2;
    } else {
      perso1.position.x = perso1.position.x + speedp / 2;
    }
    perso1.velocity.y = 0;
    isjump1 = false;
  }
}

function frottement2(sprite_1, sprite_2) {
  perso2.position.y = perso2.position.y + 1;
  if (map == 1 || map == 2) {
    if (
      perso2.overlap(grp_plfm) ||
      (perso2.overlap(sol) &&
        sprite_1.position.x > sprite_2.position.x - sprite_2.width / 2 &&
        sprite_1.position.x < sprite_2.position.x + sprite_2.width / 2)
    ) {
      perso2.velocity.y = 0;
      isjump2 = false;
    } else {
      perso2.velocity.y = 0;
    }
  } else if (map == 3 || map == 4 || map == 5) {
    if (
      (perso2.overlap(grp_plfm) &&
        sprite_1.position.x > sprite_2.position.x - sprite_2.width / 2 &&
        sprite_1.position.x < sprite_2.position.x + sprite_2.width / 2) ||
      (sprite_1.overlap(sol) &&
        sprite_1.position.x > sol.position.x - sol.width / 2 &&
        sprite_1.position.x < sol.position.x + sol.width / 2)
    ) {
      perso2.velocity.y = 0;
      isjump2 = false;
    } else {
      perso2.velocity.y = 0;
    }
  }
  if (perso2.overlap(plateforme6) && map == 1) {
    if (direction6 == 0) {
      perso2.position.x = perso2.position.x - speedp / 2;
    } else {
      perso2.position.x = perso2.position.x + speedp / 2;
    }
    perso2.velocity.y = 0;
    isjump2 = false;
  }
}

function setmap() {
  sol.remove();
  plateforme1.remove();
  plateforme2.remove();
  plateforme3.remove();
  plateforme4.remove();
  plateforme5.remove();
  plateforme6.remove();
  plateforme7.remove();
  plateforme8.remove();
  if (map == 1) {
    //classical
    gaz.shapeColor = color(180, 255, 0, 90);
    sol = createSprite(
      windowWidth / 2,
      windowHeight - windowHeight / 30,
      (windowWidth / 16) * 8,
      windowHeight / 30
    ); //création du sol
    sol.immovable = true;
    sol.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme1 = createSprite(
      (windowWidth / 16) * 8,
      (windowHeight / 30) * 22,
      (windowWidth / 16) * 5,
      windowHeight / 30
    ); //etage 1-milieu
    plateforme1.immovable = true;
    plateforme1.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme2 = createSprite(
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 22,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 1-gauche
    plateforme2.immovable = true;
    plateforme2.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme3 = createSprite(
      (windowWidth / 16) * 14,
      (windowHeight / 30) * 22,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 1-droite
    plateforme3.immovable = true;
    plateforme3.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme4 = createSprite(
      (windowWidth / 16) * 4,
      (windowHeight / 30) * 15,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-gauche
    plateforme4.immovable = true;
    plateforme4.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme5 = createSprite(
      (windowWidth / 16) * 12,
      (windowHeight / 30) * 15,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-droite
    plateforme5.immovable = true;
    plateforme5.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme6 = createSprite(
      (windowWidth / 16) * 8,
      (windowHeight / 30) * 9,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 3-milieu
    plateforme6.immovable = true;
    plateforme6.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme7 = createSprite(
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 3-gauche
    plateforme7.immovable = true;
    plateforme7.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    plateforme8 = createSprite(
      (windowWidth / 16) * 13,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 3-droite
    plateforme8.immovable = true;
    plateforme8.shapeColor = color(
      random(110, 150),
      random(110, 150),
      random(110, 150)
    );
    grp_plfm = new Group();
    grp_plfm.add(plateforme1);
    grp_plfm.add(plateforme2);
    grp_plfm.add(plateforme3);
    grp_plfm.add(plateforme4);
    grp_plfm.add(plateforme5);
    grp_plfm.add(plateforme6);
    grp_plfm.add(plateforme7);
    grp_plfm.add(plateforme8);
  }
  if (map == 2) {
    //Trees
    gaz.shapeColor = color(60, 50, 0, 200);
    perso1.position.x = (windowWidth / 16) * 2;
    perso1.position.y = (windowHeight / 30) * 7;
    perso2.position.x = (windowWidth / 16) * 14;
    perso2.position.y = (windowHeight / 30) * 7;
    sol = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 20,
      windowWidth / 10,
      (windowHeight / 10) * 8
    ); //création du sol
    sol.immovable = true;
    sol.shapeColor = color(random(60, 80), 50, 0);
    plateforme1 = createSprite(
      (windowWidth / 16) * 4,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 0-gauche
    plateforme1.shapeColor = color(random(60, 80), 50, 0);
    plateforme1.immovable = true;
    plateforme2 = createSprite(
      (windowWidth / 16) * 12,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 0-droite
    plateforme2.shapeColor = color(random(60, 80), 50, 0);
    plateforme2.immovable = true;
    plateforme3 = createSprite(
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 20,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 1-gauche
    plateforme3.shapeColor = color(random(60, 80), 50, 0);
    plateforme3.immovable = true;
    plateforme4 = createSprite(
      (windowWidth / 16) * 13,
      (windowHeight / 30) * 20,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 1-droite
    plateforme4.shapeColor = color(random(60, 80), 50, 0);
    plateforme4.immovable = true;
    plateforme5 = createSprite(
      (windowWidth / 16) * 5,
      (windowHeight / 30) * 13,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-gauche
    plateforme5.shapeColor = color(random(60, 80), 50, 0);
    plateforme5.immovable = true;
    plateforme6 = createSprite(
      (windowWidth / 16) * 11,
      (windowHeight / 30) * 13,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-droite
    plateforme6.shapeColor = color(random(60, 80), 50, 0);
    plateforme6.immovable = true;
    plateforme7 = createSprite(
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 3-gauche
    plateforme7.shapeColor = color(random(60, 80), 50, 0);
    plateforme7.immovable = true;
    plateforme8 = createSprite(
      (windowWidth / 16) * 14,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 3-droite
    plateforme8.shapeColor = color(random(60, 80), 50, 0);
    plateforme8.immovable = true;
    grp_plfm = new Group();
    grp_plfm.add(plateforme1);
    grp_plfm.add(plateforme2);
    grp_plfm.add(plateforme3);
    grp_plfm.add(plateforme4);
    grp_plfm.add(plateforme5);
    grp_plfm.add(plateforme6);
    grp_plfm.add(plateforme7);
    grp_plfm.add(plateforme8);
  }
  if (map == 3) {
    perso1.position.x = (windowWidth / 16) * 2;
    perso1.position.y = (windowHeight / 30) * 25;
    perso2.position.x = (windowWidth / 16) * 14;
    perso2.position.y = (windowHeight / 30) * 25;
    gaz.shapeColor = color(80, 150, 255, 200);
    sol = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 28,
      windowWidth / 8,
      windowHeight / 5
    ); //création du sol
    sol.immovable = true;
    sol.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme1 = createSprite(
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 27,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 6
    ); //etage 0-gauche
    plateforme1.immovable = true;
    plateforme1.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme2 = createSprite(
      (windowWidth / 16) * 5,
      (windowHeight / 30) * 24.5,
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 12
    ); //etage 0-gauche milieux
    plateforme2.immovable = true;
    plateforme2.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme3 = createSprite(
      (windowWidth / 16) * 11,
      (windowHeight / 30) * 25.5,
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 12
    ); //etage 0-droite milieux
    plateforme3.immovable = true;
    plateforme3.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme4 = createSprite(
      (windowWidth / 16) * 14,
      (windowHeight / 30) * 29,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 6
    ); //etage 0-droite
    plateforme4.immovable = true;
    plateforme4.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme5 = createSprite(
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 12,
      (windowWidth / 16) * 2.5,
      windowHeight / 30
    ); //etage 1-gauche
    plateforme5.immovable = true;
    plateforme5.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme6 = createSprite(
      (windowWidth / 16) * 13,
      (windowHeight / 30) * 12,
      (windowWidth / 16) * 2.5,
      windowHeight / 30
    ); //etage 1-droite
    plateforme6.immovable = true;
    plateforme6.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme7 = createSprite(
      (windowWidth / 16) * 6,
      (windowHeight / 30) * 4,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-gauche
    plateforme7.immovable = true;
    plateforme7.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    plateforme8 = createSprite(
      (windowWidth / 16) * 10,
      (windowHeight / 30) * 4,
      (windowWidth / 16) * 2,
      windowHeight / 30
    ); //etage 2-droite
    plateforme8.immovable = true;
    plateforme8.shapeColor = color(
      random(150, 250),
      random(240, 255),
      255,
      random(200, 255)
    );
    grp_plfm = new Group();
    grp_plfm.add(plateforme1);
    grp_plfm.add(plateforme2);
    grp_plfm.add(plateforme3);
    grp_plfm.add(plateforme4);
    grp_plfm.add(plateforme5);
    grp_plfm.add(plateforme6);
    grp_plfm.add(plateforme7);
    grp_plfm.add(plateforme8);
  }
  if (map == 4) {
    //Cave
    perso1.position.x = (windowWidth / 16) * 2;
    perso1.position.y = (windowHeight / 30) * 25;
    perso2.position.x = (windowWidth / 16) * 14;
    perso2.position.y = (windowHeight / 30) * 25;
    gaz.shapeColor = color(77, 38, 0, 200);
    gaz.position.y = 0 - windowHeight / 2;
    sol = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 5,
      windowHeight / 7
    ); //etage 0-milieux
    sol.immovable = true;
    sol.shapeColor = color(random(25, 40), random(25, 40), random(25, 40));
    plateforme1 = createSprite(
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 5
    ); //etage 0-gauche
    plateforme1.immovable = true;
    plateforme1.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme2 = createSprite(
      (windowWidth / 16) * 5,
      (windowHeight / 30) * 25,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 12
    ); //etage 0-gauche milieux
    plateforme2.immovable = true;
    plateforme2.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme3 = createSprite(
      (windowWidth / 16) * 11,
      (windowHeight / 30) * 25,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 12
    ); //etage 0-droite milieux
    plateforme3.immovable = true;
    plateforme3.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme4 = createSprite(
      (windowWidth / 16) * 14,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 5
    ); //etage 0-droite
    plateforme4.immovable = true;
    plateforme4.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme5 = createSprite(
      (windowWidth / 16) * 2.5,
      (windowHeight / 30) * 12,
      (windowWidth / 16) * 4.1,
      (windowHeight / 30) * 5
    ); //etage 1-gauche
    plateforme5.immovable = true;
    plateforme5.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme6 = createSprite(
      (windowWidth / 16) * 13.5,
      (windowHeight / 30) * 12,
      (windowWidth / 16) * 4.1,
      (windowHeight / 30) * 5
    ); //etage 1-droite
    plateforme6.immovable = true;
    plateforme6.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme7 = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 13,
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 4
    ); //etage 1-milieux
    plateforme7.immovable = true;
    plateforme7.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    plateforme8 = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 5,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 2
    ); //etage 2-milieu
    plateforme8.immovable = true;
    plateforme8.shapeColor = color(
      random(25, 40),
      random(25, 40),
      random(25, 40)
    );
    grp_plfm = new Group();
    grp_plfm.add(plateforme1);
    grp_plfm.add(plateforme2);
    grp_plfm.add(plateforme3);
    grp_plfm.add(plateforme4);
    grp_plfm.add(plateforme5);
    grp_plfm.add(plateforme6);
    grp_plfm.add(plateforme7);
    grp_plfm.add(plateforme8);
  }
  if (map == 5) {
    perso1.position.x = (windowWidth / 16) * 3;
    perso1.position.y = (windowHeight / 30) * 26;
    perso2.position.x = (windowWidth / 16) * 13;
    perso2.position.y = (windowHeight / 30) * 26;
    gaz.shapeColor = color(40, 70, 20, 150);
    sol = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 29,
      (windowWidth / 16) * 14,
      (windowHeight / 30) * 3
    ); //etage 0-milieux
    sol.immovable = true;
    sol.shapeColor = color(random(25, 40), random(25, 40), random(25, 40));
    plateforme1 = createSprite(
      windowWidth / 30,
      (windowHeight / 30) * 25,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 11.5
    ); //etage 0-gauche
    plateforme1.immovable = true;
    plateforme1.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme2 = createSprite(
      (windowWidth / 30) * 29,
      (windowHeight / 30) * 25,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 11.5
    ); //etage 0-droite
    plateforme2.immovable = true;
    plateforme2.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme3 = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 28,
      (windowWidth / 16) * 2,
      (windowHeight / 30) * 5.18
    ); //etage 1-milieux
    plateforme3.immovable = true;
    plateforme3.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme4 = createSprite(
      (windowWidth / 16) * 5,
      (windowHeight / 30) * 17.4,
      (windowWidth / 16) * 4,
      windowHeight / 30
    ); //etage 1-gauche
    plateforme4.immovable = true;
    plateforme4.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme5 = createSprite(
      (windowWidth / 16) * 11,
      (windowHeight / 30) * 17.4,
      (windowWidth / 16) * 4,
      windowHeight / 30
    ); //etage 1-droite
    plateforme5.immovable = true;
    plateforme5.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme6 = createSprite(
      windowWidth / 2,
      (windowHeight / 30) * 10,
      (windowWidth / 16) * 3,
      windowHeight / 30
    ); //etage 2-milieux
    plateforme6.immovable = true;
    plateforme6.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme7 = createSprite(
      (windowWidth / 16) * 3,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 4,
      windowHeight / 30
    ); //etage 2-gauche
    plateforme7.immovable = true;
    plateforme7.shapeColor = color(random(50, 70), random(25, 50), 0);
    plateforme8 = createSprite(
      (windowWidth / 16) * 13,
      (windowHeight / 30) * 7,
      (windowWidth / 16) * 4,
      windowHeight / 30
    ); //etage 2-droite
    plateforme8.immovable = true;
    plateforme8.shapeColor = color(random(50, 70), random(25, 50), 0);
    grp_plfm = new Group();
    grp_plfm.add(plateforme1);
    grp_plfm.add(plateforme2);
    grp_plfm.add(plateforme3);
    grp_plfm.add(plateforme4);
    grp_plfm.add(plateforme5);
    grp_plfm.add(plateforme6);
    grp_plfm.add(plateforme7);
    grp_plfm.add(plateforme8);
  }
}

function movePlfm() {
  if (map == 1) {
    if (direction6 == 1) {
      plateforme6.position.x = plateforme6.position.x + speedp;
    } else if (direction6 == 0) {
      plateforme6.position.x = plateforme6.position.x - speedp;
    }
    if (plateforme6.position.x > (windowWidth / 16) * 9) {
      direction6 = 0;
    }
    if (plateforme6.position.x < (windowWidth / 16) * 7) {
      direction6 = 1;
    }
  }
  if (map == 3) {
    if (directionsol == 1) {
      sol.position.y = sol.position.y + speedp / 6;
    } else if (directionsol == 0) {
      sol.position.y = sol.position.y - speedp / 6;
    }
    if (sol.position.y > (windowHeight / 30) * 29) {
      directionsol = 0;
    }
    if (sol.position.y < (windowHeight / 30) * 27) {
      directionsol = 1;
    }

    if (direction1 == 1) {
      plateforme1.position.y = plateforme1.position.y + speedp / 6;
    } else if (direction1 == 0) {
      plateforme1.position.y = plateforme1.position.y - speedp / 6;
    }
    if (plateforme1.position.y > (windowHeight / 30) * 29) {
      direction1 = 0;
    }
    if (plateforme1.position.y < (windowHeight / 30) * 27) {
      direction1 = 1;
    }

    if (direction2 == 1) {
      plateforme2.position.y = plateforme2.position.y + speedp / 6;
    } else if (direction2 == 0) {
      plateforme2.position.y = plateforme2.position.y - speedp / 6;
    }
    if (plateforme2.position.y > (windowHeight / 30) * 26) {
      direction2 = 0;
    }
    if (plateforme2.position.y < (windowHeight / 30) * 24) {
      direction2 = 1;
    }

    if (direction3 == 1) {
      plateforme3.position.y = plateforme3.position.y + speedp / 6;
    } else if (direction3 == 0) {
      plateforme3.position.y = plateforme3.position.y - speedp / 6;
    }
    if (plateforme3.position.y > (windowHeight / 30) * 26) {
      direction3 = 0;
    }
    if (plateforme3.position.y < (windowHeight / 30) * 24) {
      direction3 = 1;
    }

    if (direction4 == 1) {
      plateforme4.position.y = plateforme4.position.y + speedp / 6;
    } else if (direction4 == 0) {
      plateforme4.position.y = plateforme4.position.y - speedp / 6;
    }
    if (plateforme4.position.y > (windowHeight / 30) * 29) {
      direction4 = 0;
    }
    if (plateforme4.position.y < (windowHeight / 30) * 27) {
      direction4 = 1;
    }
  }
}

function degat1(sprite_1, sprite_2) {
  if (sld1 == 0) {
    if (sprite_1.position.y < sprite_2.position.y - 23) {
      vie1 -= damage2 * mulths;
      sonhs.play();
    } else {
      vie1 -= damage2;
      sondgt.play();
    }
  }
  sprite_1.remove();
}
function degat2(sprite_1, sprite_2) {
  if (sld2 == 0) {
    if (sprite_1.position.y < sprite_2.position.y - 23) {
      vie2 -= damage1 * mulths;
      sonhs.play();
    } else {
      vie2 -= damage1;
      sondgt.play();
    }
  }
  sprite_1.remove();
}

/////////////////////////////////////////     Calculs      /////////////////////////////////////////
function calculvie() {
  if (vie1 <= 0 && vie2 > 0) {
    vie1 = 0;
    point2 += 1;
    chronofin = 180;
    jeu = 12;
    manchemenu += 1;
  }
  if (vie1 > viemax) {
    vie1 = viemax;
  }
  if (vie2 <= 0 && vie1 > 0) {
    vie2 = 0;
    point1 += 1;
    chronofin = 180;
    jeu = 11;
    manchemenu += 1;
  }
  if (vie2 > viemax) {
    vie2 = viemax;
  }
  if (vie2 <= 0 && vie1 <= 0) {
    vie1 = 0;
    vie2 = 0;
    point1 += 1;
    point2 += 1;
    chronofin = 180;
    jeu = 10;
    manchemenu += 1;
  }

  if (vie1 !== viemax) {
    perso1.overlap(soin, heal1);
  }
  if (vie2 !== viemax) {
    perso2.overlap(soin, heal2);
  }
  textSize(windowWidth / 106);
  fill(0, 0, 0);
  rect(
    (windowWidth / 16) * 3,
    windowHeight / 38,
    windowWidth / 8,
    windowHeight / 36
  );
  if (vie1 > -1) {
    fill(255, 0, 0);
    rect(
      (windowWidth / 16) * 3,
      windowHeight / 38,
      (vie1 * windowWidth) / 800,
      windowHeight / 36
    );
    fill(0, 0, 0);
    text(vie1.toFixed(0), (windowWidth / 16) * 3, windowHeight / 22);
  }
  fill(0, 0, 0);
  rect(
    (windowWidth / 16) * 11,
    windowHeight / 38,
    windowWidth / 8,
    windowHeight / 36
  );
  if (vie2 > -1) {
    fill(0, 255, 0);
    rect(
      (windowWidth / 16) * 11,
      windowHeight / 38,
      (vie2 * windowWidth) / 800,
      windowHeight / 36
    );
    fill(0, 0, 0);
    text(vie2.toFixed(0), (windowWidth / 16) * 11, windowHeight / 22);
  }
  if (perso1.position.y > windowHeight + 30) {
    vie1 = 0;
  }
  if (perso2.position.y > windowHeight + 30) {
    vie2 = 0;
  }
}

function calculpoints() {
  if (map == 1 || map == 3) {
    fill(0);
  } else if (map == 2 || map == 4) {
    fill(255, 255, 255);
  }
  textSize(30);
  textAlign(CENTER);
  text(point1 + "-" + point2, windowWidth / 2, windowHeight / 20);
}

function calculdmg() {
  if (chronodmg1 > 0) {
    chronodmg1 -= 1;
    fill(0, 0, 255);
    rect(
      (windowWidth / 16) * 3,
      (windowHeight / 38) * 3,
      (chronodmg1 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronodmg2 > 0) {
    chronodmg2 -= 1;
    fill(0, 0, 255);
    rect(
      (windowWidth / 16) * 11,
      (windowHeight / 38) * 3,
      (chronodmg2 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronodmg1 == 1) {
    damage1 = damage1 / 2;
    damage2b = damage2b / 2;
  }
  if (chronodmg2 == 1) {
    damage2 = damage2 / 2;
    damage2b = damage2b / 2;
  }
}

function calculsld() {
  if (chronosld1 > 0) {
    chronosld1 -= 1;
    fill(100, 100, 140);
    rect(
      (windowWidth / 16) * 3,
      (windowHeight / 38) * 3,
      (chronosld1 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronosld2 > 0) {
    chronosld2 -= 1;
    fill(100, 100, 1400);
    rect(
      (windowWidth / 16) * 11,
      (windowHeight / 38) * 3,
      (chronosld2 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronosld1 == 0) {
    sld1 = 0;
  }
  if (chronosld2 == 0) {
    sld2 = 0;
  }
}

function calculvit() {
  if (chronovit1 > 0) {
    chronovit1 -= 1;
    fill(255, 255, 255);
    rect(
      (windowWidth / 16) * 3,
      (windowHeight / 38) * 3,
      (chronovit1 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronovit2 > 0) {
    chronovit2 -= 1;
    fill(255, 255, 255);
    rect(
      (windowWidth / 16) * 11,
      (windowHeight / 38) * 3,
      (chronovit2 * windowWidth) / (6000 / 3),
      windowHeight / 36
    );
  }
  if (chronovit1 == 0 && speed1 > 5) {
    speed1 = speed1 / 2;
    cadence1 = cadence1 * 2;
  }
  if (chronovit2 == 0 && speed2 > 5) {
    speed2 = speed2 / 2;
    cadence2 = cadence2 * 2;
  }
}

/////////////////////////////////////////     Tirs      /////////////////////////////////////////
function shoot1() {
  if (chronotir1 > 0) {
    chronotir1 -= 1;
  }
  if (chronotir1 == 0) {
    if (keyIsDown(70)) {
      if (direc1 == 1) {
        chronotir1 = cadence1;
        if (arme1 == 10) {
          for (var i = 0; i <= pompe.plombs; i++) {
            tir1 = createSprite(
              perso1.position.x - 15,
              perso1.position.y - 19,
              7,
              3
            );
            tir1.addSpeed(10, random(180 - arme1, 180 + arme1));
            tir1.shapeColor = color(255, 0, 0);
            tirs1.add(tir1);
          }
        } else {
          tir1 = createSprite(
            perso1.position.x - 15,
            perso1.position.y - 19,
            7,
            3
          );
          tir1.addSpeed(10, random(180 - arme1, 180 + arme1));
          tir1.shapeColor = color(255, 0, 0);
          tirs1.add(tir1);
        }
        feu.play();
      }
      if (direc1 == 2) {
        chronotir1 = cadence1;
        if (arme1 == 10) {
          for (var j = 0; j <= pompe.plombs; j++) {
            tir1 = createSprite(
              perso1.position.x + 15,
              perso1.position.y - 19,
              7,
              3
            );
            tir1.addSpeed(10, random(0 - arme1, 0 + arme1));
            tir1.shapeColor = color(255, 0, 0);
            tirs1.add(tir1);
          }
        } else {
          tir1 = createSprite(
            perso1.position.x + 15,
            perso1.position.y - 19,
            7,
            3
          );
          tir1.addSpeed(10, random(0 - arme1, 0 + arme1));
          tir1.shapeColor = color(255, 0, 0);
          tirs1.add(tir1);
        }
        feu.play();
      }
    }
  }
}
function shoot1s(sprite_1, sprite_2) {
  sprite_1.remove();
}

function shoot2() {
  if (chronotir2 > 0) {
    chronotir2 -= 1;
  }
  if (chronotir2 == 0) {
    if (keyIsDown(97)) {
      if (direc2 == 1) {
        chronotir2 = cadence2;
        if (arme2 == 10) {
          for (var i = 0; i <= pompe.plombs; i++) {
            tir2 = createSprite(
              perso2.position.x - 15,
              perso2.position.y - 19,
              7,
              3
            );
            tir2.addSpeed(10, random(180 - arme2, 180 + arme2));
            tir2.shapeColor = color(255, 255, 0);
            tirs2.add(tir2);
          }
        } else {
          tir2 = createSprite(
            perso2.position.x - 15,
            perso2.position.y - 19,
            7,
            3
          );
          tir2.addSpeed(10, random(180 - arme2, 180 + arme2));
          tir2.shapeColor = color(255, 255, 0);
          tirs2.add(tir2);
        }
        feu.play();
      }
      if (direc2 == 2) {
        chronotir2 = cadence2;
        if (arme2 == 10) {
          for (var j = 0; j <= pompe.plombs; j++) {
            tir2 = createSprite(
              perso2.position.x + 15,
              perso2.position.y - 19,
              7,
              3
            );
            tir2.addSpeed(10, random(0 - arme2, 0 + arme2));
            tir2.shapeColor = color(255, 255, 0);
            tirs2.add(tir2);
          }
        } else {
          tir2 = createSprite(
            perso2.position.x + 15,
            perso2.position.y - 19,
            7,
            3
          );
          tir2.addSpeed(10, random(0 - arme2, 0 + arme2));
          tir2.shapeColor = color(255, 255, 0);
          tirs2.add(tir2);
        }
        feu.play();
      }
    }
  }
}
function shoot2s(sprite_1, sprite_2) {
  sprite_1.remove();
}

function shootsup(sprite_1, sprite_2) {
  sprite_1.remove();
  sprite_2.remove();
}

/////////////////////////////////////////     Gaz      /////////////////////////////////////////
function gazup() {
  if (chronogaz >= timegaz && gaz.position.y > windowHeight / 2 && map !== 4) {
    gaz.position.y -= 0.5;
  } else if (
    chronogaz >= timegaz &&
    gaz.position.y < windowHeight / 2 &&
    map === 4
  ) {
    gaz.position.y += 0.5;
  }
}
function gaz1() {
  if (sld1 == 0) {
    vie1 -= 1 / 30;
  }
}
function gaz2() {
  if (sld2 == 0) {
    vie2 -= 1 / 30;
  }
}

/////////////////////////////////////////    Gestion des bonus      /////////////////////////////////////////
function bonus() {
  if (chronobonus > 0) {
    chronobonus -= 1;
  }
  if (chronobonus == 0 && powerup == 0) {
    coordbonus = Math.floor(random(1, 3.999));
    if (coordbonus == 1) {
      if (map == 1) {
        bonusx = windowWidth / 8;
        bonusy = (windowHeight / 9) * 5.5;
      }
      if (map == 2) {
        bonusx = (windowWidth / 8) * 2;
        bonusy = (windowHeight / 30) * 23;
      }
      if (map == 3) {
        bonusx = (windowWidth / 16) * 3;
        bonusy = (windowHeight / 30) * 5;
      }
      if (map == 4) {
        bonusx = (windowWidth / 16) * 2.5;
        bonusy = (windowHeight / 30) * 5;
      }
      if (map == 5) {
        bonusx = (windowWidth / 16) * 3;
        bonusy = (windowHeight / 30) * 3;
      }
    }
    if (coordbonus == 2) {
      if (map == 1) {
        bonusx = windowWidth / 2;
        bonusy = windowHeight / 8;
      }
      if (map == 2) {
        bonusx = windowWidth / 2;
        bonusy = windowHeight / 12;
      }
      if (map == 3) {
        bonusx = windowWidth / 2;
        bonusy = (windowHeight / 30) * 20;
      }
      if (map == 4) {
        bonusx = windowWidth / 2;
        bonusy = (windowHeight / 30) * 24.5;
      }
      if (map == 5) {
        bonusx = windowWidth / 2;
        bonusy = (windowHeight / 30) * 22;
      }
    }
    if (coordbonus == 3) {
      if (map == 1) {
        bonusx = (windowWidth / 8) * 7;
        bonusy = (windowHeight / 9) * 5.5;
      }
      if (map == 2) {
        bonusx = (windowWidth / 8) * 6;
        bonusy = (windowHeight / 30) * 23;
      }
      if (map == 3) {
        bonusx = (windowWidth / 16) * 13;
        bonusy = (windowHeight / 30) * 5;
      }
      if (map == 4) {
        bonusx = (windowWidth / 16) * 13.5;
        bonusy = (windowHeight / 30) * 5;
      }
      if (map == 5) {
        bonusx = (windowWidth / 16) * 13;
        bonusy = (windowHeight / 30) * 3;
      }
    }

    powerup = random(1, 4.999);
    powerup = Math.floor(powerup);
    if (powerup == healact) {
      powerup = 0;
      chronobonus = 0;
    }
    if (powerup == shieldact) {
      powerup = 0;
      chronobonus = 0;
    }
    if (powerup == boostact) {
      powerup = 0;
      chronobonus = 0;
    }
    if (powerup == vitesseact) {
      powerup = 0;
      chronobonus = 0;
    }
    if (powerup == 1) {
      soin = createSprite(bonusx, bonusy);
      soin.addImage(heal);
      soin.immovable = true;
      powerup = 11;
    }
    if (powerup == 2) {
      invincibilité = createSprite(bonusx, bonusy);
      invincibilité.addImage(shield);
      invincibilité.immovable = true;
      powerup = 12;
    }
    if (powerup == 3) {
      dmgx2 = createSprite(bonusx, bonusy);
      dmgx2.addImage(boost);
      dmgx2.immovable = true;
      powerup = 13;
    }
    if (powerup == 4) {
      vitesse = createSprite(bonusx, bonusy);
      vitesse.addImage(speed);
      vitesse.immovable = true;
      powerup = 14;
    }
  }
}

function resetbonus() {
  powerup = 0;
  chronobonus = 420; //420
}

function movebonus() {
  if (powerup == 11) {
    if (soin.position.y < bonusy - 10) {
      direcbonus = 0;
    }
    if (soin.position.y > bonusy + 5) {
      direcbonus = 1;
    }
    if (direcbonus == 0) {
      soin.position.y += 0.25;
    }
    if (direcbonus == 1) {
      soin.position.y -= 0.25;
    }
  }
  if (powerup == 12) {
    if (invincibilité.position.y < bonusy - 10) {
      direcbonus = 0;
    }
    if (invincibilité.position.y > bonusy + 5) {
      direcbonus = 1;
    }
    if (direcbonus == 0) {
      invincibilité.position.y += 0.25;
    }
    if (direcbonus == 1) {
      invincibilité.position.y -= 0.25;
    }
  }
  if (powerup == 13) {
    if (dmgx2.position.y < bonusy - 10) {
      direcbonus = 0;
    }
    if (dmgx2.position.y > bonusy + 5) {
      direcbonus = 1;
    }
    if (direcbonus == 0) {
      dmgx2.position.y += 0.25;
    }
    if (direcbonus == 1) {
      dmgx2.position.y -= 0.25;
    }
  }
  if (powerup == 14) {
    if (vitesse.position.y < bonusy - 10) {
      direcbonus = 0;
    }
    if (vitesse.position.y > bonusy + 5) {
      direcbonus = 1;
    }
    if (direcbonus == 0) {
      vitesse.position.y += 0.25;
    }
    if (direcbonus == 1) {
      vitesse.position.y -= 0.25;
    }
  }
}

function heal1(sprite_1, sprite_2) {
  if (powerup == 11) {
    vie1 = viemax;
    resetbonus();
    sprite_2.remove();
    sonheal.play();
  }
}
function heal2(sprite_1, sprite_2) {
  if (powerup == 11) {
    vie2 = viemax;
    resetbonus();
    sprite_2.remove();
    sonheal.play();
  }
}

function boost1(sprite_1, sprite_2) {
  if (powerup == 13) {
    chronodmg1 = 240;
    damage1 = damage1 * 2;
    damage1b = damage1b * 2;
    resetbonus();
    sprite_2.remove();
    cri.play();
  }
}
function boost2(sprite_1, sprite_2) {
  if (powerup == 13) {
    chronodmg2 = 240;
    damage2 = damage2 * 2;
    damage2b = damage2b * 2;
    resetbonus();
    sprite_2.remove();
    cri.play();
  }
}

function shield1(sprite_1, sprite_2) {
  if (powerup == 12) {
    chronosld1 = 240;
    resetbonus();
    sprite_2.remove();
    sld1 = 1;
    sonshield.play();
  }
}
function shield2(sprite_1, sprite_2) {
  if (powerup == 12) {
    chronosld2 = 240;
    resetbonus();
    sprite_2.remove();
    sld2 = 1;
    sonshield.play();
  }
}

function vitesse1(sprite_1, sprite_2) {
  if (powerup == 14) {
    chronovit1 = 240;
    speed1 = speed1 * 2;
    cadence1 = cadence1 / 2;
    resetbonus();
    sprite_2.remove();
  }
}
function vitesse2(sprite_1, sprite_2) {
  if (powerup == 14) {
    chronovit2 = 240;
    speed2 = speed2 * 2;
    cadence2 = cadence2 / 2;
    resetbonus();
    sprite_2.remove();
  }
}

/////////////////////////////////////////     Fin du match      /////////////////////////////////////////
function win1() {
  musique.pause();
  textAlign(CENTER);
  if (point1 == objectif) {
    textSize(windowWidth / 26);
    fill(255, 0, 0);
    text(
      "Red player is the winner of the game!",
      windowWidth / 2,
      (windowHeight / 5) * 2
    );
    textSize(windowWidth / 35);
    text("Refresh to replay", windowWidth / 2, (windowHeight / 5) * 2.5);
    noLoop();
  } else {
    textSize(50);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("Red player won the round!", windowWidth / 2, (windowHeight / 5) * 2);
    if (chronofin > 0) {
      chronofin -= 1;
    }
    if (chronofin == 0) {
      jeu = 1;
      chronoplay = 200;
      direc1 = 1;
      direc2 = 2;
      chronohab1 = 0;
      chronohab2 = 0;
      damage1b = 35;
      damage2b = 35;
      speed1 = 4;
      speed2 = 4;
      chronodmg1 = 0;
      chronodmg2 = 0;
      chronosld1 = 0;
      chronosld2 = 0;
      chronovit1 = 0;
      chronovit2 = 0;
      if (arme1 == 3) {
        cadence1 = mitraillette.cadence;
        damage1 = mitraillette.degats;
      }
      if (arme1 == 2) {
        cadence1 = pistolet.cadence;
        damage1 = pistolet.degats;
      }
      if (arme1 == 1) {
        cadence1 = fusil.cadence;
        damage1 = fusil.degats;
      }
      if (arme1 == 10) {
        cadence1 = pompe.cadence;
        damage1 = pompe.degats;
      }
      if (arme2 == 3) {
        cadence2 = mitraillette.cadence;
        damage2 = mitraillette.degats;
      }
      if (arme2 == 2) {
        cadence2 = pistolet.cadence;
        damage2 = pistolet.degats;
      }
      if (arme2 == 1) {
        cadence2 = fusil.cadence;
        damage2 = fusil.degats;
      }
      if (arme2 == 10) {
        cadence2 = pompe.cadence;
        damage2 = pompe.degats;
      }
    }
  }
}

function win2() {
  musique.pause();
  textAlign(CENTER);
  if (point2 == objectif) {
    textSize(windowWidth / 26);
    fill(0, 255, 0);
    text(
      "Green player is the winner of the game!",
      windowWidth / 2,
      (windowHeight / 5) * 2
    );
    textSize(windowWidth / 35);
    text("Refresh to replay", windowWidth / 2, (windowHeight / 5) * 2.5);
    noLoop();
  } else {
    textSize(50);
    fill(0, 255, 0);
    textAlign(CENTER);
    text(
      "Green player won the round!",
      windowWidth / 2,
      (windowHeight / 5) * 2
    );
    if (chronofin > 0) {
      chronofin -= 1;
    }
    if (chronofin == 0) {
      jeu = 1;
      chronoplay = 200;
      direc1 = 1;
      direc2 = 2;
      chronohab1 = 0;
      chronohab2 = 0;
      damage1b = 35;
      damage2b = 35;
      speed1 = 4;
      speed2 = 4;
      chronodmg1 = 0;
      chronodmg2 = 0;
      chronosld1 = 0;
      chronosld2 = 0;
      chronovit1 = 0;
      chronovit2 = 0;
    if(arme1==3){
      cadence1=mitraillette.cadence;
      damage1=mitraillette.degats;
    }
    if(arme1==2){
      cadence1=pistolet.cadence;
      damage1=pistolet.degats;
    }
    if(arme1==1){
      cadence1=fusil.cadence;
      damage1=fusil.degats;
    }
    if(arme1==10){
      cadence1=pompe.cadence;
      damage1=pompe.degats;
    }
    if(arme2==3){
      cadence2=mitraillette.cadence;
      damage2=mitraillette.degats;
    }
    if(arme2==2){
      cadence2=pistolet.cadence;
      damage2=pistolet.degats;
    }
    if(arme2==1){
      cadence2=fusil.cadence;
      damage2=fusil.degats;
    }
    if(arme2==10){
      cadence2=pompe.cadence;
      damage2=pompe.degats;
    }
    }
  }
}

function egality() {
  musique.pause();
  textAlign(CENTER);
  if (point2 == objectif && point1 == objectif) {
    textSize(windowWidth / 26);
    fill(255, 255, 0);
    text("Draw! Nobody won!", windowWidth / 2, (windowHeight / 5) * 2);
    textSize(windowWidth / 35);
    text("Refresh to replay", windowWidth / 2, (windowHeight / 5) * 2.5);
    noLoop();
  } else {
    textSize(50);
    fill(255, 255, 0);
    textAlign(CENTER);
    text("Draw!", windowWidth / 2, (windowHeight / 5) * 2);
    if (chronofin > 0) {
      chronofin -= 1;
    }
    if (chronofin == 0) {
      jeu = 1;
      chronoplay = 200;
      direc1 = 1;
      direc2 = 2;
      chronohab1 = 0;
      chronohab2 = 0;
      damage1b = 35;
      damage2b = 35;
      speed1 = 4;
      speed2 = 4;
      chronodmg1 = 0;
      chronodmg2 = 0;
      chronosld1 = 0;
      chronosld2 = 0;
      chronovit1 = 0;
      chronovit2 = 0;
      if (arme1 == 3) {
        cadence1 = mitraillette.cadence;
        damage1 = mitraillette.degats;
      }
      if (arme1 == 2) {
        cadence1 = pistolet.cadence;
        damage1 = pistolet.degats;
      }
      if (arme1 == 1) {
        cadence1 = fusil.cadence;
        damage1 = fusil.degats;
      }
      if (arme1 == 10) {
        cadence1 = pompe.cadence;
        damage1 = pompe.degats;
      }
      if (arme2 == 3) {
        cadence2 = mitraillette.cadence;
        damage2 = mitraillette.degats;
      }
      if (arme2 == 2) {
        cadence2 = pistolet.cadence;
        damage2 = pistolet.degats;
      }
      if (arme2 == 1) {
        cadence2 = fusil.cadence;
        damage2 = fusil.degats;
      }
      if (arme2 == 10) {
        cadence2 = pompe.cadence;
        damage2 = pompe.degats;
      }
    }
  }
}
