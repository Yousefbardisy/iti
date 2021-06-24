var msg='Your message will be displayed character by character'+'<br>'+"Few seconds and this window will terminate  ";
function show(){
    var win=window.open("childwin.html","","width=500,height=500");
    win.focus();
    var i=0;
var timer= setInterval(function move(){ 
    win.document.write(msg[i])
    i++
    console.log(i);
    if(i===msg.length-1){
        console.log("test");
        win.close();
    }
    },20,msg,i)
 console.log(msg.length+"  "+i);
}