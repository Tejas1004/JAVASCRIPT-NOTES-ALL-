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






