// Date 

let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// create New Date

// let myCreatedDate = new Date(2015,0,11,5,3);
// console.log(myCreatedDate.toLocaleString())



//let myCreatedDate = new Date('2025-01-11');
let myCreatedDate = new Date('11-01-2025');
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1 );
// console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday:'long',   
})

\\ link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
