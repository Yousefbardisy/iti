var sum=0;
function add(){
    try {
        if(arguments.length==0){
            throw new RangeError('empty parameter of function');
        }else{
            for (var i = 0; i < arguments.length; i++) {
               if(typeof(arguments[i]) !== "number"){
                throw new RangeError('parmeter is not number');
               }else{
                   sum += arguments[i];
               }
            }
            alert('Sum is : '+sum);
        }
       
      
    } catch (error) {
        if(error instanceof RangeError){
            alert(error.message);
        }
    }
}

