var i =2;
var z =1;
var timer;
var arr=document.querySelectorAll("img");
// var hover=document.querySelector("a:hover");
// console.log(hover);



function stop(){clearInterval(timer); }
function run(){SlideShow();}

SlideShow();


function SlideShow(){
    timer=setInterval(function repeate() {
        // console.log(i);
        if (i===arr.length+1) {i=1}
        if (z===arr.length+1) {z=1}

        document.getElementById(i+"").src = "img/marble3.jpg";
        i++;
        // console.log(z);

      document.getElementById(z+"").src = "img/marble1.jpg"
      z++;

    },1000)
}
