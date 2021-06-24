//1.1
    // var num1=parseInt(prompt('enter num 1'));
    // var num2=parseInt(prompt('enter num 2'));
    // var num3=parseInt(prompt('enter num 3'));
    // sum=num1+num2+num3
    // mul=num1*num2*num3
    // div=num1/num2/num3
    // document.write("sum of 3 val "+num1+"+"+num2+"+"+num3+"="+sum);
    // document.write("<br>mul of 3 mul "+num1+"*"+num2+"*"+num3+"="+mul);
    // document.write("<br>div of 3 dev "+num1+"/"+num2+"/"+num3+"="+div);
//1.2
    var arr=[]
    for(i=0;i<5;i++){
        var num1=parseInt(prompt('enter num'));
        arr[i]=num1
        
        
    }
        document.write(' o arr  '+ arr);
        document.write('<br>descending  '+ arr.sort(comb));
        document.write('<br>ascending  '+ arr.sort(dcomb));

        function dcomb(a,b){
            return  a-b
        }   
        function comb(a,b){
            return b-a
        }   