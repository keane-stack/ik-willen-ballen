class Ellipse {
  constructor(x, y, w, h, vx, vy, color) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = vx;
      this.vy = vy
      this.color = color
  }

  drawEllipse(){
    fill(this.color)
    ellipse(this.x, this.y, this.w, this.h);


    this.y = this.y + this.vy;
    this.x = this.x + this.vx;


    if(this.x <=0 || this.x >=500){
      this.vx = this.vx * -1;
    }

    if(this.y <=0 || this.y >=500){
      this.vy = this.vy * -1;

    }
  }
}
var ballList = [ 
  ball1 = new Ellipse(60,10,30,30,5,5,"white");
  ball2 = new Ellipse(10,100,30,30,5,5,"yellow");
  ball3 = new Ellipse(10,10,30,30,5,5,"red");
  ball4 = new Ellipse(50,10,30,30,5,5,"green");
  ball5 = new Ellipse(1,10,30,30,5,5,"orange");
  ball6 = new Ellipse(20,10,30,30,5,5,"orange");
  ]

function setup(){
  createCanvas(500, 500);


}

function draw(){
  background(225);
  ballList;

}
 