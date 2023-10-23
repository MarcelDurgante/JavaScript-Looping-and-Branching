//The for and the for of loops are constructs of the language itself, whereas the forEach is a method on the Array, Map, and Set objects, and you invoke the forEach on the iterable.

// Observation: 'forEach' can be used in Maps and Sets/

['Apple', 'Banana', 'Mango'].forEach(value => console.log(value)); 

/* output:
Apple
Banana
Mango
*/

['Apple', 'Banana', 'Mango'].forEach((value, index) => console.log(value, index));
/* output:
Apple 0
Banana 1
Mango 2
*/

['a', 'b', 'c'].forEach(repeat)
function repeat(str) {
    console.log(str.repeat(3));
}
/* output:
aaa
bbb
ccc
*/

//! Sparse Arrays

//> The forEach loop is nearly, but not entirely, identical to the other loops. It skips absent values

// arrays may have null, undefined or empty slots
let array = [,,,,];
console.log(array);
/* output:

[ <4 empty items> ]
*/

// you can modify the array.length prop and will have all new empty slots
array.legnth = 20;
console.log('empty 20 slots: ', array);
/* output:

empty 20 slots:  [ <4 empty items>, legnth: 20 ]
*/

// you can set a value to some far away index and the slots between the previous and new value will be empty
array[30] = 100;
console.log('array 30: ', array);
/* output:

array 30:  [ <30 empty items>, 100, legnth: 20 ]
*/

//  you can delete a specific element
delete array[5];
console.log('delete array[5]: ', array);
/* output:

delete array[5]:  [ <30 empty items>, 100, legnth: 20 ]
*/

// 'forEach' skip absent values

// 'for...of' loop does not skip absent values
let arrWithAbsentValues = [10, null, 20, undefined, 50];
for(const num of arrWithAbsentValues) {
    console.log(num);
}

/* output:
10
null
20
undefined
50
*/

arrWithAbsentValues.forEach(num => console.log(num));
/* output:
10
null
20
undefined
50
*/

// Let's make an array sparse and set a value at a far away index
arrWithAbsentValues[10] = 100;
console.log(arrWithAbsentValues);
/* output:

[ 10, null, 20, undefined, 50, <5 empty items>, 100 ]

*/
console.log('----------------');
console.log('Sparse array: ');
for(const num of arrWithAbsentValues) {
    console.log(num);
}

/* output:
----------------
Sparse array: 
10
null
20
undefined
50
undefined
undefined
undefined
undefined
undefined
100
----------------
*/
console.log('----------------');
arrWithAbsentValues.forEach(num => console.log(num));
console.log('----------------');
/* output:

----------------
10
null
20
undefined
50
100
----------------
*/

/* One disadvantage of the forEach loop is that you can't use break or continue keywords. As a quick reminder, continue finishes the current iteration and makes the loop move on to the next iteration. So the loop keeps going if the exit condition hasn't been met. Whereas break exits the loop entirely. So break allows you to exit iteration early if, for example, you achieved what you wanted and you don't need to work through the rest of the array. So you lose some control over the loop and can't terminate early. But first of all, you don't need to do this that frequently, and if you do, it can be partially or sometimes fully replaced by functional methods loke //> .filter() */

for(init; evaluate; update) {
    continue; // finishes the current iteration and makes the loop move on to the next iteration
    // or
    break; // exits the loop entirely
}