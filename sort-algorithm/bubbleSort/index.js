function bubbleSort(arr) {
  const n = arr.length;
  for (let c = 0; c < n; c++) {
    let flag = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        flag = true;
      }
    }
    if (!flag) break;
  }
}

const arr = [7, 5, 4, 3, 2, 1];

bubbleSort(arr);

console.log(arr);
