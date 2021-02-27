class roof
{
constructor(x,y,width,height)
{
    var options = {
        'restitution':0.1,
        'friction':0.5,
        'density':1.2,
        'isStatic':true
    }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

World.add(world, this.body);
}
display()
{
  
  push();
  
  rectMode(CENTER)
  fill("blue")
  rect(this.body.position.x, this.body.position.y, this.width,this.height);
  pop();
}


};