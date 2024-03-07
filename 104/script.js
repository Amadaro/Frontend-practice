// //Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = 'http://sdlkfjsdl.com';

// console.log(str.startsWith('http://'));

// //Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

// let str2 = 'http://';

// console.log(str2.endsWith('http://'));

// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.

let num = '1-2-3-4-5';

while (num.includes('-')) {
  num = num.replace('-', '.');
}

console.log(num);
