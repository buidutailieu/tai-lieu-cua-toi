function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let hole = i;
    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole -= 1;
    }
    arr[hole] = value;
  }
}

// const arr = [2, 3, 4, 5, 1];

const arr = [7, 5, 4, 3, 2, 1];

insertionSort(arr);

console.log(arr);
