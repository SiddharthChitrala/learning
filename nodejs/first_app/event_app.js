const EventEmitter = require('events');



const Logger = require('./event_logger');
const logger = new Logger();


// Register a listener for the 'messageLogged' event
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Raise the event by calling log()
logger.log('This is a log message');
