const mySymbols = Symbol("description");

// Array of users
// WAP to find those users who have more than 2 skills 

const myUser = [
    {
        name: "Prince",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        skills:["html"],
        city: "Lucknow",
        email: "prince@gmail.com",
        isLoggedIn: true
    },
    {
        name: "Raj",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        city: "Lucknow",
        skills:["html", "css",],
        email: "raj@gmail.com",
        isLoggedIn: true
    },
    {
        name: "Rahul",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        city: "Lucknow",
        skills:["html", "css", "js", "py", "java"],
        email: "rahul@gmail.com",
        isLoggedIn: true
    },
    {
        name: "Abhi",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        city: "Lucknow",
        skills:["html", "css", "js", "py"],
        email: "abhi@gmail.com",
        isLoggedIn: true
    },
    {
        name: "Sonu",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        skills:["html", "css"],
        city: "Lucknow",
        email: "sonu@gmail.com",
        isLoggedIn: false
    },
    {
        name: "Ritik",
        [mySymbols]: "this is symbols",  // symbol property
        age: 24,
        city: "Lucknow",
        skills:["html", "css", "js", "py"],
        email: "ritik@gmail.com",
        isLoggedIn: false
    }
];
// console.log("Logged in users:");
for (let i = 0; i < myUser.length; i++) {
    if (myUser[i].skills.length>2) {
        console.log(`${myUser[i].name}  have more than 2 skills.`);
    }
}




// WAP to count character from given string 

const str = "mahakal"

const obj ={}

for(var x of str){
    if(obj[x]){
        obj[x] +=1;
    }
    else{
        obj[x] = 1
    }
}
// console.log(obj);



// Function to handle the processing and printing
let input = "hello"
const lines = input.split();
console.log(lines);

//in given str count the vowel 

const str3 = "Hello prince prajapati"

