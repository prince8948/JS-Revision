let a = 4;
let b =2;
let c = 6;
[a, b, c] = [c, a, b] 
// console.log(`value of a --> ${a} \nvalue of b --> ${b} \nvalue of c  -->${c}`);

/*reduce() -->  The reduce() method is an iterative method. It runs a "reducer"
 callback function over all elements in the array, in ascending-index order, and accumulates them into a single value.
array.reduce(callbackfunctions(accumelator, currentvalue, index, array),initialValeOFACC)
initial value always assign for accumlator
*/

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const result = array.reduce(function calculate(acc, currVal){
    return acc+currVal;
}, 0)

console.log(result);


// we can also do this
const result2 = array.reduce((acc,val)=>(acc*val), 1)
console.log(result2);


// we can also do like this 
const result3 = array.reduce((acc,val)=>{
    return acc+val
}, 1)
console.log(result3);
