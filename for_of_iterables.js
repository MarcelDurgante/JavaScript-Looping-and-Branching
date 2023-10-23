console.log("Strings:");
const string = "abc";
for (const letter of string) {
  console.log(letter);
}
/* output:

Strings:
a
b
c
 */

//! Set

console.log("Set: ");
const set = new Set(["a", "b", "c"]);
for (const element of set) {
  console.log(element);
}

/* output:

Set:
a
b
c
 */

//! Maps

console.log("Map:");
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

// log entries
for (const entry of map) {
  console.log(entry);
}
/* output:

Map:

[ 1, 'one' ]
[ 2, 'two' ]
[ 3, 'three' ] 
*/

// log key and value pairs
console.log("Map key/value pairs:");
for (const entry of map) {
  console.log(`At key ${entry[0]}: , value: ${entry[1]}`);
  // or
  // console.log(`At key ${entry[0]}: , value: ${entry.at(1)}`);
}
/* output:
Map key/value pairs:

At key 1: , value: one
At key 2: , value: two
At key 3: , value: three 
*/

// log only the keys: invoke the .keys() map method
console.log("Keys: ");
for (const key of map.keys()) {
  console.log(key);
}
/* output:

Keys: 

1
2
3 
*/

// log only the values: invoke the .values() map method
console.log("Values: ");
for (const value of map.values()) {
  console.log(value);
}
/* output:

Values: 
one
two
three 
*/

// Let's calculate the market capitalization of each company. We need to take the number of shares and multiply it by the price.
const marketCaps = new Map();
for (const stock of stockData_2) {
  const name = stock.at(0); // This gets us a string, but since we will be doing a mathematical operation, we want to wrap it into the Number constructor.
  const marketCap = Number(stock.at(3)) * Number(stock.at(4)); // set these variables as key/value pairs.
  marketCaps.set(name, marketCap);
}
console.log(marketCaps);
/* output:

Map(15) {'Company' => NaN, 'Microsoft' => 1641.2, 'Apple' => 2281.94, 'Amazon' => 1151.47, 'Alphabet Inc.' => 1300, …}
[[Entries]]
0: {"Company" => NaN}
1: {"Microsoft" => 1641.2}
2: {"Apple" => 2281.94}
3: {"Amazon" => 1151.47}
4: {"Alphabet Inc." => 1300}
5: {"Walmart" => 355.01}
6: {"Exxon Mobil" => 421.17}
7: {"JP Morgan" => 336.95000000000005}
8: {"Intel" => 106.86000000000001}
9: {"International Business Machines" => 108.9}
10: {"Tesla" => 672.9499999999999}
11: {"Pfizer" => 241.23000000000002}
12: {"DocuSign" => 9.200000000000001}
13: {"EPAM Systems" => 18.981}
14: {"GitLab" => 6.659999999999999}
size: 15
*/

// filtering only large Cap companies

const megaCaps = [];
const megaCapLimit = 200;
for (const company of marketCaps) {
  if (company[1] >= megaCapLimit) {
    megaCaps.push(company[0]);
  }
}
console.log(`Large Cap companies: ${megaCaps}`);

/* output:

Large Cap companies: Microsoft,Apple,Amazon,Alphabet Inc.,Walmart,Exxon Mobil,JP Morgan,Tesla,Pfizer

*/
