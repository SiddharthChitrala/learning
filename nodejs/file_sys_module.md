# 📂 Node.js File System (fs) Module

### 1️⃣ What is `fs`?

The **`fs` module** allows Node.js to **interact with the file system** — reading, writing, updating, and deleting files.
It is **built-in**, no installation needed.

---

### 2️⃣ Importing `fs`

```js
const fs = require('fs');
```

---

### 3️⃣ File Operations

| Operation   | Method (Async / Sync)                     | Description                    |
| ----------- | ----------------------------------------- | ------------------------------ |
| Read File   | `fs.readFile()` / `fs.readFileSync()`     | Read file contents             |
| Write File  | `fs.writeFile()` / `fs.writeFileSync()`   | Write data to file (overwrite) |
| Append File | `fs.appendFile()` / `fs.appendFileSync()` | Add data to file               |
| Delete File | `fs.unlink()` / `fs.unlinkSync()`         | Delete a file                  |
| Rename File | `fs.rename()` / `fs.renameSync()`         | Rename a file                  |

---

### 4️⃣ Directory Operations

| Operation        | Method (Async / Sync)               | Description        |
| ---------------- | ----------------------------------- | ------------------ |
| Read Directory   | `fs.readdir()` / `fs.readdirSync()` | List files/folders |
| Create Directory | `fs.mkdir()` / `fs.mkdirSync()`     | Create a folder    |
| Remove Directory | `fs.rmdir()` / `fs.rmdirSync()`     | Delete a folder    |

---

### 5️⃣ Example Usage

```js
const fs = require('fs');

// Write file
fs.writeFileSync('example.txt', 'Hello Node.js!');

// Read file
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data); // Hello Node.js!

// Append file
fs.appendFileSync('example.txt', '\nWelcome!');

// Delete file
// fs.unlinkSync('example.txt');
```

---

### 6️⃣ Notes

* **Async methods** are preferred in real apps to avoid blocking the event loop.
* **Sync methods** are easier for scripts or small tasks.
* Combine `fs` with `path` for cross-platform file operations.

---