# 🌍 Global Object in Node.js (Complete Guide)

### 1️⃣ What is the Global Object?

In Node.js, the **global object** is the top-level object accessible anywhere in your program **without importing anything**.
It provides globally available variables, functions, timers, and utilities.

---

### 2️⃣ Common Global Features

| Feature                                           | Description                            |
| ------------------------------------------------- | -------------------------------------- |
| `console`                                         | Logging messages                       |
| `setTimeout()`, `setInterval()`, `setImmediate()` | Timers / scheduling                    |
| `process`                                         | Information about current Node process |
| `__dirname`                                       | Current directory path                 |
| `__filename`                                      | Current file path                      |
| `global`                                          | The actual global object               |

---

### 3️⃣ Example

```js
console.log(global);      // Shows all global properties
console.log(__dirname);   // Current directory path
console.log(__filename);  // Current file path

global.myVar = 100;       // Creating a global variable
console.log(myVar);       // Accessible anywhere
```

---

### 4️⃣ `global` vs `window` vs `globalThis`

| Environment | Global Object |                                         |
| ----------- | ------------- | --------------------------------------- |
| Node.js     | `global`      |                                         |
| Browser JS  | `window`      |                                         |
| Both        | `globalThis`  | // Standard reference for global object |

---

### 5️⃣ Scoping in Node.js

* Variables declared with `var`, `let`, or `const` at the top-level of a file **are local to that module**, **not global**.
* To make truly global variables, attach them to `global`:

```js
global.username = "Siddharth";
console.log(username); // Works anywhere in Node app
```

* Node uses **module scoping**, unlike browsers where top-level variables are global by default.

---

### 🔎 Key Takeaways

1. `global` is Node.js’s global object, not `window`.
2. Top-level variables are **module-scoped**, not global.
3. Use `global` only when necessary; avoid polluting global space.
4. `globalThis` works in **both browser and Node**.

---