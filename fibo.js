function fibs(n) {
  let res = [0, 1];
  for (let i = 1; i < n - 1; ++i) {
    res.push(res[i] + res[i - 1]);
  }
  return res;
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 2) return arr;
  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(n - 1, arr);
}

console.log("Iterative: " + fibs(8).toString());
console.log("Recursive: " + fibsRec(8).toString());
