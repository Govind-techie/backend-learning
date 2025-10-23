export let sum = (a, b) => a + b;
export let mul = (a, b) => a * b;
export let sub = (a, b) => a - b;
export let div = (a, b) => a / b;

export const g = 9.8;
export const PI = 3.14;

// The export keyword lets you share variables and functions from this file, so they can be imported and used in other files.

let obj = {
    sum: sum,
    mul: mul,
    sub: sub,
    div: div,
    g: g,
    PI: PI
}

// Export the object so other files can import and use these functions and constants
module.exports = obj;