/* // The switch statement is a good replacement for the if‑else when you have somewhere between 3 and 10 branche statments ( a statment purely or an instruction), or you know there's a limited number of values that you need to switch through. It's a good replacement because it makes the code less verbose

if (condition) {
  // code
} else if (condition2) {
  // code
} else if (condition3) {
  // code
} else {
  // code
}

// ↓

switch (condition) {
  case condition1:
    // code
    break;
  case condition2:
    // code
    break;
  case condition3:
    // code
    break;
  default:
  // code
} */

class Portfolio {
  constructor(stocksPct, bondsPct) {
    this.stocksPct = stocksPct;
    this.bondsPct = bondsPct;
  }
}

function generatePortfolio(riskTolerance) {
  switch (riskTolerance) {
    case "low":
      return new Portfolio(20, 80);
    case "medium":
      return new Portfolio(50, 50);
    case "high":
      return new Portfolio(90, 10);
    default:
      // throw exception
      // or
      return new Portfolio(50, 50);
  }
}

console.log(generatePortfolio("low").stocksPct); // 20
console.log(generatePortfolio("average").stocksPct); // 50

function generatePortfolio_v2(riskTolerance) {
  let portfolio;
  switch (riskTolerance) {
    case "low":
      portfolio = new Portfolio(20, 80);
      break;
    case "medium":
      portfolio = new Portfolio(50, 50);
      break;
    case "high":
      portfolio = new Portfolio(90, 10);
      break;
    default:
      // throw exception
      // or
      portfolio = new Portfolio(50, 50);
      break;
  }
  return portfolio;
}

console.log("V2"); // V2
console.log(generatePortfolio_v2("low").stocksPct); // 20

//> you can collapse or group multiple case statements if they lead to the same result. So instead of writing a case clause for every month, like so, you could collapse them and make them all return the same value, like so

switch (month) {
  case "Jan":
  case "Feb":
    return "Winter";
  case "Mar":
  case "Apr":
    return "Spring";
  //...
}
