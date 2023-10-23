let prices = [20, 50, 120, 200];

// for loop and it iterates over array elements
console.log("For Loop: ");
console.log("");
for (let i = 0; i < prices.length; i++) {
  console.log("prices.at(i): ", prices.at(i));
}

/* output: 

For Loop: 

prices.at(i):  20
prices.at(i):  50
prices.at(i):  120
prices.at(i):  200

*/

// you can do the same thing with a while loop. //! The variable MUST be declared before the loop starts

console.log("");
console.log("While Loop j: ");
console.log("");
let j = 0;
while (j < prices.length) {
  j++;
  console.log("prices.at(j): ", prices.at(j));
}

/* output: 

While Loop: 

prices.at(j):  50
prices.at(j):  120
prices.at(j):  200
prices.at(j):  undefined

*/
// In the output above we didn't get the first element, 20, and we have undefined at the end. Why? Because we update the index too early. We should do it after we perform the necessary operation. Move it to the bottom, run again, and now this works as expected

console.log("");
console.log("While Loop x: ");
console.log("");
let x = 0;
while (x < prices.length) {
    console.log("prices.at(j): ", prices.at(x));
    x++;
}
/* output: 

While Loop x: 

prices.at(j):  20
prices.at(j):  50
prices.at(j):  120
prices.at(j):  200

*/

//> 'Do...while' loop

console.log('------------------');
console.log('While that never executes: ');
console.log('');
let z = 5;
while(z < prices.length) {
    console.log('Inside code never runs');
    z++;
}
/* output: 

------------------
While that never executes: 

*/


console.log('------------------');
console.log('Do while: ');
console.log('');
do {
    console.log('Inside code will run at least once');
} while(z < prices.length);
/* output: 

------------------
Do while: 

Inside code will run at least once

*/

