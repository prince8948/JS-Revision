/* A while statement executes its statements as long as a specified condition evaluates to true. A while statement
 looks as follows:
    while (condition)
    statement
*/

let i = 1; //this is initialization of variables
while(i<=9){ //condition or terminator
    console.log(i)
    i++ // increaments of variable so loops runs repeatedly
}

//same as for loops we can break the loops 
//Ex -->

let k = 1;
while(k<=6){
    if(k==3){
        break;
    }
    console.log(k);
    k= k+1;
}

// same if you want to pass this conditions
let x =1;
while(x<6){
    if(x==3){
        console.log("pass this");
        x++ // Increment before continue to avoid infinite loop
        continue;
    }
    // console.log(x);
    x++;
}



// Lets learn about do while loops-> in do while loops at ones it will executed because it return the value then check the condition
//EX   --->

let l = 1;
do {
    console.log("table of 2's", 2*l)
    l++
} while (l<=10);

// this code returns the 22 because it return the then do increament and check condition. Condition is false so it exits the loops
console.log("for dowgile loops outputs - >");

let n = 1;
do {
    if(n == 4){
        break;
    }
    console.log("table of 2's", 2*n)
    n++
} while (n<=10);



