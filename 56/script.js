let arr = [1, 3, 5, 6];

if (arr.length == 3) {
  console.log('В массиве три элемента');
} else {
  console.log('В массиве не три элемента');
}

let str = 'kds;lfkdsl;f';

if (str[0] == 'a') {
  console.log('Первый символ строки - а');
} else {
  console.log('Первый символ строки не a');
}

let str2 = 'jslkfjslkdjflksx';

if (str2[str2.length - 1] == 'x') {
  console.log('Последний символ строки = х');
} else {
  console.log('Последний символ строки не равен х');
}

let str3 = 'fsdjklfjsdlkfjlsd';

if (str3[0] == 'b' || str3[0] == 'a') {
  console.log('Первым символом строки является a или b');
} else {
  console.log('Первым символом строки не является a или b');
}
