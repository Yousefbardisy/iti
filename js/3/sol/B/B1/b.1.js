document.addEventListener("keypress", function () {
  alert(event.keyCode);
});
document.addEventListener("keydown", function () {
  if (event.keyCode === 17) alert("you press ctrl ");
  if (event.keyCode === 16) alert("you press shift");
  if (event.keyCode === 18) alert("you press alt");
});