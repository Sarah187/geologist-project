const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, plane; //stone, iron


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,200);
    rubber = new Rubber(200,100,80,"blue");
    //stone = new Stone(300,100,50,50);
    //iron = new Iron(400,100,80,40);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    //stone.display();
    //iron.display();
 
}