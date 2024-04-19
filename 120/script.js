// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

// let arr2 = [2, 4, 9, 8];
// function func(arr) {
//   for (let elem of arr) {
//     if (elem % 2 > 0) {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }

// func(arr2);

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// let arr3 = [3, 5, 7, 1, 9];

// function nechet(arr) {
//   for (let elem of arr) {
//     if (elem % 2 == 0) {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }

// nechet(arr3);

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

let arr = [1, 2, 3, 9, 4, 5];

function podryad(arr) {
  let sravnenie;
  for (let elem of arr) {
    if (elem == sravnenie) {
      return console.log('ЕСТЬ ДВА ОДИНАКОВЫх');
    }
    sravnenie = elem;
  }
  return console.log('НЕМА ДВА ОДИНАКОВЫх');
}

podryad(arr);
