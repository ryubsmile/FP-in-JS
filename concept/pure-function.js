/**
 * No.2, 2021-09-18
 * FP is oriented to utilize 'pure' functions, which
 *  1. does not affect the outer scope (no side-effects)
 *  2. returns the same output for the same input
 */

/**
 * pure function 1
 *
 * takes a number, returns one bigger than the number.
 * @param {number} a - original number (constant)
 * @return {number} - return a + 1, with a unmodified
 */
const pure1 = a => a + 1;
console.log("pure 1:", pure1(3));

/**
 * impure function 1
 *
 * increments a global variable b by 1.
 * note that by nesting b++ inside a pair of {},
 * the function produces no return value.
 */

let b = 4;
const impure1 = () => {
  b++;
};
impure1();
console.log("impure 1:", b);
