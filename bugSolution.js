function myFunction(a, b) {
  if (isNaN(a) || isNaN(b) || a === Infinity || b === Infinity || a === -Infinity || b === -Infinity) {
    return "Error: Cannot perform subtraction with NaN or Infinity";
  } else {
    return a - b;
  }
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(0, 0)); // Output: 0
console.log(myFunction(NaN, 5)); // Output: Error: Cannot perform subtraction with NaN or Infinity
console.log(myFunction(5, NaN)); // Output: Error: Cannot perform subtraction with NaN or Infinity
console.log(myFunction(Infinity, 5)); // Output: Error: Cannot perform subtraction with NaN or Infinity
console.log(myFunction(5, Infinity)); // Output: Error: Cannot perform subtraction with NaN or Infinity
console.log(myFunction(Infinity, Infinity)); // Output: Error: Cannot perform subtraction with NaN or Infinity