var Sequence = function(start,end,steps){
    var list = [];
    this.pushoprtation = function(){for(var i =start;i<=end;i+=steps){list.push(i);}}

    Object.defineProperties(this,{
      popLast :{get:function () {return list.pop();}},
      dequeue :{get:function () {return list.shift();}},
      display :{get:function () {return list}},
      append : {get:function () { return function (x) {
            if (x >= start && x <= end) {
              if (x - list[list.length - 1] === steps) {
                list.push(x);
                return x;
              } 
              else   throw "not in seq";
            } 
            else 
              throw "not in range";        
          }
      }},
      addftele : {get:function () { return function (x) {
        if (x >= start && x <= end) {
                      if (list[0] - x === steps) {
                        list.unshift(x);
                        return x;
                      } else {
                        throw "not in seq";
                      }
                    } else {
                      throw "not in range";
                    }       
      }
  }}, 
      
    
  })
}
                 
            
         
        
      

var data = new Sequence(2,50,4);
data.pushoprtation();
console.log(data.display);

data.popLast;
data.dequeue;
console.log(data.display);

data.append(50)
// data.append(50)
data.addftele(2)
// data.addftele(2)
console.log(data.display);