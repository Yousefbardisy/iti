

var showProp = document.getElementById("mySelect");

var option;
var xhr = new XMLHttpRequest();
var rock = "";
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
        rock = JSON.parse(xhr.responseText);
     
      for (var property in rock) {
        var i = Object.keys(rock).indexOf(property);
        option = document.createElement("option");
        option.value = property;
        option.text = property;
        showProp.appendChild(option);
        showProp.onchange = function(){
            getnamefrompro(rock[this.value]);
        }
      }
    }
  }
};
xhr.open("Get", "rockbands.json", true);
xhr.send("");

function getnamefrompro(desc){
    var name = document.getElementById("name");
    if(name.options.length < 4){
        for (var names in desc) {
            name.innerHTML += "<option value="+desc[names].value+">"+desc[names].name+"</option>";
        
        }
    } 
    else{
        name.innerHTML="";
    }    
}
function openpage(url){ var x = document.getElementById("IFRAME").src=url;}