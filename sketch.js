const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rec, rectangle1,circle1,use,ground;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10;

function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    rec = new recc(700,320,100,100);
    rectangle1 = new rectangle(300,350);
    circle1=new circle(900,450,70);
    use = new user(10,100);

    stone1 = new Stone(505,450,10);
    stone2 = new Stone(510,450,10);
    stone3 = new Stone(515,450,10);
    stone4 = new Stone(520,450,10);
    stone5 = new Stone(525,450,10);
    stone6 = new Stone(515,445,10);
    stone7 = new Stone(520,445,10);
    stone8 = new Stone(525,445,10);
    stone9 = new Stone(530,445,10);
    stone10 = new Stone(535,445,10);
}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    rec.display();
    ground.display();
    rectangle1.display();
    circle1.display();
    use.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display();
}