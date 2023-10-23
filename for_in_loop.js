//> "For...in" loop is for enumerate object properties => for(let e in arr) {...}
//! "For...in" order is not guaranteed and inherited properties are also numerated.

//> "For...of" loop is for iterables like arrays, sets, maps ... => for(let e of obj) {...} / for(let i of arr) { ...(arr[i])}

// After running the code up to line 47, let's examplify line 2

// obs. bad practice. After adding line 9, let's run the code again and compare the results.

// Array.prototype.thing = 'a';

/* output from all the below code: 

The 'for...of' loop ignores the new property. It truly only iterates over the contents of the array

Apple
Google
Microsoft
Verizon

0
1
2
3

But the 'for...in' loop, includes the newly created property.
> that's a big reason not to use it to loop over arrays and other iterables (SEE LINE 79)


thing
Apple
Google
Microsoft
Verizon
a

*/

let stocks = ['Apple', 'Google', 'Microsoft', 'Verizon'];

// 'for...of' produces values
for(let stock of stocks) {
    console.log(stock);    
};
/* output: 

Apple
Google
Microsoft
Verizon

*/

// 'for...in' produces indexes
for(let stock in stocks) {
    console.log(stock);    
};
/* output: 

0
1
2
3

*/

// correct to index and access the values using the indexes
for(let index in stocks) {
    console.log(stocks[index]);
}
/* output: 

Apple
Google
Microsoft
Verizon

*/

//> But if you have an object such as this one and you want to loop over the properties and values, then you should use for‑in.

let stock = {
    "name": "Microsoft",
    "industry": "Tech",
    "price": 220,
    "dividend": 2,
    getDivYield() {
        return this.dividend / this.price * 100;
    }
}

// log only the properties
for(let property in stock) {
    console.log(property);  
}
/* output: 

name
industry
price
dividend
getDivYield

*/

// log only the values
for(let property in stock) {
    console.log(stock[property]);
}
/* output: 

Microsoft
Tech
220
2
[Function: getDivYield]

*/

// get properties and values
for(let properties in stock) {
    console.log(`${properties}: ${stock[properties]}`);
}
/* output: 

name: Microsoft
industry: Tech
price: 220
dividend: 2
getDivYield: getDivYield() {
        return this.dividend / this.price * 100;
    }

*/

console.log('For...in with conditions: ');
console.log('');
for (let property in stock) {
    // skip inherited properties
    if(stock.hasOwnProperty(property)) {
        // skip functions or other types
        if(typeof stock[property] === 'function') {
            continue;
        }
        console.log(property + " -> " + stock[property]);
    }
}
/* output: 

For...in with conditions: 

name -> Microsoft
industry -> Tech
price -> 220
dividend -> 2

*/

// you can still replace the for‑in with the for‑of loop. All you have to do is use the Object.keys method to get the properties or Object.entries, and that gives you both keys and values. 

console.log('Object.keys: ');
console.log('');
for (let property of Object.keys(stock)) {
    console.log(property);
}
/* output: 

Object.keys: 

name
industry
price
dividend
getDivYield

*/

console.log('----------------------------------');

console.log('Object.entries (both "keys" and "values"): ');
console.log('');
for (let [key, value] of Object.entries(stock)) {
    console.log(key, value);
}
/* output: 

name Microsoft
industry Tech
price 220
dividend 2
getDivYield [Function: getDivYield]

*/

//! CHEATSHEET

for (let e of iterable) {};
for (let prop of Object.keys(obj)) {};
for (let [key, value] of Object.entries(obj)) {};
for (let prop in obj) {};

//! NO NO NO
for (let prop in array) {};


