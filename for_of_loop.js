// Ideal for arrays and strings

const arr = [10, 20, 30];

// Array values
for (let value of arr) {
    console.log('values: ', value);
};

// Index value pairs
for (let [value, index] of arr) {
    console.log('index: ', index, 'value: ', value);
};