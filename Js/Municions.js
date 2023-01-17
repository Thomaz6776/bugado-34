class Municions {
    constructor (x, y) {
      var Options = {
        isStatic: true
      };
  
      this.t = 40;
      this.body = Bodies.circle(x, y, this.t, Options );
      this.image = loadImage("./Assets/Bala.png");
      World.add(world, this.body);
    }
    
  

    shoot() {
      var newAngle = arma.angle - 28;
      newAngle = newAngle *(3.14/180)
      var velocity = p5.Vector.fromAngle(newAngle);
      velocity.mult(0.5);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14),
        y: velocity.y *(180/3.14)});
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.t, this.t);
      pop();
    }
  }
  