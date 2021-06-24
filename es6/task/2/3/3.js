var obj={
    [Symbol.replace](str){
        if(str.length>15)
             return str.substring(0,15)+"..."
        else
             return str
    }
}



console.log("ahmeddddddddddddd".replace(obj))