var answerFeild=document.getElementById('Answer')


function EnterNumber(value){

    answerFeild.value +=value;
}
function EnterOperator(value){

    x=answerFeild.value[answerFeild.value.length-1]
    if(x!='+'&&x!='-'&&x!='*'&&x!='/'&&x!=".")answerFeild.value +=value;
}
function EnterClear(){
    answerFeild.value=""
}
function EnterEqual(){
    var anns=answerFeild.value;
    if(anns){
        document.querySelector('#Answer').value=eval(anns)
    }
}