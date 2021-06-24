function reverse(){
    var arr = []

    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.reverse()
}
 var ft = reverse(5,6,7,8,9);
 console.log(ft);
var sc = reverse
y = sc(5,6,7,8,9,10);
console.log(y);


