let value = "";

if (value) {
  // 'if(value) {}' is a short version of this code: "if (Boolean(value) === true) {}" -> if the value coerced to a Boolean is true, then do this"
  console.log("Truthy");
} else {
  console.log("Falsy"); // output: Falsy
}

// PITFALLS:

// PITFALL 1: Checking for truthiness is a common practice, but it has its pitfalls. Consider two stock objects: one with a dividend of 0 and the other marked as undefined, potentially null. Both of these values are considered falsy, which can lead to confusion.

// For example, if you were tasked with collecting stocks that don't pay dividends, using a condition based on falsy values would add both stocks to the list. This code is misleading or likely buggy. It would be more accurate to distinguish between the two stocks. While Google doesn't pay a dividend, for Microsoft, we are unsure. It's advisable to refresh the data or create a separate list for stocks with missing data.

let stock_1 = {
  name: "Google",
  dividend: 0,
};

let stock_2 = {
  name: "Microsoft",
  dividend: undefined,
};

let stocks = [stock_1, stock_2];
let zeroDividendStocks = [];

for (let stock of stocks) {
  if (!stock.dividend) {
    console.log(`${stock.name} does not pay a dividend`); // output: Google does not pay a dividend, Microsoft does not pay a dividend
    zeroDividendStocks.push(stock);
  }
}

// PITFALL 2:Suppose you need to calculate the so‑called dividend yield.

// If a company pays $1 a year for every share you own and the current share price is $100, then your dividend yield is 1%. If another company pays the same, but its share price is $50, then the yield is 2%. But you need both values, and you're in trouble if they are absent, so you could add some defensive code, and throw an error with a useful message. With this, we can invoke it with valid values, and let's also invoke it with a missing value, we simply don't provide the second parameter.

// Run the code, and the results are what we expected. Again, this works fine until you get data from somewhere, process it, and it turns out that the dividend per share is 0. In fact, many growth companies don't pay a dividend, and 0 is a completely normal value here. In these cases, we're going to produce false positives or false alarms.

function calculateDividendYield(divPerShare, currentPrice) {
  if (!divPerShare || !currentPrice) {
    throw new Error("Missing parameter divPerShare or currentPrice");
  }
  return (divPerShare / currentPrice) * 100;
} 

console.log(calculateDividendYield(1, 100)); // 1%
console.log(calculateDividendYield(1)); //
console.log(calculateDividendYield(0, 100)); // Error, a false positive, because 0 is falsy.

// In such a case, we would need to understand the business logic a bit better and implement smarter logic. In our example, the dividend per share being 0 is normal, but then we know the yield is 0. The price can't be 0 or negative, that could indicate corrupted data, and we could have a dedicated error for that too. And if the parameters pass those checks, then we can catch null and undefined in the next clause and throw another error. And finally, if we reach the bottom, then the values must be safe to use for calculations.

function calculateDividendYield_v2(divPerShare, currentPrice) {
  if (divPerShare === 0) {
    return 0;
  }
  if (currentPrice <= 0) {
    throw new Error("Expecting price to be greater than zero");
  }
  return (divPerShare / currentPrice) * 100;
}

console.log(calculateDividendYield_v2(1, 100)); // 1
console.log(calculateDividendYield_v2(0, 100)); // 0
console.log(calculateDividendYield_v2(1, 0)); // Error: Expecting price to be greater than zero