const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var FundoIMG, Fundo;
var base, arma, corpo, bala;
var ground;
var zombies = [];
var balas = [];
var zombie, zombieIMG;

function preload() {
  FundoIMG = loadImage("./Assets/ImagemFundo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;


  base = new basePlayer(120, height - 325, 100, 550);
  corpo = new CorpPlayer(250, base.body.position.y - 320, 100, 120);
  bala = new Municions(250, base.body.position.y - 300, 100, 120);
  arma = new ArmPlayer(250, base.body.position.y - 300, 100, 100);
  
  
  ground = Bodies.rectangle(0, base.body.position.y + 260, width * 2, 1, { isStatic: true });
  World.add(world, ground);

}
function draw() 
{
  background(FundoIMG);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 0.1);

  base.display();
  corpo.display();
  arma.display();
  bala.display();
  


  spawZombies()

  keyCodeBala()



}

function spawZombies() {
  if (zombies.length >= 1) {
    for (var i = 0 ; i<zombies.length ; i++) {
      if (zombies[i]) {
        Matter.Body.setVelocity(zombies[i].body,{
        x:-0.9,
        y:0
        });
        zombies[i].display();   
      }
    }
  } 
    else {
        zombie = new Zumbis(width - 40,base.body.position.y + 200,120,120);
        zombies.push(zombie);
    }
   
}      

function keyCodeBala(){
 if (keyCode === RIGHT_ARROW) {
    bala.shoot();
  }
}
 
  

