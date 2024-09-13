// how to create 
// function is a set of instruction which perform the operations

/*function functionName(){
    //funtion difination
}
functionName()      -> call function

*/

//lets create function to add two numbers 
/*
function numSum(){
    let number1 = 4;
    let number2 = 5;
    let result = number1 +number2;
    console.log(result);
}
numSum(); */

// 2. methods to create function

function addTwoNumbers(number1, number2){
    // console.log(number1+number2)
}
addTwoNumbers(55,5)

// 3. methods of create function to returns value

function  addNumbers(num1, num2){
    return num1+num2;
}
let result = addNumbers(4, 9)
// console.log(result);

//WAP a program to print user logged in message

function userLoggedIN(userName){
    // console.log(`${userName} logged in successfully`);
}
userLoggedIN("Prince")
userLoggedIN("")
userLoggedIN() // for resolving the undefined to used conditional statement

function userLoggedOut(name){
    // if(name === undefined)
    //OR  Both condition behave same
       if(!name) {
        console.log(`please enter user name`)
        return // after the return other line of code does not executed
    }
    // console.log(`${name} logged out successfull`)

    //or 
    return `${name} logged out`
}
// userLoggedOut()
//or
console.log(userLoggedOut("prince"))
