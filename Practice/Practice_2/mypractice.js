console.log("Welcome to JavaScript!");
console.log("My name is Rachael");
console.log("Today, I am learning to code!")

// Regular message
console.log("This is a regular message");

// Warning message (appears in yellow)
console.warn("This is a warning message");

// Error message (appears in red)
console.error("This is an error message");

// Information message (appears with info icon)
console.info("This is an info message");

// Creating variables with let (values can change)
let studentName = "Alice";
let studentAge = 20;

// Creating variables with const (values cannot change)
const schoolName = "JavaScipt Academy";
const currentYear = 2024;

// Display the variables
console.log(studentName);
console.log(studentAge);
console.log(schoolName);
console.log(currentYear);

// Good variable names - descroptive and follow conventions
let firstName = "John";
let lastName = "Doe";
let phoneNumber = "555-1235";
let isActive = true;
let totalAmount = 99.99;

// Display all Variables
console.log("First Name", firstName);
console.log("Last Name", lastName);
console.log("Phone:", phoneNumber);
console.log("Active Status", isActive);
console.log("Total Amount:", totalAmount);

// Data Types

// 1.) Strings - text data enclosed in quotes
let message1 = "Hello World"; 
let message2 = "JavaScript is fun";
let message3 = `Learning to code`

// Strings can contain numbers, but they're treated as text
let zipCode = "12345";
let phoneNumbr = "555-1234";

// Display the strings
console.log(message1);
console.log(message2);
console.log(message3);
console.log("Zip Code", zipCode)
console.log("Phone", phoneNumbr)


// Check the type
console.log("Type of message1:", typeof message1);
console.log("Type of zipCode:", typeof zipCode);

// 2.) Number Data Type
// Numbers - Numeric Values(No quotes needed)
let age = 25;
let price = 19.99;
let temperature = -5;
let distance = 1000;
let pi = 3.14159;

// Very large or small numbers
let bigNumber = 1000000;
let scientificNotation = 2.5e6;

// Display the Numbers (Print)
console.log("Age:", age); 
console.log("Price:", price);
console.log("Temperature", temperature);
console.log("Distance", distance);
console.log("Pi:", pi);
console.log("Big Number", bigNumber);
console.log("Scientific:", scientificNotation);

// Check the types
console.log("Type of age:", typeof age);
console.log("Type of Price:", typeof price);

// *Key Point:** Numbers don't need quotes. JavaScript handles both whole numbers (integers) and decimal numbers (floats) as the same "number" type.

// 3.) BOOLEAN DATA TYPE
// Booleans - true or false values
let isStudent = true;
let hasLicense = false;
let isOnline = true;
let isComplete = false;

// Display the booleans
console.log("Is Student:", isStudent);
console.log("Has License:", hasLicense);
console.log("Is Online", isOnline);
console.log("Is Complete", isComplete);

// Check the types
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of hasLicense:", typeof hasLicense);

// Booleans are often the result of comparisons
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);
console.log("Comparison Result:", typeof isAdult);

// *Remember:** Boolean values are either `true` or `false` (no quotes). They're often used for yes/no, on/off, or pass/fail situations.

let frstName;
let lstName;

console.log("firstName:", frstName);
console.log("lastName:", lstName);
console.log("Type of firstName:", typeof frstName);

// Null - intentionally empty
let middleName = null;
let nickname = null;

console.log("middleName:", middleName);
console.log("nickname:", nickname);
console.log("Type of middleName:", typeof middleName);  // This shows "object" - a JavaScript quirk!

// Assigning values later
firstName = "John";
lastName = "Doe";

console.log("After assignment:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);

// *JavaScript Quirk:** `typeof null` returns "object" instead of "null". This is a known bug that can't be fixed without breaking existing websites!

// BASIC MATH OPERATIONS MARKDOWN
// MATH OPERATIONS EXAMPLES
let a = 10;
let b = 3;

console.log("a=", a, "and b =", b);
console.log("");

// Basic Arithmetic Operations
console.log("Addition: a + b =", a + b);
console.log("Subtraction: a - b =", a - b);
console.log("Multiplication: a * b =", a * b);
console.log("Division: a / b=", a / b);
console.log("Remainder: a % b =", a % b);
console.log("Exponentiation: a ** b =", a ** b);
console.log("");

// More examples
console.log("More examples:");
console.log("15 / 4 =", 15/4);
console.log("15 % 4 =", 15 % 4);
console.log("2 ** 8 =", 2 ** 8);

//  The % (remainder) operator** is very useful! It tells you what's left over after division. For example, 15 ÷ 4 = 3 remainder 3, so 15 % 4 = 3.
console.log("");
// STRING CONCATENATION VS TEMPLATE LITERALS
let firsName = "Jane";
let lasName = "Smith";
let aege = 28;
// Old way: String Concatenation with +
let greeting1 = "Hello, my name is " + firsName + " " + lasName + " and I am " + aege + "years old.";
console.log("Using concatenation (+):");
console.log(greeting1)

// MODERN WAY: TEMPLATE LITERALS WITH BACTICKS

let greeting2 = `hello, my name is ${firsName} ${lasName} and I am ${aege} years old.`;
console.log("");
console.log("Using template literals (backticks):");
console.log(greeting2);

// Template lietrals can also do math inside the ${}
console.log(`Next year I will be ${aege + 1} years old.`);
console.log(`My name has ${firsName.length} letters in the first name.`);
// Pro Tip: Always use template literals (backticks) instead of string concatenation. They're much easier to read and less prone to errors!

console.log("");
// STRING METHODS EXAMPLES
let message = "  JavaScript is Amazing!  "

console.log("Message:", message);
console.log("Original string", `"${message}`);
console.log("");

// String Property
console.log("Length:", message.length, "characters");

// String Methods
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Trimmed", `"${message.trim()}"`);
console.log("Trimmed", message.trim().length)

// Method chaining - using multiple methods together
console.log("Trimmed and uppercase:", message.toUpperCase().trim());

// Finding Text Within Strings 
console.log("Position of 'Script':", message.indexOf("Script"));
console.log("Includes 'Amazing':", message.includes("Amazing"));

// **Method Chaining:** You can use multiple methods on the same string by connecting them with dots: `message.trim().toUpperCase()`.
// ## The typeof Operator Markdown

// ### Checking Data Types with typeof

// Sometimes you need to know what type of data you're working with. JavaScript provides the `typeof` operator to check the data type of any variable.

// This is especially useful when:
// - Debugging your code
// - Making sure you have the right type of data
// - Learning how JavaScript interprets different values
// typeof Examples
console.log("");
// Creating variables of different types:
let name = "Alice";
let agee = 25;
let isStudentt = true;
let score = null;
let grade; //undefined
let hobbies = ["reading", "coding"];
let person ={name: "Bob", agee: 30};

console.log("Variable values and their types:");
console.log("");

console.log('name:', name, '→ type:', typeof name);
console.log('age:', agee, '→ type:', typeof agee);
console.log('isStudentt:', isStudentt, '→ type:', typeof isStudentt);
console.log('score:', score, '→ type:', typeof score);
// console.log('grade:' grade, ' ')

