//forOf loops - > forOf loops used to access arrays. its return the value of array 
// how to used  for of loops in array 

const myArray = [10,20,30,40,50,60];
const fruits = ['apple','graps','banana','lichi','orange'];
for (const arr of myArray) {
    console.log(arr);
}
for (const val of fruits) {
    console.log("fruits list ->  ",val)
}

// how to used forof loops with map

const map = new Map();
map.set(1, 'India');
map.set(2,'USA')
map.set(3,'AFG')
map.set(4,'AUS')
console.log(map)
//access by forof loops
for (const keys of map) {
    console.log(keys)
}
//OR
for (const [keys,val] of map) {
    console.log(`contry code code ${keys} of ${val}`)
    //OR
    console.log(keys, ":", val);
}

// NOTE -> WE CAN NOT ITERRATE OBJECTS BY FOROF LOOPS IT RETURN THE ERROR IF DO THIS