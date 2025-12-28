# 📁 Node.js Path Module

### 1️⃣ What is `path`?

The **`path` module** provides utilities for working with **file and directory paths** in a cross-platform way.
It’s a **built-in Node.js module**, no installation needed.

---

### 2️⃣ Importing `path`

```js
const path = require('path');
```

---

### 3️⃣ Commonly Used Methods

| Method                   | Description                                       | Example                                                     |
| ------------------------ | ------------------------------------------------- | ----------------------------------------------------------- |
| `path.basename(path)`    | Returns the file name                             | `path.basename('/foo/bar/baz.txt') // 'baz.txt'`            |
| `path.dirname(path)`     | Returns the directory name                        | `path.dirname('/foo/bar/baz.txt') // '/foo/bar'`            |
| `path.extname(path)`     | Returns the file extension                        | `path.extname('index.html') // '.html'`                     |
| `path.join(...paths)`    | Joins paths correctly                             | `path.join('/foo', 'bar', 'baz.txt') // '/foo/bar/baz.txt'` |
| `path.resolve(...paths)` | Resolves to an absolute path                      | `path.resolve('foo', 'bar') // '/current/dir/foo/bar'`      |
| `path.parse(path)`       | Returns an object with root, dir, base, ext, name | `path.parse('/foo/bar/baz.txt')`                            |

Example of `parse` output:

```js
{
  root: '/',
  dir: '/foo/bar',
  base: 'baz.txt',
  ext: '.txt',
  name: 'baz'
}
```

---

### 4️⃣ Why use `path`?

* Cross-platform compatibility (Windows vs Linux paths)
* Avoid string concatenation for file paths
* Easier to manipulate, resolve, and extract file/folder names

---

### 5️⃣ Quick Example

```js
const path = require('path');

const filePath = '/users/admin/docs/file.txt';

console.log(path.basename(filePath)); // 'file.txt'
console.log(path.dirname(filePath));  // '/users/admin/docs'
console.log(path.extname(filePath));  // '.txt'
console.log(path.join('/users', 'admin', 'docs')); // '/users/admin/docs'
```

---