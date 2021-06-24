var win=window.open("child.html","","width=50,height=50");
win.focus();
i=0
up=0
down=1
var timer
if(i==0){upDown("")}

        
    
console.log(i);

function upDown(x){
    console.log(x);
    clearInterval(x);
    if(down){
        down=0
        up=1
     timer= setInterval(function move(){    
        win.moveBy(20,20);
        i++
        if(i%33==0) upDown(timer)
        },500)
    }
   else if(up){
        up=0
        down=1
      timer= setInterval(function move(){ 
         
        win.moveBy(-20,-20);
        i++
        if(i%33==0) upDown(timer)
        },500)
    }

}
function stop(){
    win.focus();
    clearInterval(timer);
    win.close();
}
