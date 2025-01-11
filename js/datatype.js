"use strict"; // newer version of js 
//alert(4*5) // error code -using node js not browser

// Code should be readable 
//console.log("Sonam")
//console.log (3+3)
// Documentation -TC39 and ECMD
 let UserName="Sonam"// name => string
 let age = 20 // number range => 2^53 approximately or bigint
 let state=null


 let isLoggedIn=false// false or true=> boolean
 // null=> standalone value -representation of empty value
 //undifined=> value not assigned 
 // symbol => unique 
// object
// console.log(typeof undefined)

// interview crack tips
// Primitive Data => 7 types: String, Number, boolean, null, undefined, symbol, object,Bigint

// const score =100
// const scoreValue =100.3
// const isLoggedIn = false
// const outsideTemp =null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// BigInt example 

// const bigNumber = 3787383838778n

// Refereance / Non primitive: Array, object and function

const boys = ['Karma', 'Dorji','Tashi'];// array

let myObj={ //    object
    name:'Sonam',
    age:20,
}
// declear function
const myFunction = function(){
    console.log('Hello world');
}
// check datatype
console.log(typeof bigNumber);







