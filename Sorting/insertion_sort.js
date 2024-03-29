function insertionSort(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}

(function main() {
  const arr = [14, 9, 15, 12, 6, 8, 13];
  const n = arr.length;
  insertionSort(arr, n);
  console.log(arr);
})();

/*****************************************************************/

function recursiveInsertionSort(arr, i, n) {
  if (i >= n) return;

  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
  }

  recursiveInsertionSort(arr, i + 1, n);
}

(function main() {
  let arr = [13, 46, 24, 52, 20, 9];
  let n = arr.length;
  recursiveInsertionSort(arr, 1, n);
  console.log(arr);
})();
