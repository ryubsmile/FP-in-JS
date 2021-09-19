/**
 * No.1, 2021-09-18
 * In order to iterate through iterable objects, FP uses functions such as map.
 */

const arr = [1, 2, 3, 4, 5];

console.log("original array:", arr); // [ 1, 2, 3, 4, 5 ]

// OOP, to increase every element by 1
for (let i = 0; i < arr.length; i++) {
  arr[i]++;
}
console.log("OOP:", arr);

// FP, to increase every element by 1
const newArr = arr.map(element => element + 1);
console.log("FP:", newArr);

// note that the OOP modified the original array while the FP didn't.
