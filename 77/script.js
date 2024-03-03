let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (i = 0; i < arr1.length; i++) {
  obj[arr1[i]] = arr2[i];
}

console.log(obj);

let obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj3 = {};

for (let key in obj2) {
  if (obj2[key] % 2 == 0) {
    obj3[key] = obj2[key];
  }
}
console.log(obj3);

let obj4 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj5 = {};

for (let key in obj4) {
  obj5[obj4[key]] = key;
}

console.log(obj5);
