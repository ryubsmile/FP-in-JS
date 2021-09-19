/**
 * No.5, 2021-09-19
 * pointfree is a simple concept of minimizing the use of parameters.
 */

// uses parameter msg, which is used to invoke single-input function console.log (though it is impure)
const execute = msg => {
  console.log(msg);
};
execute("hello!");

// omits the parameter that console.log takes, since that is the parameter pointFree tkaes anyways
const pointFree = console.log;
pointFree("hi!"); // still works
