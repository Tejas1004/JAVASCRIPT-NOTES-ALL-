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
 