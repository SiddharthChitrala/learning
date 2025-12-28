# JavaScript: Dynamic Typing & `typeof` Operator

## 🔹 Dynamic Typing in JavaScript

JavaScript is a **dynamically typed language**, meaning:

* You **don’t need to declare data types** while creating variables.
* A variable’s type is **decided at runtime**, not compile time.
* A variable can **change its data type** during execution.

### ✅ Example

```javascript
let x;
x = 10;          // Number
x = "Hello";     // String
x = true;        // Boolean
```

👉 Same variable, different types at different times.

### 🧠 Key Points

✔ No need to specify type like `int`, `string`, etc.
✔ Type automatically determined.
✔ Flexible but can cause bugs if not handled carefully.

---

## 🔹 `typeof` Operator

The **`typeof`** operator is used to check the **data type of a value or variable**.

### ✅ Syntax

```javascript
typeof value
typeof(variableName)
```

---

## 🔍 `typeof` Results Table

| Value     | Result                                        |
| --------- | --------------------------------------------- |
| Number    | `"number"`                                    |
| String    | `"string"`                                    |
| Boolean   | `"boolean"`                                   |
| Undefined | `"undefined"`                                 |
| Symbol    | `"symbol"`                                    |
| BigInt    | `"bigint"`                                    |
| Function  | `"function"`                                  |
| Object    | `"object"`                                    |
| Array     | `"object"`                                    |
| Null      | `"object"` (special case / bug in JS history) |

---

## 🧪 Examples

### 📌 Basic Types

```javascript
typeof 10;           // "number"
typeof "Hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
```

---

### 📌 Objects and Arrays

```javascript
typeof {name: "John"};   // "object"
typeof [1,2,3];          // "object"  (because array is an object)
```

---

### 📌 Special Cases

#### 1️⃣ `null`

```javascript
typeof null; // "object"
```

👉 This is **a historical bug in JavaScript**, but kept for compatibility.

---

#### 2️⃣ `function`

```javascript
typeof function(){};
// "function"
```

👉 Technically functions are objects, but JS gives special `"function"` type.

---

#### 3️⃣ `NaN`

```javascript
typeof NaN; // "number"
```

👉 NaN (Not a Number) is still considered a number type.

---

#### 4️⃣ BigInt

```javascript
typeof 123n; // "bigint"
```

---

## 🖥 Small Console Example

Run in browser console:

```javascript
let value;

value = 50;
console.log(typeof value);

value = "JavaScript";
console.log(typeof value);

value = {a:1};
console.log(typeof value);

value = null;
console.log(typeof value);
```

---

## 🧠 Summary

* JavaScript is **dynamically typed**
* Variables can change type at runtime
* `typeof` helps identify the data type
* Watch out for special cases like:

  * `typeof null` → `"object"`
  * Arrays → `"object"`

---