
function *genmax(x){
    var temp1 = 0;
    var temp2 = 1;
    let feb;

    while(temp1<x){
    
        feb = temp1;
        temp1 = temp2;
        temp2 = feb + temp1;
        yield feb;
        
   } 
}

function *gencount(x){
    var temp11 = 0;
    var c = 0;
    var temp22 = 1;
   while(c<x){
    
    var feb1 = temp11;
    temp11 = temp22;
    temp22 = feb1 + temp11;
    yield feb1;
    c++;
   } 
    


}

 var fib = genmax(500);
var fib2 =gencount(30);
var z=0;
//  for ( i of fib) { console.log(i); } 
// for ( i of fib2) { console.log(i+"  +  "+z); z++ } 
