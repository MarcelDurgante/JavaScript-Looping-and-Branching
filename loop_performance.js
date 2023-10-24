//> How to make looops faster?

//> 1. Optmize work done per iteration
//> 2. Reduce the number of iterations
//> a. Reduce the amount of work done in the loop
//> b. Reduce the amount of loops
//> c. Use caching
//> d. Avoid unnecessary objects, arrays, functions, variables, etc.
//> e. Use a faster computer, compiler, imterpreter, etc.
//> f. Use a faster data structure, such as a hash table, instead of an array
//> g. Use a faster algorithm, such as a binary search, instead of a linear search
//> h. Use a faster language, such as C, instead of JavaScript
//> i. Use a faster library, such as lodash, instead of native JavaScript
//> j. Use a faster framework, such as React, instead of native JavaScript
//> k. Use a faster database, such as MongoDB, instead of MySQL
//> l. Use a faster server, such as Node.js, instead of Apache
//> m. Use a faster network, such as 5G, instead of 4G

let arr = [1, 2, 3];

console.log("Normal loop: ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(" ");
// You can cache right inside the header like this:
console.log("Cached loop: ");
for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
  console.log(arr[i]);
}
console.log(" ");

// or

console.log(" ");
// Store the length of the array in a variable like this:
console.log("Stored in variable loop: ");
let length = arr.length;
for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}
/* output: 

Normal loop: 
1
2
3
 
Cached loop: 
1
2
3
 
 
Stored in variable loop: 
1
2
3

*/

// 'for.Each' 
arr.forEach(/* do something */); // somewhat slower 

// break out of the loop early
for(let e of arr) {
    if(e === '2') {
        // do something
        break;
    }
}

// Better, use .find() and some methods when they are a logical fit

arr.find(e => e === '1'); // faster than for loop and forEach loop because it stops after finding the first match/first element
arr.some(e => e === '1'); // true as soon as it finds the first match/first element that matches the condition