var Rec = function(wd,he){
    this.width = wd;
    this.height=he;
}
Rec.prototype.area = function(){
    return area = this.width * this.height;
}
Rec.prototype.perimeter = function(){
    return perimeter = 2 * (this.width + this.height);
}
Rec.prototype.toString = function(){
    document.write('<h1>The width of Rectangle is <span>'+this.width+'</span></h1>');
    document.write('<h1>The Height of Rectangle is<span> '+this.height+'</span></h1>');
    document.write('<h1>The Area of Rectangle is <span>'+this.area()+'</span></h1>');
    document.write('<h1>The perimeter of Rectangle is <span>'+this.perimeter()+'</span></h1><hr>');
}
// var data = new Rec(5,20);
data.toString();
