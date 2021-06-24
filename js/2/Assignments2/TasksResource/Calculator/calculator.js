var show=document.querySelector('#Answer')
var arr=[]
var x=""
console.log(show);
function EnterNumber(value){
    x+=value;
    show.value=x;
}
function EnterOperator(value){
    x+=value;
    show.value=x;
}
function EnterClear(){
    show.value=''
}
function EnterEqual(){
    arr=show.value.split("+")
    console.log(arr);
    console.log(show.value);
}
  


