/*  CLOSURES -->>
Closures are created whenever a function is declared inside another function and the inner function 
references variables from the outer function. Even after the outer function has finished executing, 
the inner function retains access to the variables in its lexical environment.
Closure is the combination of a function and its lexical environment.
It allows inner functions to access outer function variables even after the outer function has returned.
Benefits of Closures:
Data Privacy: Closures allow you to create private variables and methods.
Maintain State: Closures can help maintain state in functions over time.
Callback Functions: Frequently used in callbacks, event handlers, and asynchronous programming.
*/

//1st closures
function outer(){
    let user = 'prince'
    function inner(){
        console.log(`My name is ${user}`)
    }
    return inner // reference returns
}
const outerClosure = outer()
outerClosure()


//2nd way to create closure
function outerFunc(){
    let userDetailes ='My name is Rajkumar'
    return function(){
        console.log(userDetailes)
    }
}
const outClosure = outerFunc()
outClosure()


//when fucntions have some behavior 
function outerGreeting(greet){
    return function(name){
        console.log(`${greet} ${name}`)
    }
}
const sayHello = outerGreeting('Hello')
sayHello('Prince')

//same things do another way 
function outerGreeting(greet){
    function innerGreeting(name){
        console.log(`${greet} ${name}`)
    }
    return innerGreeting
}
const sayHi = outerGreeting('hii')
sayHello('Rohit')


// some practical uses of closure 
//  we creates closures with using of closures

function counter(){
    let count = 0
    return function(){
        count++
        console.log(count);
    }
}
const Increament = counter()
Increament()
Increament()
Increament()




