//Сделайте функцию, выводящую в консоль ваше имя.

function myName() {
  console.log('Anton');
}

myName();

// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

function sum100() {
  let a = 1;
  let counter = 0;
  for (a; a <= 100; a++) {
    counter += a;
  }
  console.log(counter);
}

sum100();
