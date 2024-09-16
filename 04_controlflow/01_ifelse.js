// control flow or control statements
/*Code is run in order from the first line in the file to the last line, unless the computer runs across the
(extremely frequent) structures that change the control flow, such as conditionals and loops.
*/
//you can use these control flow in different way or according to your problem what output you want

let marks = 80;
if(marks>=75){
    console.log("excellent work")
}
// above code you can also write this way 
if(marks>75)(console.log("excellent..........."));

// other way or you want to execute two condition
if (marks>=80) {
    console.log("you done amazing job");
}
else{
    console.log("try again to get it");   
}

//another way if you want to check multiple condition you if-else

if (marks>=80) {
    console.log("excellent works..");
}
else if(marks>60 && marks <80){
    console.log(" good job, do best");
}
else{
    console.log("keep doing hard work..");
}



// SWITCH CONTROL FLOW -> for reducing multiple if else condition we use switch case which better 

let day = 6;
switch (day) {
    case 1:
        console.log("Sunday");
        break; // break is a keywaor which is used to terminate the condition or case when do not use this next condition continuesily execued
    case 2:
        console.log("Munday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break
    default:
        console.log("re enter the value")
        break;
}

//NOTE --> NULLISH COALESINGOPERATORS (??) : NULL, UNDEFINED
// IT IS USED WHEN FETCHING THE DATA FROM DATABASE SO WE CHECK DATA ARE NULL OR NOT 

let val = 10; //val = null or undefined
let val1 = 15;
let result = val ?? val1;
console.log(result);
let result2 = val1??val;
console.log(result2);


// terniary operators in JS  SYNTAX   --> {(conditions)?true value:false value

let age = 15;
(age>=18)?console.log("eligible"):console.log("not eligible")

