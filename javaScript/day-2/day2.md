# JavaScript Variables

## 📌 What Are Variables?

Variables are containers used to **store data** in JavaScript.
They allow us to save values and reuse them later in the program.

---

## 🧾 Variable Keywords

JavaScript provides three main ways to declare variables:

### 1️⃣ `var`

* Old way (before ES6)
* Function scoped
* Can be re-declared and updated
* Avoid using in modern JS

```javascript
var name = "John";
name = "David";   // allowed
var name = "Alex"; // allowed
```

---

### 2️⃣ `let`

* Introduced in ES6
* Block scoped `{ }`
* Can be updated
* Cannot be re-declared in same block

```javascript
let age = 20;
age = 21;     // allowed
// let age = 25; ❌ not allowed in same block
```

---

### 3️⃣ `const`

* Block scoped
* Cannot be changed (no re-assigning)
* Must be initialized when declared

```javascript
const pi = 3.14;
// pi = 4 ❌ not allowed
```

---

## 🧠 Scope Difference Summary

| Keyword | Scope    | Redeclare | Reassign | Modern Use           |
| ------- | -------- | --------- | -------- | -------------------- |
| var     | Function | ✔ Yes     | ✔ Yes    | ❌ Avoid              |
| let     | Block    | ❌ No      | ✔ Yes    | ✔ Recommended        |
| const   | Block    | ❌ No      | ❌ No     | ✔ Best for constants |

---

## 📌 Naming Rules

Variable names:
✔ Must start with letter, `_`, or `$`
✔ Cannot start with number
✔ Cannot use JS keywords
✔ Case sensitive

Valid:

```javascript
let firstName;
let _count;
let $price;
```

Invalid:

```javascript
let 1name;   // ❌
let let;     // ❌
```

---

## 🖥️ Small Console Example

Run in browser console:

```javascript
let name = "Siddharth";
const country = "India";
let age = 20;

console.log(name);
console.log(country);
console.log(age);
```

---