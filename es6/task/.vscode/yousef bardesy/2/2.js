
target = {
    name: "yousef",
    address: "bardesy",
    age: 26,
  };
  var handler = {
    set(target, prop, value) {
      if (prop === "name") {
        if (typeof value === "string" && value.length <= 7) {
          target[prop] = value;
        } else throw "not allowed";
      } else if (prop === "address") {
        if (typeof value === "string") {
          target[prop] = value;
        } else throw "not allowed";
      } else if (prop === "age") {
        if (typeof value === "number" && value >= 25 && value <= 60) {
          target[prop] = value;
        } else throw "not allowed";
      }
    },
  };
  
  var proxy = new Proxy(target, handler);
  proxy.name = "io";
  proxy.address = "owo";
  proxy.age = 20;
  