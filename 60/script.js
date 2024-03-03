let num = 223321;
let tostr = String(num);

let sum1 = +tostr[0] + +tostr[1] + +tostr[2];
let sum2 = +tostr[3] + +tostr[4] + +tostr[5];
console.log(`Сумма первых трёх цифр: ${sum1}
Сумма вторых трёх цифр: ${sum2}`);

if (sum1 == sum2) {
  console.log('da');
} else {
  console.log('net');
}
