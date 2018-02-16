var r;
var a;
var b;
var c;
var e;
var f;
var g;
var h;
var i;


function setup() {
createCanvas(1500,700);
r=0;
a=color(255,0,0);
b=color(0,255,0);
c=color(90,80,100);
d=color(0,0,255);
e=color(200,40,100);
f=color(200,90,10);
g=color(10,80,90);
h=color(20,100,200);
i=color(80,200,80);
}

function draw() {
background(200,84,100);

//RectRed
fill(a);
rect(100,1,90,400);
if(mouseX>100&&mouseX<190&&mouseY>1&&mouseY<401){
  a=color(0,0,255);

}else {
  a=color(255,0,0);

}

//RectGreen
fill(b);
rect(220,470,90,400);
if(mouseX>220&&mouseX<310&&mouseY>470&&mouseY<870){
  b=color(255,0,0);

}else {
  b=color(0,255,0);
}

//RectGrey
fill(c);
rect(300,1,90,400);
if(mouseX>300&&mouseX<390&&mouseY>1&&mouseY<401){
  c=color(0,0,255);

}else{
  c=color(90,80,100);
}

//RectBlue
fill(d);
rect(440,1,90,650);
if(mouseX>440&&mouseX<530&&mouseY>1&&mouseY<651){
  d=color(100,90,0);
}else {
  d=color(0,0,255);
}

//Rectpurple
fill(e);
rect(650,400,90,400);
if(mouseX>650&&mouseX<740&&mouseY>400&&mouseY<800){
  e=color(0,255,0);
}else {
  e=color(200,40,100);
}
//RectOrange
fill(f);
rect(650,1,90,300);
if(mouseX>650&&mouseX<740&&mouseY>1&&mouseY<950){
  f=color(200,20,50);
}else {
  f=color(200,90,10);
}

//RectOffblue
fill(g);
rect(810,1,90,600);
if(mouseX>810&&mouseX<900&&mouseY>1&&mouseY<1410){
  g=color(0,255,0);
}else {
  g=color(10,80,90);
}

//RectLightblue
fill(h);
rect(960,100,50,600);
if(mouseX>960&&mouseX<1010&&mouseY>100&&mouseY<1500){
  h=color(255,0,0);
}else {
  h=color(20,100,200);
}


//RectlightGreen
fill(i);
rect(1110,1,90,600);
if(mouseX>1110&&mouseX<1200&&mouseY>1&&mouseY<1750){
  i=color(0,0,255);
}else {
  i=color(80,200,80);
}

//GOAL!
fill(0,240,10);
textStyle(BOLD);
textSize(60);
push();
translate(1080,700);
rotate(r);
text('GOAL!', 0, 0);
pop();
if(mouseX>1080&&mouseY>700){
  r=r+1;
}

//START
textStyle(BOLD);
textSize(60);
text('START', 10, 700);

//ELLIPSE
fill(100,200,200);
ellipse(mouseX,mouseY,50,50);


}
