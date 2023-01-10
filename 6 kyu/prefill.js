/*
* Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

    v can be anything (primitive or otherwise)
    if v is ommited, fill the array with undefined
    if n is 0, return an empty array
    if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
    When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/

function prefill(n, v = undefined) {
    let arr = [];

    if (n == 0 && typeof(n) !== 'boolean') {
        return arr;
    }

    if (Number.isInteger(+n) && +n > 0 && typeof(n) !== 'boolean') {
      return new Array(n).fill(v);
    } else {
      throw new TypeError(`${n} is invalid`);
    }
}

// Test cases
console.log(prefill(3,1))
console.log(prefill(2,"abc"))
console.log(prefill("1", 1))
console.log(prefill(3, prefill(2,'2d')))
console.log(prefill("xyz", 1))
console.log(prefill(0, 1))
console.log(prefill(-9, 1))
console.log(prefill(Infinity, 1))
console.log(prefill(NaN, 1))
console.log(prefill(true, 5))
