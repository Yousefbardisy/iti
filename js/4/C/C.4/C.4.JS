function lap( properties ) {
    var own = this;
        for( var i in properties ) { 
      (function (i) {
          if(typeof properties[i]!=="function"){

            own[ "get" + i ] = function() {
                return properties[i];
              };
              own[ "set" + i ] = function(val) {
                properties[i] = val;
              };
          }
       
      })(i);
    }
  }
  
  var laptop = new lap( {
     brand: "hp(dfeah)",
     model:"pavilon",
     ram:"16 gb",
     display:function(){
         console.log("ay 7ga");
     }
  });
//   console.log(laptop.getbrand())
//   laptop.setbrand('dell')
//   console.log(laptop.getbrand())

//   console.log(laptop.getmodel())
//   laptop.setmodel('G-3')
//   console.log(laptop.getmodel())

//   console.log(laptop.getram())
//   laptop.setram('8 gb')
//   console.log(laptop.getram())
 
