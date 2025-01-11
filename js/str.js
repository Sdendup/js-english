// string concadination 
const name = 'Sonam';
const repoCount =50;

//console.log(name +repoCount+ 'Value');
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Dendup')
// console.log(gameName.__proto__)
// console.log(gameName[4]);


// console.log(gameName.toUpperCase());

// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('e'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-6,0)
console.log(anotherString)

//trim
const newStringOne = '   Sonam   '
console.log(newStringOne);
console.log(newStringOne.trim())

// Replacement 
 const url = 'https://eduation.gov.bt/sherig%20DSE'

console.log(url.replace('sherig','dcpd'))

console.log(url.includes('sherig'))

