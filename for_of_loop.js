// Ideal for arrays and strings

const arr = [10, 20, 30];

// Get array values only
for (let value of arr) {
    console.log('values: ', value);
};
/* output:
values:  10
values:  20
values:  30
*/

// Index value pairs using array.entries()
for (let [value, index] of arr.entries()) {
    console.log('value: ', index, 'index: ', value);
};
/* output:

value:  10 index:  0
value:  20 index:  1
value:  30 index:  2
*/

// Using const or let in a 'for...of' loop is ok. But...you cant reassign a const value.
for (const value of arr) {
    // value = 'x'; // TypeError: Assignment to constant variable.
    console.log('value: ', value);
}
/* output:

value:  10
value:  20
value:  30
*/

// For a 'for...' loop, if you use a constant you'll get a "TypeError: Assignment to constant variable." That is because the value is reassigned each time the loop runs."
////for (const value = 1; value <= 5; value++) {
    ////console.log('value: ', value);
////}
/* output:

TypeError: Assignment to constant variable.
*/