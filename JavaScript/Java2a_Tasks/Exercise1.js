// Task 1:Simple Grading System  

// Requirements:  
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`.
function exerciseOne() {
    let grade = Number(prompt("enter score"));
function SimpleGradingSystem() {
 
if (grade >= 90) {
console.log("Grade: A ");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log ("Grade: C");
} else if (grade >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade: F - Please see instructor");
}
}
SimpleGradingSystem(grade)

}

// *Task: 2** Discount Calculator  

// **Requirements:**  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// **Challenge:** Print a full receipt showing original price, discount percent, and final price.

function calculateDiscount() {
    let discount = 0;

if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.20; // 20% discount
    }
    
    // Additional discount for first-time customers
    if (isFirstPurchase) {
        discount += 0.05; // Extra 5%
    }
    
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}
let result = calculateDiscount(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);


// Task 3:Weather Advisor  

// Requirements:  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// **Challenge:** Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.


function exercise3() {
  const temperature = prompt("What is the current temperature");
  const isRaining = prompt("Is it raining?");
  function weatherAdvice(temperature, isRaining) {
    if (Number(temperature) < 32 && String(isRaining).toLowerCase() === "yes") {
      return "Freezing rain! Stay inside!";
    } else if (Number(temperature) < 32) {
      return "Very cold, wear a heavy coat.";
    } else if (Number(temperature) >= 32 && Number(temperature) <= 59) {
      return "Chilly, bring a jacket.";
    } else if (Number(temperature) >= 60 && Number(temperature) <= 79) {
      return "Nice Weather!";
    } else if (Number(temperature) >= 80) {
      return "It's hot, stay hydrated!";
    }
  }
}


// Task: 4 ATM Simulation  

// **Requirements:**  
// 1. Create a function `atm(balance, action, amount)`  
// 2. If action is `"withdraw"`, check if balance is enough:  
//    - If yes, subtract amount and return new balance  
//    - If no, return `"Insufficient funds"`  
// 3. If action is `"deposit"`, add amount to balance and return new balance  
// 4. Use clear messages in template literals  

// **Challenge:** Add a condition that blocks withdrawals over 500 at once.

function exercise4() {
  const balance = 1000;
  const action = prompt(
    "What do you want to do? (Type either withdraw or deposit)"
  );
  const amount =
    action.toLowerCase() === "withdraw"
      ? prompt("Enter the amount you want to withdraw")
      : prompt("Enter the amount you want to deposit");
  function ATMSimulation(balance, action, amount) {
    if (action.toLowerCase() === "withdraw") {
      if (Number(amount) > 500) {
        return "You have exceeded the transaction limit, Transaction limit is 500";
      } else {
        if (Number(amount) < balance) {
          return `Withdrawal Successful! New Balance is ${
            balance - Number(amount)
          }`;
        } else if (Number(amount) > balance) {
          return `Insufficient funds yout Balance is ${balance}`;
        }
      }
    } else if (action === "deposit") {
      balance += Number(amount);

      return `Deposit Successful, your new balance is ${balance}`;
    } else {
      return "You entered an invalid input";
    }
  }

  alert(ATMSimulation(balance, action, amount));
}
