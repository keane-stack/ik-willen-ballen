class Ball{
constructor(x, y, w, h, vx, vy,_color){
this.x = x;
this.y = y;
this.width = w;
this.height = h;
this.vx = vx;
this.vy = vy;
this.color = _color
}

draw() {
fill(this.color)
ellipse (this.x,this.y,50,50);
this.x = this.x + this.vx;
this.y = this.y + this.vy;

if(this.x > 500 || this.x < 0){
this.vx = this.vx * -1;
}

if(this.y < 0 || this.y > 400){
this.vy = this.vy * -1;
}
}
}

var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12;
var ballList = [];


function setup() {
createCanvas(500, 400);
for(var i = 0; i < 50; i++){
var r = Math.floor(Math.random() * 6) + 1;
var x = Math.floor(Math.random() * 500) + 1;
var y = Math.floor(Math.random() * 500) + 1;
var c = Math.floor(Math.random() * 255) + 1;
var l = Math.floor(Math.random() * 80) + 1;
ball = new Ball(x,y,l,50,r,r,c);
ballList.push(ball);
}

}

function draw() {
background(254);
ballList.forEach(function(ball){
ball.draw();
});
}