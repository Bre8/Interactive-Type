var slider;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 750, 0);
}

function draw() {
  background(0, 26, 51);

  noStroke();
  fill(230, 230, 180);
  ellipse(450, 300, 290, 290);

  noStroke();
  fill(0, 26, 51);
  ellipse(slider.value(), 300, 300, 300);

  print(slider.value());

  if (slider.value() > 454 && slider.value() < 475) {
    fill(230, 230, 190);
    text("Old Moon", 300, 100);
    textSize(60);
  }

  if (slider.value() > 420 && slider.value() < 440) {
    fill(230, 230, 190);
    text("Old Moon", 300, 100);
    textSize(60);
  }

  if (slider.value() > 476 && slider.value() < 515) {
    fill(230, 230, 190);
    text("Crescent", 300, 100);
    textSize(60);
  }

  if (slider.value() > 375 && slider.value() < 420) {
    fill(230, 230, 190);
    text("Crescent", 300, 100);
    textSize(60);
  }

  if (slider.value() > 440 && slider.value() < 455) {
    fill(230, 230, 190);
    text("New Moon", 300, 100);
    textSize(60);
  }

  if (slider.value() > -1 && slider.value() < 144) {
    fill(230, 230, 190);
    text("Full Moon", 300, 100);
    textSize(60);
  }

  if (slider.value() > 740 && slider.value() < 751) {
    fill(230, 230, 190);
    text("Full Moon", 300, 100);
    textSize(60);
  }
}
// not an accurate depiction of quarter or gibbous moons so i didnt include them.

