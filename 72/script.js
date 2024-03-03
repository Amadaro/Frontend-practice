let num;

for (i = 1; i <= 1000; i++) {
  num = i;
  console.log(String(num)[0]);
}

let num2;

for (i = 10; i <= 1000; i++) {
  num2 = i;
  console.log(+String(num2)[0] + +String(num2)[1]);
}

let num3;

for (i = 10; i <= 1000; i++) {
  num3 = i;
  if (String(num3)[0] == 1) {
    console.log(num3);
  }
}

let num4;

for (i = 10; i <= 1000; i++) {
  num4 = i;
  if (+String(num4)[0] + +String(num4)[1] == 5) {
    console.log(num4);
  }
}
