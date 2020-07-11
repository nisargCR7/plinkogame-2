const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var plinkos=[];
var gamestate = "play";
var particle;
var count;
var score = 0;
var q =0;
var g1,g2,g3,g4;

function setup(){
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  


 


for(var i=0 ; i<650;i=i+60){
for(var j=100 ; j<500;j=j+120){

  p = new Plinko(i,j,10);
  plinkos.push(p);
  
  a = new Plinko(i+20,j+60,10);
  plinkos.push(a);
}
}
//particle = new Particle(200,10,10)
mousePressed();





}


function draw()
{
  background(51);
  Engine.update(engine);
  
  
  noStroke();
  textSize(25)
  fill("white")
  text("Score  " + Math.round(score), 10, 30)

  for(var i=0 ; i<plinkos.length;i++){
    
    plinkos [i]. display(i);
   

  }

  if(particle!==null){

    particle.display();
  
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
  
      
    score = score +500;
    particle=null;
    if(count>=5)gamestate = "end";
  
    
    }
  }
  
  
  }
 




}


function mousePressed(){

if(gamestate!=="end"){

console.log(mouseX);
particle = new Particle(mouseX,10,10)

}


}


