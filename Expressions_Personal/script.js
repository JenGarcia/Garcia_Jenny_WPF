//Jenny Garcia
//June 13, 2013
//Expressions Personal

//Calculate how much income is brought home every month
var weeklyPay = 400; //Weekly pay check amount
var averageMonth = 4; //Average number of weeks within a month
var monthlyIncome = weeklyPay * averageMonth //Calculates this information by multiplying weeklypay and averagemonth to figure out how much income is brought home every month
var result = "The average income a month is " + monthlyIncome + " dollars" //States monthly income result
var incomeResult = 1600 //Total for monthly income
var monthlyExpenses = [950, 250, 130, 125, 80] //Listing monthly expenses using an array expression
var totalExpenses = monthlyExpenses[0] + monthlyExpenses[1] + monthlyExpenses[2] + monthlyExpenses[3] + monthlyExpenses[4] //Adding monthly expenses listed in the array
var extraCash = incomeResult - totalExpenses //Calculating remainding monthly amount after paying off living expenses. This is done by subtracting the 1600 in resulat and the total of monthly living expenses which is 1535
console.log("My extra spending money at the end of every month is " + extraCash + " dollars.") //States total amount of extra spending money.
