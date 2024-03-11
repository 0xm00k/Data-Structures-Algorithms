const ArrayImpl = require("../impl/ArrayImpl");

const arrayImpl = new ArrayImpl();

console.log(arrayImpl.append(25));
console.log(arrayImpl.append(29));
console.log(arrayImpl.append(5));
console.log(arrayImpl.append(9));
console.log(arrayImpl.append(15));
console.log(arrayImpl.append(19));
console.log(arrayImpl.append(50));

console.log(arrayImpl.get(7))

console.log(arrayImpl.get(1));
console.log(arrayImpl.getIndex(5));

console.log(arrayImpl.delete(29));
