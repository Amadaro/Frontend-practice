let month = 7;

if ((month >= 1 && month <= 2) || month == 12) {
  console.log('Зима');
}
if (month >= 3 && month <= 5) {
  console.log('Весна');
}
if (month >= 6 && month <= 8) {
  console.log('Лето');
}
if (month >= 9 && month <= 11) {
  console.log('Осень');
}

let str = 'bcde';

if (str[0] == 'a') {
  console.log('Да');
} else {
  console.log('Нет');
}

let num = 412345;
if (Number(String(num)[0]) >= 1 && Number(String(num)[0]) <= 3) {
  console.log('Da');
} else {
  console.log('Net');
}

let num2 = 357;
let tostr = String(num2);

let sum = +tostr[0] + +tostr[1] + +tostr[2];

console.log(sum);
