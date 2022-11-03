var slider;
let img;

function preLoad() {
  img = loadImage('images/moon.pg');
  
  //why wont my image load? I put the function in the draw mode and it just messes up my whole slider, so I removed it for now because then it doesnt work at all.. HELP???!!!I WANT TO ADD A PNG Of A REAL MOON INSTEAD OF THIS ONE AND ITS JUST NOT HAVING IT FOR ME ...... 
}
  
function setup() {
  createCanvas(400,400);
  slider = createSlider(200,400,47);
}

function draw() {
  background(0,26,51);

  
  noStroke();
  fill(230,230,180);
  ellipse(200,200,190,190);
  
  noStroke();
  fill(0,26,51);
  ellipse(slider.value(),200,200,200);
  
  print(slider.value());
  
  if(slider.value() > 200 && slider.value() < 250){
    fill(255);
    text("crescent",50,50);
  } //else if (slider.value() < )

  
  
}
  