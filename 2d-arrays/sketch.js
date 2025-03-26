// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < width; i += 10) {
    line(i, 0, i, height);  // This will draw vertical lines from top (0) to bottom (height)
  }
}
