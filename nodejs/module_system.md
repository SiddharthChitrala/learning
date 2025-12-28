# 📦 Node Module System (Small Definition)

Node.js uses **modules** to organize code. Modules can be:

1. **Core modules** → Built-in, no installation needed
2. **User-defined modules** → Custom code exported/imported
3. **Third-party modules** → Installed via npm

Syntax:

```js
const moduleName = require("module-name"); // CommonJS
```

---

# 🖥️ Core Node.js Modules (Small Definitions)

| Module     | Purpose / Definition                                                  |
| ---------- | --------------------------------------------------------------------- |
| **os**     | Provides operating system info (CPU, memory, platform, etc.)          |
| **fs**     | File system module — read/write files asynchronously or synchronously |
| **events** | Allows creation of event-driven programs using EventEmitter           |
| **http**   | Enables creating HTTP servers and making HTTP requests                |

---

### 🔹 Example Usage

**OS Module**

```js
const os = require("os");
console.log(os.platform()); // e.g., 'win32'
```

**FS Module**

```js
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello Node!");
```

**Events Module**

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("greet", () => console.log("Hello!"));
emitter.emit("greet");
```

**HTTP Module**

```js
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from server!");
});
server.listen(3000);
```

---

If you want, I can make a **single small Markdown file** combining:
`Installing Node`, `First Program`, `Node Module System`, `OS, FS, Events, HTTP` for super compact notes.
