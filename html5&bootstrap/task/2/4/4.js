var canvas = document.getElementById("canvas");
var cont = canvas.getContext("2d");
var x=1;
var i=1;
var timer;
var timer1;
cont.fillStyle="red";

cont.fillRect(0, 0, canvas.width, canvas.height);

cont.strokeStyle = "#f5f"; 
cont.lineWidth=4;

 cont.moveTo(0, 0);
 timer= setInterval(function move(){    
        cont.lineTo(i,x);
        if(i<=300){i++;
        x++;}
        else{stop()}
        cont.stroke();
        },5)

function stop(){  
        clearInterval(timer)
        alert("done")
} 
         
        
 

 