//FOR LOOPS --> Loops offer a quick and easy way to do something repeatedly 
// it has three fields initialization, conditions, increaments 

//lets we  want to print 1 to 20 numbers 

for(let i=1; i<=20;i++){
    // console.log("numbers - > ", i)
}

// let we want to, in specific number position loops will be terminated so we used break 
for (let k = 1; k <= 10; k++) {
    //check the for beak the loops
    if(k == 6){
        // console.log("Loop terminate here");
        break;
    }
    // console.log(k);  
}

//let same as we dont want stop loops in specefic condition so we used continuekeyword
//let suppose if j = 3 dont terminate loops pass this condition

for (let j = 0; j < 10; j++) {
    if(j==3){
        console.log(j, "pass the condition");
        continue;
    }
    console.log(j);
}