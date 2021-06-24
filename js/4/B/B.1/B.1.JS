var newdata = [];
function sortdata(array){
    var loop = false;
    while (!loop) {
        loop = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                loop = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}
var linkedList = {
    data:[],
    pushMulti:function(){
        
        for (let i = 0; i < arguments.length; i++) {
            
            if(newdata.indexOf(arguments[i])!=-1){
                console.log(arguments[i]+'::That value is exsit in Array');
            }else{
                this.data.push(arguments[i]);
            } 
        }
        newdata = sortdata(this.data);
    },
    pushSingleLl:function(val){
        
       
            if(newdata.indexOf(val)!=-1){
                console.log(val+'::That value is exsit in Array');
            }else{
                this.data.push(val);
            } 
        newdata = sortdata(this.data);
    },
    popvalue:function(){
        
            this.data.pop();
            
       
    },
    elementdel:function(val){
        x=newdata.indexOf(val);
        if(x!=-1){
           newdata.splice(x,1)
            
        }else{
            console.log(val+'::That value is not found in Array');
        }
    },
}


arr= linkedList;
arr.pushMulti(66,55,22,11,77,88);
arr.pushMulti(64,12,4,66);
arr.pushSingleLl(45)
arr.popvalue();



 arr.elementdel(22);
 arr.elementdel(77);


console.log(arr.data);


