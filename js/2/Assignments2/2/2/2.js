var data;
console.log(data);

var info=location.search;
// console.log(info);
var infoArr=info.split("&");
console.log(info.length);
// console.log(infoArr);
//var head=["name", "email", "password","accname","jobtitle","mobile","gender","address"]

for(var i=0;i<info.length;i++){
    if(i!=2){
        x="Adasdasdasdasdd asd a as das das a d sa da d  asd dsa sad"
        console.log(x.trim());
        data=document.getElementById(i+"")
        data.innerHTML=decodeURIComponent((infoArr[i].slice(infoArr[i].indexOf("=")+1).replace("+", " ")))
    }

}

