class rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)


    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options=
         {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.1,
            length:100
        }
        
 this.rope=Constraint.create(options);
 World.add(world,this.rope);

    }
display()
{
    var point1 =  this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    var a1x=point1.x;
    var a1y=point1.y;

    var a2x=point2.x+this.offsetX;
    var a2y=point2.y+this.offsetY;
    
line(a1x,a1y,a2x,a2y);
}
}