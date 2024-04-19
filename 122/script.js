// Напишите, какие недостатки у следующего кода, и исправьте их:

function calcHalfArr(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  return res / arr.length;
}

function calcDivArrs(arr1, arr2) {
  let res1 = 0;
  let res2 = 0;

  for (let elem of arr1) {
    res1 += elem;
  }
  for (let elem of arr2) {
    res2 += elem;
  }

  return res1 / res2;
}

function getMult(arr) {
  let res = 1;

  for (let elem of arr) {
    res *= elem;
  }

  return res;
}
