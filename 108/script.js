// Дан следующий массив:

// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:

// [1, 4, 5]

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);

// Дан следующий массив:

// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:

// [1, 2, 3, 'a', 'b', 'c', 4, 5]

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(3, 0, 'a', 'b', 'c');

console.log(arr2);

// Дан следующий массив:

// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:

// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let arr3 = [1, 2, 3, 4, 5];

arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.splice(8, 0, 'e');

console.log(arr3);