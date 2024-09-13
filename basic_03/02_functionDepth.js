// if you dont know about how many arguments are passed 
 function manyArguments(numbers){
    return numbers
 }
 console.log(manyArguments(20, 40, 60, 80))

 // uper case function take all value so we can used to rest operators that return all values in array
function restArguments(...nums){
    return nums
}
console.log(restArguments(20,50,10,40,60,70,90))

// same things we do with different different parameters like this
function restArguments(val1, val2, ...nums){
    return nums //it did not returns those value which are assign to val1 and val2
}
console.log(restArguments(20,50,10,40,60,70,90))


//How to passed object in functions 
const user ={
    name : "Prince",
    email:'prince@gmail.com',
    price:200
}

function howToHandleObejct(obj){
    console.log(`your name is ${obj.name} & email is ${obj.email} & your product price ${obj.price}RS`)
}
howToHandleObejct(user)
// we can also do like this
howToHandleObejct({
    name:"Rahul",
    email:"rk@gmial.ocm",
    price:300
})


// how to passed array  in functions 
const myArray = [10, 20, 30, 40, 50, 60]
function handleArray(myArr){
    return myArr[3];
}
console.log(handleArray(myArray));
// OR do like this 
console.log(handleArray([20,30,40,50,60,70,80,90]))

