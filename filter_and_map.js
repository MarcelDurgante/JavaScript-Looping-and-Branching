let prices = [20, 50, 120, 200];

let filtered = prices.filter(price => price > 100);

console.log(filtered);
/* output:

[ 120, 200 ]
*/

/* What if somebody wanted just the company name and the beta value itself? For that we have the map method, to convert or transform a value. 

If we take the same array of numbers, we can invoke the map method and say:

"Given every price that we iterate over, do whatever, divide and then round and convert to a string and concatenate with a word" */

let newNums = prices.map(price => (price / 3).toFixed(1).toString().concat(" USD"));
console.log(newNums);
/* output:

[ '6.7 USD', '16.7 USD', '40.0 USD', '66.7 USD' ]
*/
