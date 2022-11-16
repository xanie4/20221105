
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#caf0f8");
  textSize(50)
  fill("#5a189a")
  text("X軸:"+mouseX+"，Y軸:"+mouseY,50,50)



  beginShape()

  vertex(620,360)
  vertex(840,290)
	vertex(800,425)

  endShape()//帽子上面三角形

  

  push();
  translate(width/2,height/2)
  rotate(PI/9.5);
  fill("#7b2cbf")
  ellipse(0,0,300,100)//帽子
  pop();


  push();
  translate(width/2,height/2)
  rotate(PI/9.5);
  noStroke()
  fill("#5a189a")
  ellipse(0,0,150,50)//帽子裡面
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/8);
  noStroke()
  fill("#ff8fab")
  ellipse(-100,39,130,30)//角2
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/8);
  noStroke()
  fill("#ff8fab")
  ellipse(90,30,130,30)//角6
  pop();

  push();
  translate(width/2,height/2)
  noStroke()
  fill("#ff8fab")
  ellipse(90,30,130,30)//角5
  pop();

  push();
  translate(width/2,height/2)
  noStroke()
  fill("#ff8fab")
  ellipse(-120,28,130,30)//角1
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/3.8);
  noStroke()
  fill("#ff8fab")
  ellipse(-70,45,130,30)//角3
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/1.1);
  noStroke()
  fill("#ff8fab")
  ellipse(-75,-20,130,30)//角4
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/60);
  noStroke()
  fill("#ffc8dd")
  ellipse(-10,250,30,70)//右腳
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/40);
  noStroke()
  fill("#ffc8dd")
  ellipse(50,255,30,70)//左腳
  pop();

  push();
  translate(width/2,height/2)
  // rotate(PI/2);
  noStroke()
  fill("#ffc8dd")
  ellipse(-80+map(mouseX,0,width,-10,5),130+map(mouseY,0,height,-5,5),70,30)//右手
  rect(-80+map(mouseX,0,width,-10,5),115+map(mouseY,0,height,-5,5),60,30)
  pop();

 

  push();
  translate(width/2,height/2)
  rotate(PI/40);
  noStroke()
  fill("#ffc8dd")
  ellipse(-20,30,180,120)//蠑螈頭
  pop();


  push();
  translate(width/2,height/2)
  rotate(PI/-11.5);
  noStroke()
  fill("#ffc8dd")
  ellipse(-40,160,150,200)//蠑螈身體
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/-8);
  noStroke()
  fill(0)
  triangle(-160+map(mouseX,0,width,-10,5),-10+map(mouseY,0,height,-5,5),-154+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5),-146+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5))//魔法棒
  pop();

  push();
  translate(width/2,height/2)
  stroke("#ff99c8")
  strokeWeight(1.5)
  fill("#ffc8dd")
  ellipse(40,150,30,70)//左手
  noStroke()
  rect(20,112,35,30)
  pop();


  push();
  translate(width/2,height/2)
  stroke(0)
  strokeWeight(3)
  line(-80,17,-60,10)
  pop();

  push();
  translate(width/2,height/2)
  stroke(0)
  strokeWeight(3)
  line(14,15,34,22)
  pop();

  push();
  translate(width/2,height/2)
  fill("#ff99c8")
  noStroke()
  ellipse(-85,30,30,15)//腮紅
  rotate(PI/40)
  ellipse(40,32,30,15)//腮紅
  pop();

  push();
  translate(width/2,height/2)
  fill("#9d4edd")
  noStroke()
  triangle(-55,70,-57,100,-20,85)
  triangle(10,70,11,100,-30,85)
  pop();

  push();
  translate(width/2,height/2)
  fill("#ffc8dd")
  rotate(PI/-15)
  ellipse(-37,20,25,15)//嘴巴
  pop();

  push();
  translate(width/2,height/2)
  noStroke()
  fill("#ffc8dd")
  rect(-43,13,30,15)
  pop();

  push();
  translate(width/2,height/2)
  fill("#ffc8dd")
  rotate(PI/30)
  ellipse(-10,30,25,15)//嘴巴
  pop();

  push();
  translate(width/2,height/2)
  rotate(PI/-30)
  noStroke()
  fill("#ffc8dd")
  rect(-29,14,25,15)
  pop();

  push();
  stroke("#fee440")
  fill("#fbf8cc")
  triangle(width/3-70+map(mouseX,0,width,-10,5),height/3+40+map(mouseY,0,height,-5,5),width/3-70+map(mouseX,0,width,-10,5),height/3-40+map(mouseY,0,height,-5,5),width/3+map(mouseX,0,width,-10,5),height/3+map(mouseY,0,height,-5,5))
  triangle(width/3+70+map(mouseX,0,width,-10,5),height/3+40+map(mouseY,0,height,-5,5),width/3+70+map(mouseX,0,width,-10,5),height/3-40+map(mouseY,0,height,-5,5),width/3+map(mouseX,0,width,-10,5),height/3+map(mouseY,0,height,-5,5))
  ellipse(width/3+map(mouseX,0,width,-10,5),height/3+map(mouseY,0,height,-5,5),70,70)//糖果
  pop();
  

}
