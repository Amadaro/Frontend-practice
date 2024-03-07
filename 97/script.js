let affairs = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

// Добавьте еще одно дело в дату '2019-12-29'.

affairs['2019-12-29'].push('data14');

console.log(affairs);

// Добавьте еще два дела в дату '2019-12-31'.

affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('delo1', 'delo2');

console.log(affairs);
