const ArrayImpl = require("../impl/ArrayImpl");

const arrayImpl = new ArrayImpl();

console.log(arrayImpl.append(25));
console.log(arrayImpl.append(29));
console.log(arrayImpl.append(5));

console.log(arrayImpl.get(1));
