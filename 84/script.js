// let arr = [];

// for (i = 1; i <= 10; i++) {
//   arr.push('x');
// }

// console.log(arr);

// let arr2 = [];

// for (i = 1; i <= 10; i++) {
//   arr2.push(i);
// }

// console.log(arr2);

// let arr3 = [-1, -3, 5, 6, 14, 17];

// for (elem of arr3) {
//   if (elem > 0 && elem < 10) {
//     console.log(elem);
//   }
// }

// // Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

// let arr4 = [3, 4, 4, 2, 1, 2];
// let flag = false;

// for (elem of arr4) {
//   if (elem == 5) {
//     flag = true;
//     break;
//   }
// }

// if (flag == true) {
//   console.log('В массиве есть элемент со значением 5');
// } else {
//   console.log('В массиве нет элемента со значением 5');
// }

//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1, 3, 5, 7];
// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] ** 2;
//   sum += arr[i];
// }
// console.log(arr);
// console.log(sum);

//Дан массив с числами. Найдите среднее арифметическое его элементов. т.е. сумма всех чисел, поделенная на их количество

// let arr = [1, 3, 5, 1];
// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum / arr.length);

//Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.

// let n = 10; //ввести любое число
// let result = 1;
// for (let i = 1; i < n; i++) {
//   result = result * (i + 1);
// }
// console.log(result);

//Заполните массив числами от 10 до 1 с помощью цикла.

// let arr = [];

// for (let i = 10; i >= 1; i--) {
//   arr.push(i);
// }
// console.log(arr);

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [1, 3, -4, -5, 6, 7];
// let sumPositive = 0;

// for (let elem of arr) {
//   if (elem > 0) {
//     sumPositive += elem;
//   }
// }

// console.log(sumPositive);

//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let elem of arr) {
//   if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
//     console.log(elem);
//   }
// }

//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [1, 2, 3, 4, 5];
// for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

// let arr = [1, 3, 3, 4, 4, 6, 6];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == i) {
//     console.log(arr[i]);
//   }
// }

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   document.write(elem + '<br>');
// }

//Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   document.write('<p>' + elem + '</p>');
// }

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// for (let elem of arr) {
//   if (elem == 'Сб' || elem == 'Вс') {
//     document.write('<b>' + elem + '</b>' + ' ');
//   } else document.write(elem + ' ');
// }

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// let day = 'Вс';

// for (let elem of arr) {
//   if (elem == day) {
//     document.write('<i>' + elem + '</i>' + ' ');
//   } else document.write(elem + ' ');
// }

//Увеличьте зарплату каждого работника на 10%.

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// for (let key in obj) {
//   obj[key] = obj[key] + obj[key] * 0.1;
// }

// console.log(obj);

//Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// for (let key in obj) {
//   if (obj[key] <= 400) {
//     obj[key] = obj[key] + obj[key] * 0.1;
//   }
// }

// console.log(obj);

//С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};

// for (i = 0; i < arr1.length; i++) {
//   obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

//Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let sumKeys = 0;
// let sumValues = 0;

// for (let key in obj) {
//   sumKeys += +key;
//   sumValues += obj[key];
// }

// console.log('Сумма ключей = ' + sumKeys + ' Сумма значений = ' + sumValues);

//Запишите ключи этого объекта в один массив, а значения - в другой.

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// let arrKeys = [];
// let arrValues = [];

// for (let key in obj) {
//   arrKeys.push(key);
//   arrValues.push(obj[key]);
// }

// console.log(arrKeys + ' ' + arrValues);

//Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

// let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
// };

// let arr = [];

// for (let key in obj) {
//   if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
//     arr.push(obj[key]);
//   }
// }

// console.log(arr);

// Дан следующий массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:

// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (i = 0; i < arr.length; i++) {
//   obj[i + 1] = arr[i];
// }

// console.log(obj);

// Дан следующий массив:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:

// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (i = 0; i < arr.length; i++) {
//   obj[arr[i]] = i + 1;
// }

// console.log(obj);
