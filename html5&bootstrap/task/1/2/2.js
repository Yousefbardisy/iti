function changecolor(){
    var red=document.getElementById('redRange').value;
    var green=document.getElementById('greenRange').value;
    var blue=document.getElementById('blueRange').value;
    var Color='rgb(' + red + ','+ green + ',' + blue +')';
    document.getElementById('1').style.color=Color;
}
document.getElementById('redRange').addEventListener('input',changecolor);
document.getElementById('greenRange').addEventListener('input',changecolor);
document.getElementById('blueRange').addEventListener('input',changecolor);