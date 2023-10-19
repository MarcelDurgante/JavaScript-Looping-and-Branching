console.log('Classic loop');
for(let step = 0; step <3; step++) {
    console.log(`Walking ${step} step`);
}

console.log('Backwards');
for(let step = 3; step > 0; step--) {
    console.log(`Walking ${step} step`);
}

// iterate up to the middle, work on the condiction section. Increment/decrement on every second or third etc element, do it on the iterator section
console.log('Getting every nth element up to the middle of the array');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for(let i = 0; i < (array.length / 2); i+=2) {
    console.log(`Every second element: ${i}`);
}


/* Classic loop

Walking 0 step
Walking 1 step
Walking 2 step


Backwards
Walking 3 step
Walking 2 step
Walking 1 step


Getting every nth element up to the middle of the array

Every second element: 0
Every second element: 2
Every second element: 4 */