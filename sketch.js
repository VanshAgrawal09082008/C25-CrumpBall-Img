
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine;
var world;
var dustbin;
var ground;
var crumBall;

// var dutbinImg;
// var BallImg;


//  function preload(){
// 	BallImg = loadImage("paper.png")
//  }


function setup() {
	createCanvas(1400, 720);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,710,width,20);
	crumBall = new Paper(200,300,70);
	 dustbin = new Dustbin(1200,670);
	var render = Render.create({
	element: document.body, 
	engine: engine,
	options: {
	width: 1400,
	height: 700, 
	wireframes: false
	}
	});
	
	
	
	Engine.run(engine);

}




function draw() {
//   rectMode(CENTER);
  background(215);

  ground.display();
  crumBall.display()

dustbin.display();


}


function keyPressed() {
if(keyCode === UP_ARROW ){
Matter.Body.applyForce(crumBall.body, crumBall.body.position, {x: 85, y: -85})
}
}



