class Plinko{
    constructor(x,y,radius) {
        var options = {
            isStatic: true 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        
      }
      
      display(i){
       
          fill(220,i*3,i+20);
          
        var pos =this.body.position;
       push();
        ellipse(pos.x, pos.y,this.radius*2);
       pop();
    
      }
      
    
    }