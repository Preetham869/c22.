const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,100,50,50);

  World.add(world,object);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,50,50);
}