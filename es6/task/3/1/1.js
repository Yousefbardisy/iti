class Polygon{
    constructor(d1){
        this.fDimension=d1;
    }
}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Rectange extends Polygon{
    constructor(dimension1,dimension2){
        super(dimension1);
        this.secDimension=dimension2
    }
    area(){
        let recArea=this.fDimension*this.secDimension
        return recArea;
    }
    toString(){
        console.log(`the width = ${this.fDimension} , height = ${this.secDimension} then the area = ${this.area()}`)
    }
    createShape(){
        ctx.fillStyle="pink";
        ctx.fillRect(30, 40, this.fDimension, this.secDimension);
       }

}

var rec1=new Rectange(50,200);
rec1.toString();

rec1.createShape()
class Square extends Polygon{
    constructor(dimension1){
        super(dimension1)
    }
    area(){
        let area=this.fDimension*this.fDimension;
        return area;
    }
    toString(){
        console.log(`the width and height = ${this.fDimension} then the area equals ${this.area()}`)
    }
     createShape(){
        ctx.fillStyle="aqua";
        ctx.fillRect(100, 80, this.fDimension,this.fDimension);
       }

}
var square1=new Square(80)
square1.toString();
square1.createShape()
class Circle extends Polygon{
    constructor(d1){
        super(d1)
    }
    area(){
        let area = Math.PI * Math.pow((this.fDimension*.5),2)
        return area
    }
    toString(){
        console.log(`the reduis = ${this.fDimension*.5} then the area equals ${this.area()}`)
    }
    createShape(){
        ctx.arc(250, 100, this.fDimension,0,2*Math.PI);
        ctx.fillStyle = "red"
        ctx.fill();
       }
}
var circle1=new Circle(40)
circle1.toString()
circle1.createShape()

class Triange extends Polygon{
    constructor(d1,d2){
        super(d1)
        this.secondDimension=d2;
    }
    area(){
        let area=(.5*this.fDimension)*this.secondDimension
        return area
    }
    toString(){
        console.log( `the base = ${this.fDimension} and height= ${this.secondDimension} then the area = ${this.area()}`)
    }
    createShape(){
        ctx.beginPath();
        ctx.moveTo(120, 250);   
        ctx.lineTo(250, 250);  
        ctx.fillStyle = "gold";
        ctx.lineTo(120, 180); 
        ctx.fill();
       }
}
var triangle=new Triange(4,6);
triangle.toString();
triangle.createShape()
