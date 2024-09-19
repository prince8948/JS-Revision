// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and 
// constructs a new array from the results. Read the iterative methods section for more information about how these methods 
// work in general.

const myArray = [20, 30, 10, 40, 50, 60]

//first way to use map methods
const mulitNum = myArray.map(function (val) {
    return val * 2;
})
// console.log("multiplications -->  ",mulitNum);

//second way 
const additon = myArray.map((nums) => nums + 5);
// console.log("additions -->  ",additon);

//third way 
const substraction = myArray.map((items) => {
    return items - 10
})
// console.log("Substraction of array --> ", substraction);


//how to used functions referance
function div(val) {
    return val / 5;
}
const divide = myArray.map(div)
// console.log(divide);


//let check the array details, index, arraylist,items
const checkNums = myArray.map((val) => {
    return val >= 30;
})
// console.log(checkNums); // it will return the boolean value if satisfide return true else false

const arr = myArray.map((arraylist) => {
    return arraylist;
})
console.log(arr);


//add the array value
let sum = 0;
const newAdd = myArray.map((num) => {
    sum += num;
    return sum;
})
// console.log(("nw addition  --> ", sum));


//array object 
const programmer = [
    {
        name: "ABC",
        lang: 'c++',
        exp: '3',
        isLoggedIn: true
    },
    {
        name: "XYZ",
        lang: 'node',
        exp: 1,
        isLoggedIn: true
    },
    {
        name: "RST",
        lang: 'c',
        exp: 5,
        isLoggedIn: false
    },
    {
        name: "PQR",
        lang: '.net',
        exp: 4,
        isLoggedIn: true
    },
    {
        name: "ABC",
        lang: 'py',
        exp: 1,
        isLoggedIn: false
    },
    {
        name: "LKM",
        lang: 'js',
        exp: 2,
        isLoggedIn: true
    },
    {
        name: "EFG",
        lang: 'java++',
        exp: 2,
        isLoggedIn: false
    },
]

const updateProgrammer = programmer.map((items) => {
    items.exp = 0;
    return items
})

// console.log("Array object -> ", updateProgrammer)




// chaining methods *************************************



const calOfArray = numArray.map((val) => (val * 2))
    .map((val) => (val + 2))
console.log("calculation of Array values  -->  ", calOfArray);




let numArray = [4, 2, 3, 5, 1, 6, 7]
const calArray = numArray.map((val) => {
    return val * 4;
})
    .map((val) => {
        return val + 5;
    });














