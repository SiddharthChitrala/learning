# ⚡ Node.js Events Module

### 1️⃣ What is `events`?

The **`events` module** allows Node.js to create **event-driven programs**.
It provides the **EventEmitter class** to handle events and callbacks.

---

### 2️⃣ Importing `events`

```js
const EventEmitter = require('events');
```

---

### 3️⃣ Creating an Event Emitter

```js
const emitter = new EventEmitter();

// Register an event listener
emitter.on('messageLogged', (arg) => {
    console.log('Event called', arg);
});

// Raise / emit the event
emitter.emit('messageLogged', { id: 1, url: 'http://example.com' });
```

✅ Output:

```
Event called { id: 1, url: 'http://example.com' }
```

---

### 4️⃣ Common Methods

| Method                            | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `on(event, listener)`             | Register a listener for an event                |
| `emit(event, args...)`            | Trigger the event, optionally passing arguments |
| `once(event, listener)`           | Listen to an event **only once**                |
| `removeListener(event, listener)` | Remove a specific listener                      |

---

### 5️⃣ Why Use Events?

* Node.js is **asynchronous**; events allow **non-blocking communication**.
* Useful in **real-time apps**, **logging**, **streams**, and **servers**.

---

### 6️⃣ Example: Simple Logger Module

```js
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', { message });
    }
}

const logger = new Logger();
logger.on('messageLogged', (arg) => console.log('Listener:', arg));

logger.log('Hello EventEmitter');
```

✅ Output:

```
Hello EventEmitter
Listener: { message: 'Hello EventEmitter' }
```

---

💡 **Key Takeaway:**
The `events` module is **core to Node.js’ asynchronous architecture**, letting you **emit and respond to events** cleanly.

---

Here’s a **clean explanation and example** of your Node.js EventEmitter code:

---

# ⚡ Node.js Event Module Example

The **`events` module** allows Node.js to handle **custom events** asynchronously using `EventEmitter`.

---

### 1️⃣ Import EventEmitter

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
```

---

### 2️⃣ Listening for Events

```js
myEmitter.on('event msg log', () => {
    console.log('Event has been raised and logged!');
});
```

* `on()` registers a **listener** for the event `'event msg log'`.
* The listener runs **every time the event is emitted**.

---

### 3️⃣ Emitting Events

```js
myEmitter.emit('event msg log');
```

* `emit()` **raises the event**.
* **Important:** Listeners must be attached **before** emitting the event, otherwise it won’t run.

---

### 4️⃣ Events with Arguments

```js
myEmitter.on('event with args', (arg1, arg2) => {
    console.log('Event with arguments raised:', arg1, arg2);
});

myEmitter.emit('event with args', { data1: 'value1' }, { data2: 'value2' });
```

✅ Output:

```
Event with arguments raised: { data1: 'value1' } { data2: 'value2' }
```

* You can pass **any number of arguments** when emitting an event.
* They are received by the listener as parameters.

---

### 5️⃣ Key Points

1. Use `on()` to **listen** for events.
2. Use `emit()` to **raise/trigger** events.
3. Listeners must be attached **before emitting** to catch the event.
4. Event arguments allow passing **custom data** to listeners.

---
