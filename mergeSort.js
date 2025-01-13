function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = arr.length / 2;
  let half1 = mergeSort(arr.slice(0, mid));
  let half2 = mergeSort(arr.slice(mid, arr.length));
  return merge(half1, half2);
}

function merge(arr1, arr2) {
  let arr = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length && b < arr2.length) {
    while (arr1[a] <= arr2[b]) {
      arr.push(arr1[a++]);
    }
    while (arr2[b] <= arr1[a]) {
      arr.push(arr2[b++]);
    }
  }
  while (a < arr1.length) {
    arr.push(arr1[a++]);
  }
  while (b < arr2.length) {
    arr.push(arr2[b++]);
  }
  return arr;
}

console.log("Array 1: " + mergeSort([3, 2, 1, 13, 8, 5, 0, 1]).toString());
console.log("Array 2: " + mergeSort([105, 79, 100, 110]).toString());
