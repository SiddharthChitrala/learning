Here’s a **compact guide to the Node.js `http` module**:

---

# 🌐 Node.js HTTP Module

### 1️⃣ What is `http`?

The **`http` module** allows Node.js to **create HTTP servers and clients**.
It is **built-in**, no installation needed.

---

### 2️⃣ Importing `http`

```js
const http = require('http');
```

---

### 3️⃣ Creating a Simple Server

```js
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response
    res.end('Hello from Node.js HTTP server!');
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

✅ Output (on browser or curl):

```
Hello from Node.js HTTP server!
```

---

### 4️⃣ Server Events

The `server` object is an **EventEmitter**, so you can listen to events:

```js
server.on('connection', (socket) => {
    console.log('New connection established');
});
```

Common server events:

* `'request'` → emitted when a new request comes in
* `'connection'` → emitted when a new TCP connection is made
* `'close'` → server closed

---

### 5️⃣ Creating an HTTP Client (Optional)

```js
http.get('http://www.example.com', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(data));
});
```

---

### 6️⃣ Key Points

* Node.js **HTTP server is event-driven**.
* The `request` and `response` objects are **streams**.
* Can serve plain text, JSON, or HTML content.
* Useful for **APIs, web servers, and microservices**.

---