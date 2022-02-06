//  1 . How To print
//  console.log("Tejas");

//Values and Variables in js
// var myName = 'Tejas-form INDIA';
// console.log(myName);

// Rule-1:Nameing convention will be appropriate
//first char will be a letter or underscore or doller ,You cant use a number
//varible name include any letter ex:_myAge 
//Variable will be case-sensitive
//No limit for variable name
 /* Not Validate variable names 
   var _1myName*/

//  Section  :-  Data Types in Javascript 
//    1:undefined  if the value is not defined
//    2.Boolean    ex:-var iam = true; console.log(iam);
//    3.number     ex:-var myAge=26
//    4.String     ex:- var myAge="I am Tejas"
//    5.BigInt     
//    5.Symbol


//2:- Challenge quetion
 //console.log( 10+'20');  //1020
 //console.log(9-'5'); //4   javascript bug there is no logic
 //console.log('java'+'script'); //java script 
//console.log(true+true); true value is 1 so 1+1=2; false=-1


//Diff Bet null and undefined

//Null
// var iamUseless=null;
// console.log(iamUseless);  //null
//console.log(typeof(iamUseless)) //Object type //2nd javascript bug

// Undefined:If Value is not assigned to variable it will be undefined value
// var iamUseless;
// console.log(iamUseless);
//console.log(typeof(iamUseless)); //undefied type

// //What is NaN :-Not a Number
//    NaN is a Property of the global object 
//    in other word,it is a variable global scope
//    the init value of NaN is not a num
//ex:-
// console.log('Tejas'-'zanzane');    //NaN

// var Phone = 12215464;
// console.log(isNaN(Phone));
// var names = "tejas"
// console.log(names);
// if(isNaN(Phone)){
//     console.log("pleaze valid phone");
// }
// console.log(isNaN(names));


//Ex

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));



// Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );
// console.log(`Is both the x and y are equal : ${x == y}`); 

//  Express and Operators 
// 5+20=25  express: 5+20  operators : +/*- operand: 5555546
 
// var num=15;
// var newNum=--num*15;
// console.log(newNum); //210
// var a=30;
// var b=60;
// console.log(a!=b);
// console.log(a>=b);

// var a= 30;
// var b= -20;
// console.log(a>b&&b>0);

// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);


// // **********************************************************************
//String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "Yo";

// console.log(myName + ""Tejas");
// console.log(myName + " zanzane");
// console.log(myName + " zanzane + "Tejas");

// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10

// var a = 10;
// var b = 20;
// let temp;
// temp=b;
// b=a;
// a=temp;
// console.log(a,b);

// var a=10;
// var b=5;
// a=a+b; //15
// b=a-b; //5
// a=a-b;
// console.log(a,b);

// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 ); == only check the value //true

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 ); //check value as well as data types //false

//control-statements

//if-else
// var tomr = 'sunny';
// if(tomr= 'sunny'){
//   console.log('no need');
// } return console.log('take a raincoat');


// var year = 2020;
// debugger;
// if(year % 4 === 0 ){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }


// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
//  0,"",undefined,null,NaN,false** is false anyway

// if(score=0)
//   console.log('we won');
//   return console.log('we loss');

// Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");


// switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = 'circle' ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.



//Functions

// **** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.



//  Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.


// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// // 

// Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();



//  Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)


// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself






//  Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);



//  Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


//  Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );


// ECMA SCRIPT 6

// LET AND CONST AND VAR
// const myName = "tejas";
// console.log(myName); 

// myName = 'qyywywyw';
// console.log(myName);

// function biodata(){
//   let myName = "tejas tech"
//   console.log(myName);

//   if(true){
//     const myProf = 'full stack';
//     console.log('inner'+ myProf);
//     console.log('inner'+ myName);
//   }
//   console.log('inneOuter'+ myProf);
// }
// biodata();

// var =>function Scope
// let and const =>Block Scope

// Template literals
// n=12;
// for (let i=1;i<=10;i++)
// console.log(`${n}*${i} = ${n*i}`);

// Default parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));


// Fat Arror Function 

// Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }

// How to convert in into Fat Arrow Function 

//  const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

//  console.log(sum()); 


//Arrays in js


/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// example 🏁


// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];





// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 


//var myFriends = ['vinod','ramesh','arjun','vishal'];

//console.log(myFriends[myFriends.length - 1])
//console.log(myFriends.pop())
// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for in returns the base index value 
// for of returns the value present in array

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });






