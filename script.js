const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#COOL";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
// Where we start the line from
let lastX = 0;
// Where we end the line
let lastY = 0;

function draw(e) {
	// Stops the function from running when they're not moused
	if (!isDrawing) return;
	console.log(e);
	ctx.beginPath();
	// Starting and ending our lines
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
