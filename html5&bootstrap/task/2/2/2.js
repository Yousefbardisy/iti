var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(400, 250, 70, 350, 350, 400);
grd.addColorStop(0, "#11d1f3");
grd.addColorStop(1, "#22D1A5");
ctx.fillStyle=grd;
ctx.beginPath();
ctx.arc(230, 230, 220, 0, 2 * Math.PI);
ctx.fill();

var grd1 = ctx.createRadialGradient(500, 500, 30, 350, 350, 300);
grd1.addColorStop(0, "#11d1f3");
grd1.addColorStop(1, "#22D1A5");
ctx.fillStyle=grd1;
ctx.beginPath();
ctx.arc(230, 230, 180, 0, 2 * Math.PI);
ctx.fill();


ctx.font="390px Tahoma"        
ctx.fillStyle="#fff"
ctx.fillText("B",114,350)