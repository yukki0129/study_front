var bubbles = [];

function init() {
	bubbleStart();
}

function bubbleStart() {
	var i = bubbles.length;
	bubbles[i] = bubbleMake();
	setTimeout("bubbleMove()", 500);
	// setTimeinterval("bubbleMove()", Math.floor(Math.random()) * 300 + 200);
	// setTimeout("bubbleStart()" 500);
}

function bubbleMake() {

	var canvas;
	if (Math.floor(Math.random() * 2) == 0) {
		canvas = document.getElementById("bubbleCanvasLeft");		
	} else {
		canvas = document.getElementById("bubbleCanvasRight");
	}

	if (canvas.getContext) {
		var bubble = canvas.getContext("2d");
		bubble.beginPath();
		bubble.arc(100, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		var gradient = bubble.createLinearGradient(50, 50, 150, 150);
		gradient.addColorStop(0.65, "rgb(120, 120, 60)");
		gradient.addColorStop(0.9, "rgb(255, 255, 255)");
		bubble.fillStyle = gradient;
		bubble.fill();
	}

	return bubble;
}

function bubbleMove() {
	var yPos = parseInt(bubbles[0].top);
	console.log(bubbles[0]);
	bubbles[0].top = yPos + 10 + 'px';
	setTimeout("bubbleMove()", 500);
}

/* canvas test */
/*
function drawCircle() {
	var canvas = document.getElementById("circleField");

	if (canvas.getContext) {
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(100, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		// context.stroke();
		var gradient = context.createLinearGradient(50, 50, 150, 150);
		gradient.addColorStop(0.2 , "rgb(255,0,0)");
		gradient.addColorStop(0.5 , "rgb(0,255,0)");
		gradient.addColorStop(0.8 , "rgb(0,0,255)");
		context.fillStyle = gradient;
		context.fill();

		context.beginPath();
		context.arc(250, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		gradient = context.createLinearGradient(200, 50, 300, 150);
		gradient.addColorStop(0.2 , "rgb(255,0,0)");
		gradient.addColorStop(0.5 , "rgb(0,255,0)");
		gradient.addColorStop(0.8 , "rgb(0,0,255)");
		context.strokeStyle = gradient;
		context.lineWidth = 10;
		context.stroke();
		context.fillStyle = "rgb(255, 255, 255)";
		context.fill();

		context.beginPath();
		context.arc(400, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		gradient = context.createRadialGradient(400, 100, 5, 400, 100, 50);
		gradient.addColorStop(0.2 , "rgb(255,0,0)");
		gradient.addColorStop(0.5 , "rgb(0,255,0)");
		gradient.addColorStop(0.8 , "rgb(0,0,255)");
		context.fillStyle = gradient;
		context.fill();

		context.beginPath();
		context.arc(550, 100, 25, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		context.globalAlpha = 1.0;
		context.fillStyle = "rgb(0, 0, 0)";
		context.fill();
		context.beginPath();
		context.arc(550, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		context.globalAlpha = 0.2;
		context.fillStyle = "rgb(255, 255, 255)";
		context.fill();

		context.beginPath();
		context.arc(700, 100, 50, 0 / 180 * Math.PI, 360 / 180 * Math.PI, true);
		context.shadowColor = "rgb(0, 0, 0)";
		context.shadowOffsetX = 10;
		context.shadowOffsetY = 10;
		context.shadowBlur = 10;
		context.globalAlpha = 1.0;
		context.fillStyle = "rgb(255, 255, 255)";
		context.fill();
	}
}
*/