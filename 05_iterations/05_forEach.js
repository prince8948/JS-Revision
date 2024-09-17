//forEach Loops -> It calls a provided callbackFn function once for each element in an array in ascending-index order.
// inside the callback function we pass three para meters index, items, arraylist
// and in call back function we can also pass the functions reference


const fruits = ['mango', 'apple', 'banana', 'graps','kivi','orange']
fruits.forEach(function(items){
    console.log(items)
})
// using arrow funtions 
fruits.forEach((val)=>{
    console.log("arrow ->",val);
})

// using function reference 
function printFruitName(name){
    console.log(name);
}
fruits.forEach((printFruitName))


//forEach has three parameters index, items, array list 
fruits.forEach((index,val,arrayList)=>{
    console.log(index," - ", val, "list - ", arrayList);
})



// how to used forEach with objects ------------------------------------------
