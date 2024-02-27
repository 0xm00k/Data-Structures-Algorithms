const StaticArray = require("../impl/arraysImpl.js");

const arrayImpl = new StaticArray();

console.log(arrayImpl.push(5));
console.log(arrayImpl.push(6));
console.log(arrayImpl.push(20));
console.log(arrayImpl.push(15));
console.log(arrayImpl.push(1));
console.log(arrayImpl.push(5));
console.log(arrayImpl.push(7));
console.log(arrayImpl.delete(15));
console.log(arrayImpl.pop());
console.log(arrayImpl.pop());
