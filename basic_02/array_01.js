//revision work 

//const arr=[20, 10, 23, 45, 65, 42]
//console.log(myArray[2]);

const newArr = [19, 22, "raj", "aman", 12.0, 13.9]
//console.log(myArray[6]);

const heros = ["spiderman", "hulk", "Iron man", "thor"]
//console.log(myArray[4]);
//OR

const myArray = Array(12, 13, 14, 15, 16 ,17,18);
//console.log(myArray[3]);


//***********************ARRAY Methods */
//push()    -> adding the value in array
myArray.push(100)
myArray.push(66)
//console.log(myArray);


//pop()      -> remove last value from array
myArray.pop()
// console.log(myArray);

//unshift()  -> add value from starting point of array
myArray.unshift(34)
// console.log(myArray)

//shift()  -> delete from start
myArray.shift()
//console.log(myArray);


//boolean methods
//includes(param) ->it check given value are available or not in array
let checkArray = myArray.includes(100)
// console.log(checkArray);


//indexOf()   -> it returns the position or indexing  of given array value
console.log(myArray.indexOf(15))



//Join()   -> it join the array and also convert in string data type
//const newArray = arr.join();
//console.log(newArray);



//slice(start, end)  -> in slice end range is not included but it not change the original array
const arr=[20, 10, 23, 45, 65, 42]
// console.log("original array befor slice- > ",arr)
// const myNewArray = arr.slice(2,6);
// console.log(myNewArray)
// console.log("original array after slice- > ",arr)




//splice(start, end)    ->in slice end range is included but it change the original array 
//console.log("Before Splice ->  ",arr);
const newSpliceArray = arr.splice(1,3);
//console.log("Splice result -> ",newSpliceArray)
//console.log("After splice - > ", arr);