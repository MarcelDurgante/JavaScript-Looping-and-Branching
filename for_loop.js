//! For Loop

for(let step = 0; step <3; step++) {
    console.log(`Walking ${step} step`);
}
/* Output

Walking 0 step
Walking 1 step
Walking 2 step
*/

console.log('Backwards');
for(let step = 3; step > 0; step--) {
    console.log(`Walking ${step} step`);
}
/* Output

Backwards
Walking 3 step
Walking 2 step
Walking 1 step
*/

// iterate up to the middle, work on the condiction section. Increment/decrement on every second or third etc element, do it on the iterator section
console.log('Getting every nth element up to the middle of the array');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for(let i = 0; i < (array.length / 2); i+=2) {
    console.log(`Every second element: ${i}`);
}
/* Output

Getting every nth element up to the middle of the array

Every second element: 0
Every second element: 2
Every second element: 4 
*/

// Classic example
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/* Output
0
1
2
3
4
5
6
7
8
9
*/

//>Initialization block syntax

//The initialization block accepts both expressions and variable declarations. However, expressions cannot use the in operator unparenthesized, because that is ambiguous with a for...in loop.
////for (let i = "start" in window ? window.start : 0; i < 9; i++) {
    ////console.log(i);
  ////}
// Output: SyntaxError: 'for-in' loop variable declaration may not have an initializer.

// Parenthesize the whole initializer
let window = { start: 0, end: 6 };

for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
console.log(i);
};
/* output:
 0
 1
 2
 3
 4
 5
*/

// Parenthesize the `in` expression

for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
/* output:
 0
 1
 2
 3
 4
 5
*/
