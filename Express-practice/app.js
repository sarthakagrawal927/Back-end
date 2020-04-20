//Template String
//ES6

//main module

// function sayhi(name){
//   console.log('hi '+ name);
// }
// sayhi('sarthak');

// console.log();
//
// setTimeout();
// clearTimeout();
//
// setInteral();
// clearInterval(); //all functions belong to window object
//
// var message = ''; //not added to global

// const logger = require('./logger'); //loading a module in a constant
// // console.log(logger);
//
// logger('my message');   //has just one function
//
// const path = require('path');
//
// var pathObj = path.parse(__filename);
// console.log(path);

// const os = require('os');
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
// console.log('total memory=' +totalMemory+'free memory=' + freeMemory);
//
// console.log(`Total memory: ${totalMemory}`);
//
// const fs = require('fs');
//
// const files = fs.readdirSync('./');
// console.log(files);
//
// fs.readdir('./',function(err,files){   //always prefer asynchronous methods as it executes without any dependency and order
//   if(err) console.log('error',err);
//     else  console.log('Result',files);
// });

const EventEmitter = require('events'); //class - contains methods and each word starts with capital
//const emitter = new EventEmitter();
//raise event logging (message)

const Logger = require('./logger'); //Logger gets a class
const logger = new Logger();

//register a listener
logger.on('messagelogged',(arg) => {  //object is loggger
  console.log('listener called',arg);
  //console.log('listener called'+arg);
});

logger.log('my message');

const http = require('http');  //inherits eventemitter

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write('hello world');
    res.end();
  }
  //
  // if(req.url == '/api'){
  //   res.write(JSON.stringify([1,2,3,4,5]));
  //   res.end();
  // }
});

server.on('connection',(socket)=> {
  console.log('new connection');
});

server.listen(3000);
console.log('listening on port 3000........');
