var canvas = document.getElementById("canvas");
var cont = canvas.getContext("2d");


var box1 = cont.createLinearGradient(20, 20, 0,250);
box1.addColorStop(0, "rgba(22, 219, 245, 0.945)")
box1.addColorStop(1, "#fff")
cont.fillStyle = box1;
cont.fillRect(50, 50, 650, 250);

var box2 = cont.createLinearGradient(50, 250, 0,500);
box2.addColorStop(0, "rgba(22, 219, 15, 0.945)")
box2.addColorStop(1, "#fff")
cont.fillStyle = box2;

cont.fillRect(50, 250, 650, 250);
var gradient = cont.createLinearGradient(250, 300, 250, 155);
gradient.addColorStop("0", "rgb(22, 219, 15)");
gradient.addColorStop("1.0", "#000");

cont.strokeStyle = gradient;
cont.lineWidth = 5;
cont.moveTo(250,300);
cont.lineTo(250, 155);
cont.lineTo(450, 155);
cont.lineTo(450, 300);


cont.stroke()
