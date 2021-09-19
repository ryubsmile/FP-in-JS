/**
 * No.3, 2021-09-18
 * reduce accumulates values over an iterable object.
 */

const log = console.log;

// a generator function to make an array starting from 1 to the end.
function* arrGener(end) {
  let i = 1;
  while (i <= end) {
    yield i++;
  }
}

// [ 1, 2, 3, ... 30]
const arr = [...arrGener(30)];

const reduce = iter => {
  if (iter[Symbol.iterator]) {
    return iter.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }
};

log(reduce(arr));
