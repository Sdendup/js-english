
//**************conversion************** 
let score="Sonam"
//console.log(typeof score)
//OR
//console.log(typeof(score))

let valueInNumber=Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)// NAN-Not a number

// "70"=> 33
// "70ab"=> NaN
// "sonam"=> NaN
// null => 0
// undifined => NaN
// true=>1 ; fslse => 0

let isLoggedIn=""

let booleanIsloogedIn=Boolean(isLoggedIn)
//console.log(booleanIsloogedIn)

// 1=> true & 0=> false
// ""=> false
// "Sonam"=> True

let someNumber = 77
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ************Opperations**************

let value = 10
let negValue = -value
// console.log(negValue)

// console.log(value + value)
// console.log(value - value)
// console.log(value * value)
// console.log(value ** 3)
// console.log(value / value)
// console.log(value % 3)

let str1="Hello"
let str2=" World"

let str3 = str1 + str2

// console.log(str3)

// interesting note => ToPrimetive value

// console.log("2"+ 4);
// console.log(2+ "4");
// console.log("2"+ 4+3);
// console.log(2+ 4+"3");
// this code are  not treat good one

//note prefix & postfix  should change 