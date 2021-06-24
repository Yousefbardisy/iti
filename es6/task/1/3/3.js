let fruits = [ "strawberry", "banana", "orange", "mango", "apple"];
fruits2=[]
console.log( "a \n"+fruits.every((val)=>{ 
    // console.log(val);
    return typeof(val)==="string"
}));
console.log("b \n"+ fruits.some((val)=>{ 
    return val[0]==="a"
}));
console.log("c \n"+ fruits.filter((val)=>{ 

    return  val[0]==="s"||val[0]==="b"
}));

 let h=fruits.map((val)=>{ 
    return `i love ${val}`
});

h.forEach((val)=>{console.log(val);})

