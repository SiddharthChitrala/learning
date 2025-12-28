# JavaScript Reference Types, Objects, Functions & Arrays

## 🔹 Reference Types

Reference types store **memory addresses**, not actual values.
When assigned to another variable, both variables point to the **same object**.

### ✅ Reference Types Include:

* Objects
* Arrays
* Functions

### 📌 Example

```javascript
let person1 = { name: "John" };
let person2 = person1;

person2.name = "David";

console.log(person1.name); // David
console.log(person2.name); // David
```

👉 Both refer to the same memory location.

---

## 🔹 Objects

Objects store data in **key–value pairs**.

```javascript
let student = {
  name: "Rahul",
  age: 21,
  course: "JavaScript"
};
```

---

## 🔹 Dot Notation

Used when you **know property name** and it is a valid identifier.

```javascript
console.log(student.name);
console.log(student.age);
```

✔ Simple
✔ Fast
❌ Cannot use for dynamic keys or special characters

---

## 🔹 Bracket Notation

Used when:

* Property name is **dynamic**
* Contains space
* Starts with number
* Uses special characters

```javascript
console.log(student["name"]);
```

### 📌 Dynamic Example

```javascript
let key = "course";
console.log(student[key]);   // JavaScript
```

---

## 🔹 Selecting / Updating Object Properties

### ✅ Add New Property

```javascript
student.city = "Delhi";
student["country"] = "India";
```

### ✅ Update Property

```javascript
student.age = 22;
student["course"] = "Full Stack";
```

### ✅ Delete Property

```javascript
delete student.age;
```

---

## 🔹 Functions (Reference Type)

Functions are also objects in JavaScript.

```javascript
function greet(name){
  console.log("Hello " + name);
}

greet("Siddharth");
```

### Function Stored in Variable

```javascript
let sayHi = function(){
  console.log("Hi");
};
```

---

## 🔹 Arrays (Reference Type)

Arrays store multiple values.

```javascript
let numbers = [10, 20, 30, 40];
console.log(numbers);
```

### Access Elements

```javascript
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
```

### Modify Array

```javascript
numbers[1] = 50;
```

---

## 🧠 Key Differences: Dot vs Bracket

| Dot Notation  | Bracket Notation                |
| ------------- | ------------------------------- |
| `obj.name`    | `obj["name"]`                   |
| Static keys   | Dynamic keys                    |
| Simple to use | Supports spaces & special chars |
| Faster        | More flexible                   |

---

## 🖥️ Console Practice

Run this in browser console:

```javascript
let car = {
  brand: "BMW",
  model: "X5",
  "fuel type": "Petrol"
};

console.log(car.brand);
console.log(car["fuel type"]);

let key = "model";
console.log(car[key]);

car.color = "Black";
console.log(car);
```