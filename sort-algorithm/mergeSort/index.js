function merge(L, R, arr) {
  let i = 0,
    j = 0,
    k = 0,
    nL = L.length,
    nR = R.length;

  while (i < nL && j < nR) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  while (i < nL) arr[k++] = L[i++];

  while (j < nR) arr[k++] = R[j++];

  return arr;
}

function mergerSort(arr) {
  const n = arr.length;

  if (n < 2) return;

  const mid = n / 2;

  const left_arr = arr.slice(0, mid);
  const right_arr = arr.slice(mid, n);

  mergerSort(left_arr);
  mergerSort(right_arr);

  merge(left_arr, right_arr, arr);
}


const arr = [2, 4, 1, 6, 8, 5, 3, 7];

mergerSort(arr);

console.log(arr);
