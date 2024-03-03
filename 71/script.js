let str4 = '';

for (let i = -1; i >= -9; i--) {
  if (str4[str4.length - 1] == '8') {
    str4 += i + '-';
  } else {
    str4 += i;
  }
}

console.log(str4);
