class ArmPlayer {
  constructor (x, y, w, h, angle) {
    var Options = {
      isStatic: true
    };

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
    this.body = Bodies.rectangle(x, y, w, h, Options );
    this.image = loadImage("./Assets/PersonagemArmado1-1.png.png");
    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(DOWN_ARROW) && angle < 50 ) {
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -13) {
      angle -=1;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();
  }
}