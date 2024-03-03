let obj = { x: 1, y: 2, z: 3 };
console.log(obj['x']);

let obj2 = { x: 1, y: 2, z: 3 };
let key = 'x';

console.log(obj2[key]);

let obj3 = { x: 1, y: 2, z: 3 };
let sum = obj3['x'] + obj3['y'] + obj3['z'];

console.log(sum);

let obj4 = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj4).length);
