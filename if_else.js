let stock = {
    "name": "Google",
    "price": 100,
}

// Always use curly brackets, even if you only have one line of code 
////if(stock.price <= 100) console.log("Buy");
if(stock.price <= 100) {
    console.log("Buy");
};

if(stock.price <= 100) {
    console.log("Buy");
    console.log("Then buy some more...");
}
else {
    console.log("Don't buy");
}
/* output: 

Buy
Buy
Then buy some more...


*/