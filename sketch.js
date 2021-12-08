let nx=1000;
let nxstart=1000;
let nystart=1000;
let ny=1000;
let sp = 0.03;
let sz;
let column=200;
let rows=200;
let clr;

function setup(){
  createCanvas(800,800);
  sz=width/column;
  background(0);
  noStroke(); 
  frameRate(10);
}

function draw(){
  background(0);
  sp=map(mouseY,0,height,-0.3,0.3);
  ny=nystart;
  for(let j =0;j<rows;j++){
    nx=nxstart; //reset noise x position
    for(let i=0;i<column;i++){
      clr = noise(nx,ny);
      if(clr >0.5){
        fill(250*clr,155*clr,0);
      }else{
      
      fill(0,0,255);
   }
     rect(i*sz,j*sz,sz,sz);
     nx+=0.05;
  }
  ny+=0.05;
  }
  nystart+=sp;
  
  }