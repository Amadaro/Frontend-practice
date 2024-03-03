let arr = [1, 2, 3, 0, 5, 6];

for (let elem of arr) {
  if (elem == '0') {
    break;
  } else {
    console.log(elem);
  }
}

let arr2 = [1, 3, 4, 5, -2, 5];
let sum = 0;
for (let elem of arr2) {
  if (elem < 0) {
    break;
  } else {
    sum += elem;
  }
}
console.log(sum);

let arr3 = [0, 1, 2, 2, 3, 4, 4, 4];
let pos = 0;

for (let elem of arr3) {
  if (elem == 3) {
    pos++;
    console.log('Первое число 3 в этом массиве имеет позицию - ' + pos);
  } else pos++;
}

let num = 0;

for (let i = 1; num < 100; i++) {
  if (num + i + 1 > 100) {
    console.log(i + ' цифр надо сложить, чтобы получилось больше 100');
    break;
  } else {
    num += i;
  }
}

console.log(num);
