class launcher{
    constructor(bodyA , bodyB ){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.3,
            length : 5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);

    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.bodyA.position;
    
    strokeweight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y );

    }
}