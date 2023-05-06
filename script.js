// //  Variables, Constants and Comments

// var score=34;
// var score=56;//redeclare
// console.log(score);

// let points=34;
// points=55;
// console.log(points);

// // constants
// const value =22;
// console.log(value);


// Data Types of Values

// 7 Types of Data

// Number 1,2,3,4,5,6,7,8,9
// Strings "22","mutayyab","hussain" 'hello' `hello ${Kase ho}`
// Boolean true/false
// null is a special data type. null is a intentionally absence of value
// let scroe =null;
// scroe=55
// console.log(scroe);

// Undefined Variable declared but not intialise
// let points;
// console.log(points);

// object complex data structure
// Symbol looks like object


// Strings
// let firstName="wow";
// let lastName="Programmer";
// console.log(firstName+" "+lastName);    

//  method 2 template literals
// let firstName="wow";
// let lastName="programmer";
// let fullName=`I Want to Become a ${firstName} ${lastName}?`
// console.log(fullName);



// Strings Methods
// let firstName="wow"
// let lastName="Programmer"
// getting string characters
// console.log(firstName[1]);
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(lastName.indexOf("e"));
// console.log(lastName.lastIndexOf("Programmer"));

// Common Strings Methods
// let hobbies='coding reading running';
// console.log(hobbies);
// trim Method
// console.log(hobbies.trim());
// Includes method
// console.log(hobbies.includes("ho")); //it returns boolean
// Slice Method
// let fullName="wowProgrammer"
// console.log(fullName.slice(0,5)); //last index exculded (0,5)it give value(0,4) 


// string split method
// let favoritColor="Brown Blue Black Grey"
// let arrColor=favoritColor.split('');
// console.log(arrColor);

// javaScript Strings are Imutable
// let str="Hello";
// str[0]="p"
// console.log(str);   


// Numbers
// const score =50;
// console.log(score,typeof(score));

// Mathmaticall Operators * / % ** + -
// const result =score / 2; //Give Quotient 
// console.log(result); 
// let result =score%2;//Give Reminder
// console.log(result);



// 1.7 Loose Equality (==) Vs Strict Equality Operator (===)

// Loose Equality Operator ==
// let age =22; //Number Type Value
// console.log(age === "22"); //Focus Only on Value But Not Type 


// Strict Equality Operator

// console.log(age === "22"); //Focus on Both Value and Its Type



// 1.8 Type Conversions
// let stringType ="54";
// console.log(stringType,typeof stringType);

// // Number Method
// let nummberType = Number(stringType);
// console.log(nummberType,typeof nummberType);

// Imp
//  // In number method passing String must be of numeric values

// let numberType=54;
// console.log(numberType, typeof numberType);
// // String Method
// let stringType =String(numberType)
// console.log(stringType,typeof stringType);

// Boolean Method true/false

// let age =32;
// let booleanValueOfAge=Boolean(age);

// console.log("boolean value of age is",booleanValueOfAge);


// 1.9 ARRAYS

// let dish1="Biryani"; // let dish2="chat" //Bad Method
// let dishes=['Biryani','chat','Parathay'];
// Access
// console.log(dishes[2]);
// Modify Array
// dishes[5]="Chicken"
// console.log(dishes);


// Array Methods

// join Method 
// console.log(dishes.join(' ')); //Is use to convert in single array

// Index Of
// console.log(dishes.indexOf('chat'));//is use to find index

// concat method
// let newDishes=["sweet-dishes",'pani-poray'];
// console.log(dishes.concat(newDishes));

// console.log(dishes.length);


// Muteated method // THESES ARRAY METHODS CHANGES ORIGINAL ARRAYS
//Push Method
// console.log(dishes.push('chips','dode'));
// console.log(dishes);

// Methods pop()
// console.log(dishes.pop());
// console.log(dishes);



// 1.10 Chapter 
//Boolean Values And Comparison Operators
// let booleanType =true;
// let stringtype="true"
// console.log(typeof booleanType,typeof stringtype);

// MEHODS RETURN BOOLEAN VALUES
// let email="wowcoder@gmail.com"
// console.log(email.includes("@"));

// COMPARISON OPERATORS ALWAYS RETURN BOOLEAN VALUE
// == , === , !== , !=
// >,>=
// <,<=

// let statu ="low";
// console.log(statu == "low");

// let points =23;
// console.log(points == "23");
// console.log(points === "23");
// console.log(points != 234);
// console.log(points >10);