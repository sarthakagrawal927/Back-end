const EventEmitter = require('events'); //class - contains methods and each word starts with capital
//const emitter = new EventEmitter();

class Logger extends EventEmitter{ 
  log(message){ //can log a message

    console.log(message);
    //raise an event
     this.emit('messagelogged',{id: 1, url: 'http://www.google.com'})  //making noise / produce something
}
}

module.exports = Logger;  //sended just the function
