var video=document.getElementById("video");
var range=document.getElementById("range");
var duration=document.getElementById("duration");
var speed=document.getElementById("speed");
var slow=document.getElementById("slow");
var showduration=document.getElementById("currentdur")
video.onloadeddata=function(){duration.max=video.duration;}
function play(){video.play()}
function pause(){video.pause();}
function stop() {
video.pause ();
video.currentTime = 0;
}
function showVolum(x){video.volume= range.value/100;}
function speedfun(val){video.playbackRate=speed.value;}
function slowfun(val){video.playbackRate=slow.value/10;}
function showdur(){
showduration.textContent =parseFloat( video.currentTime).toFixed(1);
duration.value= video.currentTime
}
function conCurrentTime(){video.currentTime= this.value;}