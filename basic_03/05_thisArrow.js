// lets create a object and learn how to use this keyword and how to access value
// user registration dtails
const user = {
    userName: "Prince",
    email: "pp@gmail.com",
    isLoggedIN: true,
    greetingMessage: function () {
        // console.log(`${this.userName} welcome to welsite`); //here we used this keyword it refer to the current object properties "it does not work in function"
        // here is the current user name is Prince it return prince
        // console.log(this); // it return the object 
    }
}
user.greetingMessage();
//lets change the current user name 
user.userName = "Rahul";
user.greetingMessage() //this will return the Rahul because current context is change 
//if you want to check current context or object 
// console.log(this); //it returns empty object because it does not have any current context


/**
 * NOTE -> in console current context return window object because window has globle object when you (console.log(this))
 *         but any code environment it return {} object
 */

//***************************************************************************************************************** */

// arrow functions come in 2015 arrow functions allows us to write a function in concise way 

const greeting = (greet)=>{
    return greet
}
console.log(greeting("Good MOrning"))

//next way and it also call explicit arraw function
const Greeting = ()=>{
    console.log("Good Night")
}
Greeting()

//when you have the single line so then call implicit arrow functions
//Ex   -->

const addNum = (num1, num2) =>  (num1+num2)
// OR
const Geet = () => console.log("Namaskar");



// lets see how to handle object in arrow functions with implicitly
const handleObjectInArrow = (num) => ({myName : "Prince"})
console.log(handleObjectInArrow(9))
