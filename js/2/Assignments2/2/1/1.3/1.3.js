function scrolling(){
    var win=window.open("child.html","","width=500,height=500");
    win.focus();
var timer= setInterval(function move(){ 
    win.scrollBy(0,50)
    console.log(win.scrollY);
    if(win.scrollY==1298.4000244140625) win.close()

    },20)
}