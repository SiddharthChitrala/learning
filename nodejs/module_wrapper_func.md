# 🧩 Module Wrapper Function in Node.js

### 1️⃣ What is it?

Every Node.js module is **automatically wrapped** inside a function by Node.js before execution:

```js
(function (exports, require, module, __filename, __dirname) {
    // Your module code actually goes here
});
```

This is called the **module wrapper function**.

---

### 2️⃣ Why Node.js does this?

1. **Encapsulates module scope**

   * Variables declared with `var`, `let`, `const` **do not leak globally**
   * They are local to the module

2. **Provides useful parameters**

   * `exports` → Shortcut for `module.exports`
   * `require` → To import other modules
   * `module` → Module metadata (id, exports, filename)
   * `__filename` → Current file path
   * `__dirname` → Current directory path

---

### 3️⃣ Example

`logger.js`:

```js
var url = 'http://mylogger.io/log';

function log(message) {
  console.log(message);
}

module.exports.log = log;
module.exports.url = url;
```

Internally, Node wraps it like:

```js
(function (exports, require, module, __filename, __dirname) {
    var url = 'http://mylogger.io/log';

    function log(message) {
      console.log(message);
    }

    module.exports.log = log;
    module.exports.url = url;
});
```

---

### 4️⃣ Implications

* Top-level variables are **module-scoped** (not global)
* You get **automatic access** to `exports`, `require`, `module`, `__filename`, `__dirname`
* This is why you can write `module.exports` and `require()` without extra setup

---

### 5️⃣ Quick Summary

| Feature      | Purpose                                     |
| ------------ | ------------------------------------------- |
| `exports`    | Shortcut for exporting properties/functions |
| `require()`  | Import other modules                        |
| `module`     | Module metadata                             |
| `__filename` | Current file absolute path                  |
| `__dirname`  | Current directory absolute path             |

---

💡 **Takeaway:**
The **module wrapper function** is why Node.js has **module scope by default** and provides all essential variables automatically.

---