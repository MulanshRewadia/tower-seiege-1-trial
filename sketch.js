const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup()
{
  createCanvas(1500,1000);
  background("black");
  slingshot = new Slingshot(stone.body,{x:200,y:500});
  bottom1 = new Bottom(1200,300,100,20);
  bottom2 = new Bottom(800,600,100,20);
}


function draw()
{
   slingshot.display();
   bottom1.display();
   bottom2.display();

   
}