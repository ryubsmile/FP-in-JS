/**
 * No.4, 2021-09-19
 *
 * FP is oriented to use single-input function.
 * To take multiple inputs, FP takes use of the concept of currying.
 *
 * Note that FP allows the use of higher-scope variables if within a single function,
 * e.g. a => b => a + b // uses 'a' which is at the higher scope.
 */

/**
 * non-curried pure function
 * @param {number} a number1 to add
 * @param {number} b number2 to add
 * @return {number} adds number1 and number2
 */
const normalF = (a, b) => a + b; // same as { return a + b; }

console.log("normal function with one param", normalF(1)); // NaN if the parameter is not fulfilled
console.log("normal function with full param", normalF(1, 2)); // 3, works fine

/**
 * curried pure function that does the samething.
 * curryF & curryF2 behave the same
 * @param {number} a number1 to add
 * @return {function}
 *    @param {number} b number2 to add
 *    @return {number} a + b
 */
const curryF = a => b => a + b;
const curryF2 = function (a) {
  return function (b) {
    return a + b;
  };
};
const addToThree = curryF(3);

console.log("curried function with one param", addToThree);
console.log("curried function with full param", addToThree(3));

/**
 * now, let's make a function curry1(),
 * @param {function} noncurried function that is to be curried
 * @return {function} curried function of the noncurried
 */
function curry1(uncurried) {
  // length of arguments required of the uncurried function
  const arity = uncurried.length;
  // make a curried function
  return function _curry(...args) {
    // ...agrs = arguments when after the function is curried
    if (args.length < arity) {
      //if the arguments required is not fulfilled, just bind the arguments and return
      return _curry.bind(null, ...args);
    }
    //if the arguments required is fulfilled, call the function
    return uncurried.apply(null, args);
  };
}

const avgThree = (a, b, c) => (a + b + c) / 3;

const curriedNormalF = curry1(avgThree);
console.log(curriedNormalF(1, 4, 3)); //works!
console.log(curriedNormalF(1)(4)(3)); //works!

/**
 * more shortened version of the curry1 -> curry2
 */
const curry2 = uncurried =>
  function _curry(...args) {
    return args.length < uncurried.length
      ? _curry.bind(null, ...args)
      : uncurried.call(null, ...args);
  };
console.log(curry2(avgThree)(1, 4, 3));
console.log(curry2(avgThree)(1)(4)(3));
