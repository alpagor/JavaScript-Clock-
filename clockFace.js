//Create a drawFace() function for drawing the clock face:
function drawClock() {
  drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;

  //Draw the white circle:
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  //Create a radial gradient (95% and 105% of original clock radius):
  //context.createRadialGradient(x0,y0,r0,x1,y1,r1);
  //x and y are the coordinates of the center of the circles r is the radius of the circles.
  grad = ctx.createRadialGradient(0, 0, radius * 0, 95, 0, 0, radius * 1.05);
  //Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
  //Specifies the position where the gradient stops and the colors.
  //The color stops create a 3D effect.
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  //Define the gradient as the stroke style of the drawing object:
  ctx.strokeStyle = grad;
  //Define the line width of the drawing object (10% of radius):
  ctx.lineWidth = radius * 0.1;
  //Draw the circle:
  ctx.stroke();
  //Draw the clock center:
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}
