const EventEmitter = require('events');
// const emitter = new EventEmitter();

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Log the message
        console.log(message);
        // Raise an event
        this.emitter.emit('messageLogged', { id: 1, url: url });
    }
}


module.exports.log = Logger;
