const dataTwo: number[] = [1, 2, 3, 4];
const newData: number[] = [];
// traditional
// for (let i = 0; i < dataTwo.length; i++) {
//   newData[i] = dataTwo[i] * 2;
// }

// functional
// console.log(dataTwo);

// modern arrow function
const newArray = dataTwo.map(value => value * 2);

console.log(newArray);
// traditional function
// dataTwo.map(function(value) {
//   return value * 2;
// });
console.log(dataTwo);
