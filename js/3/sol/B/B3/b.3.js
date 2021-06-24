document.forms[0].addEventListener('submit', function (e) {
    if (!confirm("do you want to submit?")) {
      e.preventDefault();
    }
  });
var customEvent = new Event("test");
document.forms[0].addEventListener("test", function customSubmit() { alert("enter your data ?");});
var timeout = setInterval(function () {document.forms[0].dispatchEvent(customEvent);}, 3000);
      document.getElementById("1") .addEventListener("input", function () {clearInterval(timeout); });
      document .getElementById("2").addEventListener("input", function () { clearInterval(timeout);});
      document .getElementById("3").addEventListener("input", function () { clearInterval(timeout);});
      document .getElementById("4").addEventListener("input", function () { clearInterval(timeout);});