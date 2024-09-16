//how to scope of variable work when you have a nested funtions and loop and if else conditions

// funtions 

function scopeCheckNestedFunctions(){
    let name = "prince Prajapati"; // it behave like globle scope for innerFunctions 
    function innerFunctions(){
        let title = "Mr."   //it has the local scope  it doesnt access outside inner Functions
        console.log(name)
    }
    innerFunctions()
    // console.log(sirName); //it is give error because sirName is not access out side (it local scope variable)
}
scopeCheckNestedFunctions()


//conditions 


if(true){
    let userName = "Rahul";
    if(userName === "Rahul"){
        let sirname = " prajapati";
        console.log(userName + sirname);
    }
    // console.log(sirName) // it give error because it not define out side blocks
}



// *********************************** functions expression ********************************
// when a function store in an variable that calls the expression
//Note function func you did not call above the functions declaration but in normal function you can do this 
const func = function(num){
    return num * num
}
console.log(func(4))
let mul  = func(5)
console.log(mul);


// also you call function here
console.log(" above the fun declaration -> ",addSum(6))  //but is not happens in function expressions 
function addSum(num){
    return num+num
}
// you can call here 
console.log(addSum(3))