// today i revise the object and how to use object
// two way declare constructor and litarals 

//singleton - > when object is created by constructor
//Object.create



// how to create symbols in js 
const mySymbols = Symbol("myKeys");

// how to used these symbols in objects -> [mySym]: "Sym Kyes"
//object literals
const myUser = {
    name:"Prince",
    [mySymbols]:"this is symbols",  //this symbols
    age:24,
    city:"Lucknow",
    email:"prince@gmail.com",
    idLoggedIn :true
}

//how to access these object values

//  1. way.
 console.log(myUser.city)

 // 2 way or best to access obj properties
 console.log(myUser["name"])

 // 3 way to access symbols 
 console.log(myUser[mySymbols])


 // how to change email
 myUser.email = "prince123@gmail.com"
 console.log(myUser["email"])

 // if don'nt want ot changes in objects properties so we used the freeze(object)methods
Object.freeze(myUser);
myUser.email = "prince1234@gmail.com"
console.log(myUser)



// how to add function in objects 
  myUser.greeting = function(){
    console.log("Welcome to JS")
 }

 // we can also do like this 
 myUser.morninggreet = function(){
    console.log(` ${myUser.name}, welcome back to JS`)
    //or you can also access like this 
    console.log(`welcome to JS, ${this.name}`)
    // this is refence to the current object 
 }
 console.log(myUser.greeting());
 console.log(myUser.morninggreet())

console.log(myUser);

 
