var i=1;
var time;
var dirup='up';
var dirleft='left';
var dirright='right';
var btn=document.getElementById("go");



function stop(){
    clearInterval(time)
   
}
function go(){
    if(btn.innerHTML==="go"){
    btn.innerHTML="stop"
    time= setInterval(function mooveF(){
  
                        var step=5; 
                        var x=document.getElementById('i3').offsetLeft;                     
                        var y=document.getElementById('i3').offsetTop;
                        if(y >= 322 ){
                        dirup = 'up';
                        }
                        if(y <= 0 ){
                        dirup = 'down';
                        }
                        if(dirup=='down'){y= y +step;}
                        else{y=y - step;}
                        document.getElementById('i3').style.top= y + "px";
                        y++;
                        document.getElementById("msg1").innerHTML="top X: " + x  + " Y : " + y


                        var x1=document.getElementById('i1').offsetLeft;
                        var y1=document.getElementById('i1').offsetTop;

                        if(x1 >= 322){
                            dirleft = 'right';
                        }
                        if(x1 <= 0){
                            dirleft = 'left';
                        }

                        if(dirleft=='left'){x1= x1 +step;
                            console.log(dirleft);   
                            console.log(x1);}
                        else{x1=x1 - step;}
                        document.getElementById('i1').style.left= x1 + "px";
                        x1++;

                        document.getElementById("msg3").innerHTML=" left X: " + x1  + " Y : " + y1;
                        var x2=document.getElementById('i2').offsetLeft;
                        var y2=document.getElementById('i2').offsetTop;

                        if(x2 >= 322){
                            dirright = 'right';
                        }
                        if(x2 <= 0){
                            dirright = 'left';
                        }

                        if(dirright=='left'){x2= x2 +step;
                            console.log(dirleft);   
                            console.log(x1);}
                        else{x2=x2 - step;}
                        document.getElementById('i2').style.left= x2 + "px";
                        x1++;

                        document.getElementById("msg2").innerHTML="right X: " + x2  + " Y : " + y2;
                      
                    },50)
                }
                else{
                    btn.innerHTML="go";
                    clearInterval(time);
                }

}
    
   
    



    
function reset(){
    clearInterval(time)
    document.getElementById('i1').style.left= "0px";
    document.getElementById('i2').style.left= "322px";
    document.getElementById('i3').style.top= "322px";  
    document.getElementById("msg1").innerHTML=" ";
    document.getElementById("msg2").innerHTML=" ";
    document.getElementById("msg3").innerHTML=" ";
    btn.innerHTML="go";

}
