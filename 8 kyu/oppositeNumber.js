"use strict";

/*
* Very simple, given an integer or a floating-point number, find its opposite.

Examples:

    1: -1
    14: -14
    -34: 34
*/

function oppositeNumber (number) {
    return number * -1
}

// Test cases
console.log(oppositeNumber(15))
console.log(oppositeNumber(-1000))
console.log(oppositeNumber(0))
console.log(oppositeNumber(-0))
