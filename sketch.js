
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango, man4o, mango5;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mangoo(1100,100,30);
	mango2=new mangoo(1160,150,30);
	mango=new mangoo(1000,120,30);
	man4o=new mangoo(950,210,30);
	mango5=new mangoo(1200,240,30);
	treeObj=new tree(1050,580);
	stone=new Rock(200,300);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango.display();
  man4o.display();
  mango5.display();
  stone.display();
  groundObject.display();
}
