
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backImage;
var holderr;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
backImage=loadImage("AAA.jpg");	
}

function setup() {
createCanvas(900,600);
engine = Engine.create();
world = engine.world;

holderr = new Holder(450,150,600,30);
ball1 = new Ball(450,300,20)
ball2 = new Ball(350,300,30)
ball3 = new Ball(500,300,30)
ball4 = new Ball(650,300,30)
ball5 = new Ball(800,300,30)


Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(backImage);
holderr.display(); 
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
drawSprites(); 
}



