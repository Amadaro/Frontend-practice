let obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
  console.log(key);
}

let obj2 = { x: 1, y: 2, z: 3 };

for (let elem in obj2) {
  console.log(obj[elem]);
}
