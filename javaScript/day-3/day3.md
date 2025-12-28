# JavaScript: Primitive (Value) Types & Reference Types

## 🔹 1. Primitive / Value Types

Primitive types store **actual values**.
When assigned or passed to a variable, a **copy of the value** is created.

### ✅ Primitive Types

* Number
* String
* Boolean
* Undefined
* Null
* Symbol
* BigInt

### 📌 Example

```javascript
let a = 10;
let b = a;   // copy of value

b = 20;

console.log(a); // 10
console.log(b); // 20
```

👉 Changing **b** does NOT affect **a** because they store separate copies.

---

## 🔹 2. Reference Types

Reference types store **addresses (references) to memory**, not the actual data.
When assigned, both variables point to the **same memory location**.

### ✅ Reference Types

* Objects
* Arrays
* Functions

### 📌 Example (Object)

```javascript
let obj1 = { name: "John" };
let obj2 = obj1;  // obj2 refers to same object

obj2.name = "David";

console.log(obj1.name); // David
console.log(obj2.name); // David
```

👉 Changing **obj2** also changes **obj1**.

---

## 🧠 Key Difference

| Primitive (Value)             | Reference                  |
| ----------------------------- | -------------------------- |
| Stores actual value           | Stores memory address      |
| Copy is created when assigned | Shares same reference      |
| Independent values            | Linked values              |
| Changes do not affect others  | Changes reflect everywhere |

---

## 🖥️ Small Console Example

Run this in browser console:

```javascript
// Primitive Example
let x = 5;
let y = x;
y = 10;
console.log("Primitive:", x, y);

// Reference Example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Reference:", arr1, arr2);
```

---