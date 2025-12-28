# 🌿 Introduction to Node.js

## ✅ What is Node.js?

Node.js is a **runtime environment** that allows you to execute **JavaScript outside the browser**, built on the **V8 JavaScript engine** (the same engine used in Google Chrome).

It enables JavaScript to be used for **server-side development**, backend APIs, real-time applications, command line tools, and more.

---

## ⚙️ Why Node.js?

Node.js is popular because it is:

* 🏎️ **Fast** — Powered by Google’s V8 engine
* 🔁 **Non-blocking I/O** — Handles many requests efficiently
* 🧵 **Single-threaded but highly scalable**
* 🌍 **Cross-platform** — Works on Windows, Linux, macOS
* 📦 **NPM (Node Package Manager)** — Largest ecosystem of open-source packages

---

## 🧠 Key Concepts

### 🟢 Event-Driven Architecture

Node.js uses an **event loop** to handle asynchronous operations without blocking execution.

### 🧵 Single Threaded — But Powerful

Even though Node.js runs on a single thread, it efficiently manages thousands of concurrent connections using asynchronous callbacks.

---

## 📦 Node.js vs Browser JavaScript

| Feature            | Browser JS   | Node.js               |
| ------------------ | ------------ | --------------------- |
| Runs where?        | Browser      | Server / System       |
| Access DOM?        | ✔️ Yes       | ❌ No                  |
| Access Filesystem? | ❌ No         | ✔️ Yes                |
| Module System      | ES Modules   | CommonJS + ES Modules |
| Use Case           | UI, Frontend | Backend, APIs, Tools  |

---

## 🛠️ Installing Node.js

Download from:
👉 [https://nodejs.org](https://nodejs.org)

Verify installation:

```bash
node -v
npm -v
```

---

## 🚀 First Node.js Program

Create a file:

```js
console.log("Hello from Node.js!");
```

Run it:

```bash
node filename.js
```

---

## 🌐 Simple Server Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to Node.js Server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run:

```bash
node server.js
```

Open in browser:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📚 Core Modules

Some important built-in modules:

* `http` — Create servers
* `fs` — File handling
* `path` — Work with file paths
* `os` — System info
* `events` — Event handling

---

## 🎯 Where is Node.js Used?

* Backend APIs
* Real-time apps (Chat, Gaming)
* REST & GraphQL servers
* Microservices
* Streaming apps
* CLI tools
* IoT applications

---

## 📝 Summary

Node.js allows JavaScript to run on the server, offering **speed, scalability, and asynchronous power**, making it one of the most loved backend technologies today.

---