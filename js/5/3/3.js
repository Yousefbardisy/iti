


function Shape(width, height) {
    if (this.constructor == Shape) {
      throw new TypeError("Can't instanciate an abstract Shape.");
    }
    this.width = width;
    this.height = height;
  }
  Shape.prototype.area = function () { return this.width * this.height};
  Shape.prototype.perimeter = function () {return (this.width + this.height) * 2;};
  Shape.prototype.info = function () {  document.write('<h1>The width of Rectangle is <span>'+this.width+'</span></h1>');
  document.write('<h1>The Height of Rectangle is<span> '+this.height+'</span></h1>');
  document.write('<h1>The Area of Rectangle is <span>'+this.area()+'</span></h1>');
  document.write('<h1>The perimeter of Rectangle is <span>'+this.perimeter()+'</span></h1><hr>');
};
  
  
  
  function Rec(width, height) {
    Shape.call(this, width, height);
    if (this.constructor == Rec) {
      if (Rec.recFlag > 0) {
        throw "ther is exist rec"
      } else {
        Rec.recFlag++;
      }
    }
  }
  
  Rec.prototype = Object.create(Shape.prototype);
  Rec.prototype.constructor = Rec;
  Rec.recFlag = 0;
  Rec.prototype.toString = function () {
    return this.displayInfo()
  };
  
  
  
  function Sq(side) {
    Rec.call(this, side, side);
    if (this.constructor == Sq) {
      if (Sq.sqFlag > 0) {
        throw "ther is exist Sq"
      } else {
        Sq.sqFlag++;
      }
    }
  }
  
  Sq.prototype = Object.create(Rec.prototype);
  Sq.prototype.constructor = Sq;
  Sq.sqFlag = 0;
  Rec.prototype.toString = function () {
      this.info()
  };
var rec = new Rec(5,20);
var sq = new Sq(5);
// var sq1 = new Sq(5);
var rec1 = new Rec(5,20);

rec.toString();
sq.toString();
