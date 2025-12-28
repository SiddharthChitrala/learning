# 🖥️ Node.js OS Module

### 1️⃣ What is `os`?

The **`os` module** provides **operating system-related utility methods**.
It’s a **built-in Node.js module**, no installation needed.

---

### 2️⃣ Importing `os`

```js
const os = require('os');
```

---

### 3️⃣ Commonly Used Methods / Properties

| Method / Property | Description                                   |
| ----------------- | --------------------------------------------- |
| `os.type()`       | Returns OS name (e.g., 'Linux', 'Windows_NT') |
| `os.platform()`   | Returns platform (e.g., 'win32', 'linux')     |
| `os.arch()`       | CPU architecture (e.g., 'x64')                |
| `os.cpus()`       | Array of CPU info objects                     |
| `os.freemem()`    | Free system memory in bytes                   |
| `os.totalmem()`   | Total system memory in bytes                  |
| `os.uptime()`     | System uptime in seconds                      |
| `os.homedir()`    | Current user home directory                   |
| `os.tmpdir()`     | OS temporary directory                        |

---

### 4️⃣ Example Usage

```js
const os = require('os');

console.log('OS Name:', os.type());
console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('System Uptime (s):', os.uptime());
```

---

### 5️⃣ Why use `os`?

* Get system info for monitoring or logging
* Determine platform-specific behavior
* Useful in CLI tools, server apps, and performance checks

---