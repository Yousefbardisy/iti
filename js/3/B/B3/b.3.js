var x;
function conf() {
    x=confirm("Do you want to Submit?");
    if (x==true) {
        location.reload();

    alert("Your form is submition");
    }
    else if (x==false) {

         alert("Your form is not submition");   
         
        
    }
}
var customEvent = new Event("submit");
      document.forms[0].addEventListener("submit", function customSubmit() {alert("enter your data ?");});
      var timeout = setInterval(function () { document.forms[0].dispatchEvent(customEvent); }, 3000);
      document.getElementById("1") .addEventListener("input", function () {clearInterval(timeout); });
      document .getElementById("2").addEventListener("input", function () { clearInterval(timeout);});
      document .getElementById("3").addEventListener("input", function () { clearInterval(timeout);});
      document .getElementById("4").addEventListener("input", function () { clearInterval(timeout);});