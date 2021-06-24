function twoArg(){
  try {
    if(arguments.length!==2)
      throw RangeError(" not in range")
          
      else
        console.log(arguments[0]+arguments[1]);

  } 
  catch (error) {
      if(error instanceof RangeError){
          console.log(error.message);
      }
  }
}

