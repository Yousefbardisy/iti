function fun(obj) {
    var courseObj = {
        courseName: "ES6",
        courseDuration:"3days",
        courseOwner:"JavaScript"
    }
    for(ele in obj){
        
        if(!courseObj.hasOwnProperty(ele) )
            throw " must pass the same attributes"
            
        
    
    }
    var setting = Object.assign({},courseObj,obj)
   
     console.log( `courseName is ${setting.courseName} and courseDuration is ${setting.courseDuration} and courseOwner is ${setting.courseOwner};`);
}

var cours = {
    courseName: "ES63",
    courseDuration:"4days",
    courseOwner:"js"
}
fun(cours)