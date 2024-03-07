// let employees = [
//   {
//     name: 'name1',
//     salary: 300,
//   },
//   {
//     name: 'name2',
//     salary: 400,
//   },
//   {
//     name: 'name3',
//     salary: 500,
//   },
// ];
// // Выведите на экран данные каждого работника в формате имя - зарплата.

// for (let users of employees) {
//   console.log(`Имя: ${users.name} Зарплата: ${users.salary}`);
// }

// Дан следующий массив работников:

// let employees = [
//   {
//     name: 'name1',
//     salary: 300,
//   },
//   {
//     name: 'name2',
//     salary: 400,
//   },
//   {
//     name: 'name3',
//     salary: 500,
//   },
// ];
// // Выведите на экран сумму зарплат всех работников.

// let sum = 0;
// for (let users of employees) {
//   sum += users.salary;
// }

// console.log(sum);

let employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
  {
    name: 'name4',
    salary: 600,
    age: 31,
  },
  {
    name: 'name5',
    salary: 700,
    age: 32,
  },
];
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

let sum = 0;

for (users of employees) {
  if (users.age >= 30) {
    sum += users.salary;
  }
}

console.log(sum);
