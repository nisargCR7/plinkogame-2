class Particle{
constructor(x,y,radius) {
    var options = {
      'restitution':0.8,
      'friction':0,
      'density':2.0,
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
    
  }
  display(){
    
    fill(255,113,46);
    
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipse(pos.x, pos.y,this.radius*2);
    pop();

  }

}