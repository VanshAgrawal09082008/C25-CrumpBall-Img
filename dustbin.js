class Dustbin {
constructor(x, y) {
this.x = x;
this.y = y;
this.w = 200;
this.h = 100; 
this.t = 20;
this.angle = 0;
this.image = loadImage("dustbinImg.png")
this.bottomBody = Bodies.rectangle(this.x, this.y, this.w, this.t,{isStatic: true});

this.LeftBody = Bodies.rectangle(this.x - this.w / 2, this.y - this.h / 2, this.t, this.h,{isStatic: true});
Matter.Body.setAngle(this.LeftBody, this.angle);

this.RightBody = Bodies.rectangle(this.x + this.w / 2, this.y - this.h / 2, this.t, this.h,{isStatic: true});
Matter.Body.setAngle(this.RightBody, this.angle);
World.add(world, this.RightBody);
World.add(world, this.LeftBody);
World.add(world, this.bottomBody);

}




display() {
    var posBottom = this.bottomBody.position; 
    var posLeft = this.LeftBody.position;
    var posRight = this.RightBody.position;
push()
translate(posLeft.x, posLeft.y);
fill( 255, 0, 255);
// rect(0, 0, this.t, this.h);
 pop()


 push()
 translate(posRight.x, posRight.y);
 fill(255, 0, 255);
//  rect(0, 0, this.t, this.h);
  pop()

  push()
translate(posBottom.x, posBottom.y);
fill(255, 0, 255);
// rect(0, 0, this.w, this.t);
image(this.image, 0, -this.h / 2, this.w, this.h);
 pop()
}
}
