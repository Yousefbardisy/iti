let arr =[13,23,34,42,51,55]
let obj = {
   
  
    [Symbol.iterator](arr) {
      this.current = 0;
      return this;
    },
  
    next() {
      if (this.current < arr.length) {
        return { done: false, value: arr[this.current++]};
      } else {
        return { done: true };
      }
    }
  };
    for (let num of obj) {
    console.log(num);
  }