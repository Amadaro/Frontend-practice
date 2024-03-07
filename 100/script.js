//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// console.log(Math.sqrt(379).toFixed(0));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let sqrt = Math.sqrt(587);
let floor = Math.floor(sqrt);
let ceil = Math.ceil(sqrt);
console.log(sqrt);
console.log(floor);
console.log(ceil);

let obj = {
  floor: floor,
  ceil: ceil,
};

console.log(obj);
