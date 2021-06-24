var i = 1;
var timer;
var images = [];
images[0] = "img/1.jpg";
images[1] = "img/2.jpg";
images[2] = "img/3.jpg";
images[3] = "img/4.png";
images[4] = "img/5.jpg";
images[5] = "img/6.jpg";

function SlideShow(){
    if(!timer){
    timer=setInterval(function repeate() {
        if (i===images.length) {
           
            i=0;
            
        }
        document.getElementById("slide").src = images[i];
        i++;
    },2000)
}
}
function stop() {
    clearInterval(timer);
    timer=""
}
function nextImage() {
    console.log(i);
    document.getElementById("slide").src = images[i];
    if (i < images.length-1) {
        i++;
    }
       
}
function previousImage() {
    console.log(i);
    if (i > 0){
      i--;
      document.getElementById("slide").src = images[i];
    }
    
}