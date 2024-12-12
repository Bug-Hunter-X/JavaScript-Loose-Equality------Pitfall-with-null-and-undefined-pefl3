function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return -1; // Or handle undefined differently
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1