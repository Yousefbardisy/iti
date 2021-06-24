        var width;
        var height;
        var perimeter;
        var area;
        function rec() {
            width = document.getElementsByClassName("widthClass")[0].value;
            height = document.getElementsByClassName("heightClass")[0].value;
            perimeter = (width* 2 )+(height*2) ;
            area = width * height;
            alert("done")

        }
        function display() {

            var element = document.getElementById("width");
            element.innerText= "This is Width: " + width
        
            var element = document.getElementById("height");
            element.innerText= "This is Height: " + height;

            
            var element = document.getElementById("perimeter");
            element.innerText="This is Perimeter: " + perimeter;

            var element = document.getElementById("area");
            element.innerText="This is area: " + area;
        }
