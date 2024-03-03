// Проверка на простое число
let num = 5;
let flag = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    flag = false;
    break;
  }
}

if (flag == false) {
  console.log('Число не является простым');
} else {
  console.log('Число является простым');
}
