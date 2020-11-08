class Ball extends BaseClass{
constructor(x,y,r){
var options = {
isStatic: true
}
super(x,y,r/2,options);
this.image = loadImage("AAAAA.png");
}
display(){
super.display();
imageMode(CENTER);
image(this.image, 0, 0, this.r, this.r);
}
}