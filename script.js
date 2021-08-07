const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#COOL";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
// Where we start the line from
let lastX = 0;
// Where we end the line
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	// Stops the function from running when they're not moused
	if (!isDrawing) return;
	// Adding color, starting at red hue
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	// Starting and ending our lines
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	// Destructuring an array in one line with ES6
	[lastX, lastY] = [e.offsetX, e.offsetY];

	hue++;
	if (hue >= 360) {
		hue = 0;
	}
	// If the line width is greater than 100, reverse the direction of the width size
	// If it's less than 1 reverse it again in the opposite direction
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	// Depending on what that direction is we either increment or decrement the line width
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

// As soon as the user clicks the mouse down to start it, we update the lastX and lastY
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
