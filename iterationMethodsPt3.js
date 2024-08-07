const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

let income = transactions.filter((type) => {
  if (type.includes("income")) {
    return true;
  } else {
    return false;
  }
});

console.log(income);

let expense = transactions.filter((type) => {
  if (type.includes("expense")) {
    return true;
  } else {
    return false;
  }
});

console.log(expense);

//Calculate the total income and return it.

let incomeSum = 0;

transactions.filter((amount) => {
  if (amount.includes("income")) {
    return (incomeSum = incomeSum + amount[1]);
  } else {
    return false;
  }
});

console.log(incomeSum);

let expenseSum = 0;

transactions.filter((amount) => {
  if (amount.includes("expense")) {
    return (expenseSum = expenseSum + amount[1]);
  } else {
    return false;
  }
});

console.log(expenseSum);

let netTotal = incomeSum - expenseSum;

console.log(netTotal);

let above500 = transactions.filter((transaction) => {
  if (transaction[1] > 500) {
    return true;
  } else {
    return false;
  }
});

console.log(above500);
