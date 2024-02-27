//input => 'James'
//output =>"semaJ"

//1.convert the string an array
//2. then we loop through the array and start returning from the last element to the first.
//0(n)

function reverseString(string) {
  //1.convert the string an array
  let arrayString;

  arrayString = string?.split("");

  let reversedArray = [];

  for (let i = arrayString?.length - 1; i >= 0; i--) {
    reversedArray.push(arrayString[i]);
  }

  return reversedArray;
}

console.log(reverseString("a,b"));
