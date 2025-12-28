Here’s a **clean example of extending `EventEmitter` in Node.js** to create a **custom logger** that raises a logging event:

---

# ⚡ Extending EventEmitter — Custom Logger Example

### 1️⃣ Import `events` and extend it

```js
const EventEmitter = require('events');

// Create a Logger class by extending EventEmitter
class Logger extends EventEmitter {
    log(message) {
        console.log('Logging message:', message);

        // Raise an event after logging
        this.emit('messageLogged', { message });
    }
}
```

---

### 2️⃣ Using the Custom Logger

```js
const logger = new Logger();

// Attach a listener for the 'messageLogged' event
logger.on('messageLogged', (arg) => {
    console.log('Listener received:', arg);
});

// Raise the event by calling log()
logger.log('This is a test log');
```

✅ Output:

```
Logging message: This is a test log
Listener received: { message: 'This is a test log' }
```

---

### 3️⃣ How it works

1. **Extend `EventEmitter`** → Your class inherits event-handling abilities.
2. **log() method** → Performs an action (logging) and **emits an event**.
3. **Listener (`on`)** → Responds whenever the `'messageLogged'` event is raised.
4. You can pass **custom data** with `emit()` → listener receives it as arguments.

---

💡 **Takeaway:**

* Extending EventEmitter is the **recommended pattern** for creating modules that raise events (like loggers).
* Keeps code **modular** and **event-driven**.

---