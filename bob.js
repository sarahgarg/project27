class bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':7.8,
          'isStatic':false
      }
      this.body=Bodies.circle(x,y,radius,options);
    
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display()
    {
    
      push();
      

      ellipseMode(RADIUS)
      fill("red")
      ellipse (this.body.position.x, this.body.position.y, this.radius);
      pop();
    }
  };