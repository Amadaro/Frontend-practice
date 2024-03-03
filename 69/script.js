let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let element of arr) {
  sum += element;
}
console.log('Сумма элементов массива = ' + sum);

let arr2 = [2, 5, 9, 3, 1, 4];
let sum2 = 0;
for (let element of arr2) {
  if (element % 2 == 0) {
    sum2 += element;
  }
}
console.log('Сумма четных элементов массива = ' + sum2);

let arr3 = [2, 5, 9, 3, 1, 4];
let sum3 = 0;

for (let element of arr3) {
  sum3 = sum3 + element ** 2;
}
console.log('Сумма квадратов элемента этого массива равна - ' + sum3);

let arr4 = [2, 5, 9, 3, 1, 4];
let mult = 1;

for (let elem of arr4) {
  mult = mult * elem;
}
console.log('Произведение элементов этого массива равно - ' + mult);
