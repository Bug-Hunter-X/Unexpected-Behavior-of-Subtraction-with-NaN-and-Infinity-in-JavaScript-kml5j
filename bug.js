function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(0, 0)); // Output: 0
console.log(myFunction(NaN, 5)); // Output: NaN
console.log(myFunction(5, NaN)); // Output: NaN
console.log(myFunction(Infinity, 5)); // Output: Infinity
console.log(myFunction(5, Infinity)); // Output: -Infinity
console.log(myFunction(Infinity, Infinity)); // Output: NaN