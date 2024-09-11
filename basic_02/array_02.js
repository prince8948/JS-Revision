console.log("hello guys");
const marvelHeros = ["thor", "tronman", "hulk", "spiderman"]
const dcHeros = ["superman", "flash", "batman", "internals"] 

//merge to array so we can do this with 3 methods 
// push, concat, spread operators


const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros)


// through spread  operators -> it is easy to use and also merge the multiple array together 
const all_new_heros = [...marvelHeros, ...dcHeros]
console.log("new heros - > ",all_new_heros)

//how to handle this given array
const anthrArray = [10, 12 , 11, [22, 25 , 23, 26 [28, 30, 31]]] 
// flat(depth or infinity)   -> we user the flat method and it returns new array  the simple array form
const newArray = anthrArray.flat(Infinity);
console.log(newArray);




//isArray() - > it is used to check given value is array or not

console.log(Array.isArray("PRInce")); //false
console.log(Array.isArray(marvelHeros)) // true


// from(param)  -> it converts the value (string or object) in array from

const myArray = Array.from("Prince");
console.log(myArray);

 // before converting sure what you want to crate in array from keys or value
console.log(Array.from({name:"prince"}))   // else return empty array 



  // how to convert multiple element in array form
  //of(param .....), 

  let userScore1= 300;
  let uerScore2 = 345;
  let userScore3 = 200;
  let userScore4 = 150;
  const allScore = Array.of(userScore1, uerScore2, userScore3, userScore4)
  console.log(allScore);