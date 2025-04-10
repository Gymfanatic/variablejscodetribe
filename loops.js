// For loop - Iterating over an array
let fruits = ["Apple", "Banana", "Orange"];
console.log("For Loop: Iterating over an array");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop - Looping as long as a condition is true
console.log("While Loop: Counting from 1 to 5");
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Do-while loop - Ensures the loop runs at least once
console.log("Do-While Loop: Counting from 1 to 3");
let counter = 1;
do {
  console.log(counter);
  counter++;
} while (counter <= 3);

// For-in loop - Iterating over object properties
let person = {
  firstName: "Neo",
  lastName: "Mabasa",
  age: 25
};
console.log("For-In Loop: Iterating over an object");
for (let key in person) {
  console.log(key + ": " + person[key]);
}
