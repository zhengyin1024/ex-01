var a = 80;
var b = 40;

function setup() {
	createCanvas(1600,800);

}

function drawCubes(xPos, yPos) {

	background(251);
     
     for (var i = 0; i < a; i++) {
          
          for (var j = 0; j < b; j++) {

          noStroke();
          fill(51);
         
          var cubeX = i * 20 +5;
          var cubeY = j * 20 +5;


          var x2 = xPos;
          var y2 = yPos;
          var d = int(dist(cubeX, cubeY, x2, y2));
          console.log('Done int...');
          
		ellipse(cubeX, cubeY, d/25,d/25);
     }
  }     
}

function draw() {
     drawCubes(mouseX,mouseY);

}                                   

