class Holder extends BaseClass{
constructor(x,y,width,height){
var options = {
isStatic: true
}
super(x,y,width,height,options);
this.image = loadImage("wood2.png");
}
}