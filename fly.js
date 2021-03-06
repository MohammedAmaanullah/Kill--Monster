class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.fly = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.fly);
    }

    display(){
        if(this.sling.bodyA){
            
        
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}