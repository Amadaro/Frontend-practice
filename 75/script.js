let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

let arr2 = [];

for (let i = 1; i <= 10; i++) {
  arr2.push('x');
}
console.log(arr2);

let arr3 = [1, -2, 3, -4, 5, -6];
let newarr = [];

for (let elem of arr3) {
  if (elem >= 0) {
    newarr.push(elem);
  }
}
console.log(newarr);
