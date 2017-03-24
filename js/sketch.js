var x = 50;
var y = 50;

function setup() {
	createCanvas(500,500);

}


function drawCubes() {

	colorMode(HSB, 100);

	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y;j++) {

		noStroke();
			var hue = i*2;
        	var sat = j*2;
        fill(hue,sat,100);
			var cubeX = i * 10;
          	var cubeY = j * 10;
		rect(cubeX, cubeY, 10,10);
		}
	}
}

function draw() {
	drawCubes();
}
