var books = [];
var Box = function (){

    this.height = "100";
    this.width = "100";
    this.length = 10;
    this.numOfBooks = 0;
    this.volume= this.height * this.width * this.length,
    this.material= "iron",
    
    this.content = books;
    this.countbooks=function(){
        console.log('the number of books in box is : '+this.numOfBooks);
    } 
    this.deletbookinbox=function(boxti){
        for (var i = 0; i < this.numOfBooks; i++) {

            if (this.content[i][0] == boxti) {
              this.numOfBooks -= 1;
              console.log("delet");
              return this.content.splice(i, 1)[0];
            }
           
          }

    }
    this.addbookinbox=function(title,numofChapters,author,numofPages,publisher,numofCopies){
        if(books.length < this.length){
        books.push([title,numofChapters,author,numofPages,publisher,numofCopies])
        this.numOfBooks +=1;
        }else{
            throw 'the length of box is completed'
        }
    }
    this.valueOf= function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        
          sum += arguments[i].numOfBooks;
        }
        console.log(sum);
}

Box.prototype.toString = function (){
    document.write('<h1>The width of box is '+this.width+'</h1>');
    document.write('<h1>The Height of box is '+this.height+'</h1>');
    document.write('<h1>The Length of box is '+this.length+'</h1>');
    document.write('<h1>The numOfBook of box is '+this.numOfBooks+'</h1><hr>');
}
}
var box1 = new Box();
box1.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box1.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box1.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box1.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box1.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box1.deletbookinbox("7mdah");

box1.toString();

var box2 = new Box();
box2.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box2.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box2.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box2.addbookinbox("7mdah","10","7mdah","500","al4r2","2");
box2.addbookinbox("7mdah","10","7mdah","500","al4r2","2");

box2.toString()
box1.valueOf(box1,box2)

