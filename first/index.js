//console.log("Hello World");



/*
Node Modules:

Type of Node Modules:
    1. Use define modules
    2. Builtin Modules
    3. Third Part Modules

Type of Node Modules bases of import and export
    1. CJS (Common JS Modules, default)
    2. MJS (Module Style or Modern Modules)
*/
//************************User Define Modules *********************/
//Use define Modules in CJS style

// const name = require("./userDefinedModules/test");
// console.log(name);


//import array
//======================================================================
// const data = require("./userDefinedModules/test");
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// data[3]()//it is a function
// let obj = new data[4]() //class
// obj.show();
//---------------------or-----------------
//(if you want to only use display still you have to pass all others)
// const [name,arr,emp, display,Sample] = require("./userDefinedModules/test");
// console.log(name);
// console.log(arr);
// console.log(emp);
// display();
// let sam = new Sample();
// sam.show();

//==============================================================

//import using Object

// const data = require("./userDefinedModules/test");
// console.log(data.name);
// console.log(data.arr);
// console.log(data.emp);
// data.display();
// let sam = new data.Sample();
// sam.show();

//or
// const {name,arr,emp,Sample,display} = require("./userDefinedModules/test");
// console.log(name);
// console.log(arr);
// console.log(emp);
// display();
// let samp = new Sample();
// samp.show();

//========================CJS done================================

//========================MJS start==============================
// //User define modules in MJS stle

// import name from "./userDefinedModules/test2.mjs";
// console.log(name);

// import * as data from "./userDefinedModules/test2.mjs";
// console.log(data.name);
// console.log(data.arr);
// console.log(data.emp);
// data.display();
// let sam = new data.default();
// sam.show();


//using destructure
// import Sample, { name, arr, display, emp } from "./userDefinedModules/test2.mjs";
// console.log(name);
// console.log(arr);
// console.log(emp);
// data.display();
// let sam = new Sample();
// sam.show();

//***********************Using Core modules or Builtin Modules **************************/
//fs module in sync mode
// require("./builtinModules/fsModulesSync");
//require("./builtinModules/fsModulesAsync");
//require("./builtinModules/usingOSModule");
// require("./builtinModules/usingPathModule");

//Using Third party module
/*
var passwordValidator = require("password-validator");

var schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123','Admin@123']); // Blacklist these values

console.log(schema.validate("Admin@123"));

*/

//Node JS Server

// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("<h1>Hello from server</h1>");
// });

// server.listen(8000,()=>console.log("Server is running at http://localhost:8000"));

//node js routing
/*
const http = require("http");

const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url =="/")
    {
        res.end("<h1>This is home page</h1>");
    } else if(req.url == "/data") {
        // var data = [{
        //                 "id":1001,
        //                 "name":"Abhishek Shrivastav",
        //                 "age":35,
        //                 "location":"Delhi"
        //             }];
        // res.end(JSON.stringify(data));
        var data = fs.readFileSync("./data.json","utf-8");  
        res.end(data);
    } else {
        res.writeHead(404);
        res.end("<h1>Page not found</h1>");
    } 
    
});

server.listen(8000,()=>console.log("Server is running at http://localhost:8000"));
*/ 

//Node js Events Using event 
/*
const events = require("events");
const fs = require("fs");

const eventEmitter = new events();

//create and listen event
eventEmitter.on("test",()=>{
    console.log("test event is fired.");
});
//on is used to create and listen event

eventEmitter.on("name",(name)=> {
    console.log(`Name event is fired and name is ${name}`)
})

eventEmitter.on("data",(data)=>{
    console.log(`data event is fired and data is:` + data);
})

//emit means call or fire
eventEmitter.emit("test");

eventEmitter.emit("name","Abhishek Shrivastav");

var data = fs.readFileSync("./data.json","utf-8");

eventEmitter.emit("data",data);

*/

//Readable stream example
/*
const { error } = require("console");
const fs = require("fs");

//const data = fs.readFileSync("data1.json","utf-8");
//console.log(data.length);

const stream = fs.createReadStream("data2.json","utf-8");

stream.on("data",(chunk)=>{
    console.log("chunk received: "+JSON.parse(chunk.length));
});

stream.on("error",(error)=>{
    console.log(error);
});

stream.on("end",(error)=>{
    console.log("No more data to read in File.");
});
*/

//Duplex Example
/*
const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.url=="/") {
        res.end('<h1>This is homepage</h1>');
    } else if(req.url== "/data") {
        
        const fs = require("fs");

        //normal complete data print with server

        // const data  = fs.readFileSync("data1.json","utf-8");
        // res.end(data);
        

        //print data using chunk
        const stream = fs.createReadStream("data1.json","utf-8");

        stream.on("data",(chunk)=>{
            res.write(chunk);
        });

        stream.on("error",(error)=>{
            res.end(error);
        })

        stream.on("end",()=>{
            res.end("File is finished.");
        });

    } else {
        res.writeHead(404);
        res.end("No File exist");
    }
});

server.listen(8000,()=>console.log("server is running at http://localhost:8000"));
*/