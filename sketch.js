var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	
  
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairyVoice.play();
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	
	starBody = Bodies.rectangle(650 , 30 , 5 , {restitution:0.5}); 
    starBody.isStatic=true;
	World.add(world, starBody);
	
	Engine.run(engine);
   
	
}


function draw() {
  background(bgImg);
 if(fairy.isTouching(star)){
	 starBody.setvelocity=0;
 }

  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("left_arrow")){
		fairy.x=fairy.x-30;
	}
	if(keyDown("right_arrow")){
		fairy.x=fairy.x+30;
	}
	if (keyDown("down_arrow")){
		starBody.isStatic=false;
		star.x=starBody.position.x;
        star.y=starBody.position.y;
	}
}
