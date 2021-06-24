function getCookie(cookieName) {

  if(checkParError(arguments.length,1)){
    if(!checkCookie(cookieName)){
  
  result = getAllCookie();
  for (var key in result) {
    if (cookieName === key) {
      return result[key];
    }
  }
  }
  else
  throw "mfe4 cookie 5als"
}
}
function setCookie(cookieName, cookieValue, expiryDate) {
  if(checkParError(arguments.length,3))
  document.cookie = ""+cookieName+"="+cookieValue+";expires="+expiryDate+";"

}
function deleteCookie(cookieName) {
  if(checkParError(arguments.length,1)){
  var cookies = getAllCookie();
  for (var key in cookies) {
    if (cookieName === key) {
      
      document.cookie = key + "=  ;expires=10-10-2020";
      console.log("deleted");
    }
  }
}
}
function deleteAllCookie() {
  
  var cookies = getAllCookie();
  for (var key in cookies) {
    
      
      document.cookie = key + "=  ;expires=10-10-2020";
      console.log("deleted");
    
  }
}

function getAllCookie() {
    var assoiativeCookie = [];
    var splitCookie = document.cookie.split(";");
    for (var index = 0; index < splitCookie.length; index++) {
      assoiativeCookie[splitCookie[index].split("=")[0].trim()] = splitCookie[
        index
      ].split("=")[1];
    }
    return assoiativeCookie;
}


function checkCookie(cookieName) {
  if(checkParError(arguments.length,1)){
  var cookies = getAllCookie();
  for (var key in cookies) {
    if (cookieName === key) {
      return true;
    }
  }
  return false;
}
}

function buttonClicked() {
  var gender;
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  male ? (gender = "male") : null;
  female ? (gender = "female") : null;
  var index = document.getElementById("colors").selectedIndex;
  var color = document.getElementById("colors").options[index].value;
  var txt = document.getElementById("colors").options[index].text;
  var date = new Date();
  setCookie("visitCount", 0, date.getDate());
  date.setMonth(date.getMonth() + 3);
  setCookie("username", name, date);
  setCookie("agee", age, date);
  setCookie("genderr", gender, date);
  setCookie("collor", color, date);
  location.replace("child.html");
}

function displayInfo() {
  date = new Date();
  var count = getCookie("visitCount");
  count++;
  setCookie("visitCount", count, date.getDate());
  var gender = getCookie("genderr");
  var name = getCookie("username");
  var color = getCookie("collor");
  gender === "male"  ? (document.images[0].src = "img/1.jpg") : (document.images[0].src = "img/2.jpg");
  document.getElementById("data").innerHTML = "<span style='font:20px bold'>Welcome,</span><span  style=color:"+color+">"+name+"</span> you have visited this site <span style='color:"+ color+"'>"+count+"</span> times :)";
}

function checkParError(x,y){
  try{
    if (x === 0) {
      throw Error("Not enough arguments");
    }
    else if (x != y) {
      throw Error("More or less than arguments");
    }
    else return true
  }catch(e){
    
      console.error(e.message);
  
}

}
checkParError();

