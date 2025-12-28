// Event Module

const EventEmitter = require('events');

const myEmitter = new EventEmitter();




// Listen for the event
myEmitter.on('event msg log', () => {
    console.log('Event has been raised and logged!');
});



// Raise an event
// myEmitter.emit('event msg log'); // Uncommenting this line will raise the event before any listener is attached
myEmitter.emit('event msg log'); // This will not log anything as no listener is attached


//event arguments

myEmitter.on('event with args', (arg1, arg2) => {
    console.log('Event with arguments raised:', arg1, arg2);
});

myEmitter.emit('event with args', { data1: 'value1' }, { data2: 'value2' });
// Raise the event after listener is attached
