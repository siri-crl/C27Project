class Ball{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        circle(0, 0, this.radius);
        pop();
      }
}