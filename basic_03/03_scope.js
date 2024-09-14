//there are two types of scope in java scripts Globle scope and local scope 
// local scope varibles -> those variables which are only accessable inside the functions not out side the functions that variables have local scope.
//Ex -->

function localVariable(){
    let num = 10;
    const num2 = 30;
    var num3 = 50;
    console.log("inside the functions -> ",num);
    console.log("inside the functions -> ",num2);
    console.log("inside the functions -> ",num3);
}
localVariable()
// console.log("out side of the functions --> ",num); // when try to access out side the funtions is return the error "num is not define"



//Globle scope -> those which are accessable out side and inside of the functions that variables are call globle scope variables.
// Ex  -->

let score = 200;
const score1 = 300;
var score2 = 400;

function globleVariable(){
    score2 = 100;
    score = 1000;
    console.log("Globle variable in side the funtions - ",score);
    console.log(score1);
    console.log(score2);
}
globleVariable()
console.log("Globle variable out side the funtions - ",score);
console.log(score1);
console.log(score2);



/**
 * NOTE -> variable scope checking is totally different in window console and in code (node) environment.
 */
