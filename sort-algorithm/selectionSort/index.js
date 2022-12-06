const arr = [7, 5, 4, 3, 2, 1];

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) min_index = j;
    }
    let tmp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = tmp;
  }
  return arr;
}

selectionSort(arr);

console.log(arr);
