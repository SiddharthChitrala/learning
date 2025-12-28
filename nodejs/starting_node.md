# ✅ Installing Node.js

### 🔹 Step 1 — Download

Go to
[https://nodejs.org](https://nodejs.org)
Download **LTS version** (recommended).

### 🔹 Step 2 — Install

Run setup → Next → Next → Finish.

### 🔹 Step 3 — Verify Installation

Open terminal / command prompt and check:

```bash
node -v
npm -v
```

If versions appear → Node installed successfully 🎉

---

# 🚀 Your First Node Program

### 1️⃣ Create a file

`app.js`

### 2️⃣ Write code

```js
console.log("Hello Node.js!");
```

### 3️⃣ Run the program

```bash
node app.js
```

Output:

```
Hello Node.js!
```

---

# 📦 Node Module System (Small Intro)

Node uses **modules** to organize and reuse code.

---

## 1️⃣ Built-in (Core) Modules

Already available in Node. Example:

```js
const fs = require("fs");
```

Common ones:

* `fs` → File system
* `http` → Server
* `path` → File paths
* `os` → System info

---

## 2️⃣ User-Created Modules

Create your own module.

📌 file: `math.js`

```js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

📌 file: `app.js`

```js
const add = require("./math");
console.log(add(5, 3));
```

Run → `node app.js`

---

## 3️⃣ Third-Party Modules (npm)

Install packages using npm.

Example: install lodash

```bash
npm install lodash
```

Use it:

```js
const _ = require("lodash");
```

---

### 📝 Summary

✔️ Install Node → run programs in terminal
✔️ First program uses `console.log()`
✔️ Node modules = Core + Custom + npm packages

---