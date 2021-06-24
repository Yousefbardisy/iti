const fs = require('fs');
const path = require('path');
console.log(process.argv[7]);
function handleArgs() {
    switch (process.argv[4]) {
        case 'generate':
        case 'g': {
          // if(process.argv[7]!="inline"){
            if(process.argv[5]=="c"||process.argv[5]=="component"){
             fs.mkdir(path.join(__dirname, process.argv[6]),
                    { recursive: true }, (err) => {
                      if (err) {
                        return console.log("err");
                      }
                      console.log('Directory created successfully!');
                    })
                    fs.writeFile(`${process.argv[6]}/${process.argv[6]}.ts`, ` 
                     import { Component, OnInit } from '@angular/core';
                
                    @Component({
                      selector: '${process.argv[6]}',
                      templateUrl: './${process.argv[6]}.html',
                      styleUrls: ['./${process.argv[6]}.css']
                    })
                    export class ${process.argv[6]} implements OnInit {
                    
                      constructor() { }
                    
                      ngOnInit(): void {
                      }
                  
                    }`, function (err) {
                      if (err) console.log("err");
                      console.log('Updated!');
                    });
                
                    fs.writeFile(`${process.argv[6]}/${process.argv[6]}.html`,'', function (err) {
                      if (err) console.log("err");
                      console.log('Updated!');
                    });
                
                    if(process.argv[7]!="inline"){  
                    fs.writeFile(`${process.argv[6]}/${process.argv[6]}.css`, '', function (err) {
                      if (err) console.log("err");
                      console.log('Updated!');
                    }); }
                    return"done"
                
              }
            
   
             else if(process.argv[5]=="s"||process.argv[5]=="service"){
                    fs.mkdir(path.join(__dirname, process.argv[6]),
                           { recursive: true }, (err) => {
                             if (err) {
                               return console.log("err");
                             }
                             console.log('Directory created successfully!');
                           })
                    fs.writeFile(`${process.argv[6]}/${process.argv[6]}.service.ts`,`import { Injectable } from '@angular/core';

                    @Injectable({
                      providedIn: 'root'
                    })
                    export class ${process.argv[6]} {
                    
                      constructor() { }
                    }`, function (err) {
                            if (err) console.log("err");
                            console.log('Updated!');
                          }); 

                        return"done"


                    }
                else
                           return "not done"
              
            
            
            break;
          }
            
      

        default: {
            console.log('you need to specify valid operand')
        }
    }

}
console.log(handleArgs());