canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokestyle= "grey";
ctx.linewidth= 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath()
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokestyle = "black";
ctx.linewidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokestyle = "red";
ctx.linewidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokestyle = "orange";
ctx.linewidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokestyle = "green";
ctx.linewidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
