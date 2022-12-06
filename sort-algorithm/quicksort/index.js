function partition(arr, start, end) {
  let pivot = arr[end];
  let partitionIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let tmp = arr[i];
      arr[i] = arr[partitionIndex];
      arr[partitionIndex] = tmp;
      partitionIndex++;
    }
  }
  let tmp = arr[partitionIndex];
  arr[partitionIndex] = arr[end];
  arr[end] = tmp;
  return partitionIndex;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
}

const arr = [2, 4, 1, 6, 8, 5, 3, 7];
const n = arr.length;

quickSort(arr, 0, n - 1);

console.log(arr);
