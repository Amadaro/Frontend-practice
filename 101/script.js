//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let arr = [4, -2, 5, 19, -130, 0, 10];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

//Выведите на экран случайное целое число от 1 до 100.

console.log(Math.random());

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 100));

//С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(getRandom(1, 100));
}

console.log(arr);
