// Memory => TWO types
//*******************************
// stack (Primitive), Heap(Nonprimitive)

let myName= "Sonam" // store in stack

let myanotherName = myName
myanotherName="Dendup"

console.log(myName);
console.log(myanotherName);

let user1 ={
    email:"sd@google.com",
    upi:'user@ybl'
}
let user2 = user1

user2.email="sd@gamil.com";

console.log(user1.email);
console.log(user2.email);

