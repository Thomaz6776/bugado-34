class Zumbis {
    constructor(x, y, w, h, image) {
        
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h,)
    this.image = loadImage("./Assets/Zumbi1.png");
    World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
        pop();
    }
}