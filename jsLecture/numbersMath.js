//we declare or define the number two way 
const score = 100;
console.log(score);

//or 
const newScore = new Number(100);
//both have the same number but when we do console log second shows with number object
//console.log(newScore);

const hundreds = 1000000
// console.log("without ind std  ->  "+hundreds.toLocaleString());
// console.log("with ind stdrd   ->  "+hundreds.toLocaleString('en-IN')); // it show the india standerd numbers with (,)

//+++++++output
// 100
// [Number: 100]
let points = 12.21

// console.log(points.toPrecision(4)) //how many numbers you want to show wuth dots

// build in methods on number -> min, max, abs, random(imp), flore, ceil,toFixed, round, toPrecision etc
const nums = 120.99;
// console.log(nums)
// console.log(Math.max(3,4,5,6,7,10))
// console.log(Math.min(1,4,7,9,0))
// console.log(Math.abs(-100))
//console.log(points.toFixed(3))  //it work after . (dot) how much you wants the numbers



//++++++++++++++++++++++++++++++++++++++++++++++++Random Methods ++++++++++++++++++++++++++++++



console.log(Math.random()); //it print the any random number

// but if you want to print the number within the range 

console.log(Math.floor(Math.random()*10)) // it always print the any interger

// console.log(Math.floor(Math.random()*100000))
console.log(Math.floor(Math.random()*100000) + 900000);

// how to set random number range 

let minNum = 100000;
let maxNum = 900000;

for(var i =1; i<=100;i++){
    console.log(" between range  "+ i +"-->", Math.floor(Math.random()*(maxNum-minNum + 1))+minNum)
//     console.log(`Random number ${i} --> `+ Math.floor(Math.random() * (max - min + 1)) + min)
//     // console.log(`Random number ${i} --> `+ Math.floor(Math.random()*(maxNum-minNUm))+minNUm)
}
// console.log(Math.floor(Math.random()*(maxNum-minNum + 1))+minNum)