const person = {
    name:'prince',
    age:24,
    city:'lko',
    greet : function(){
        console.log(`Good Morning ! ${this.name}`);
    }
}

const greetByName = person.greet.bind()
greetByName()


// We also do like this 

const user ={
    name:'raj',
    class:12
}
const user1 ={
    name:'Rahul',
    class:11
}
function greeting(){
    console.log(`Morning Greet ${this.name}`)
}

const namseGreet = greeting.bind(user1)
console.log(namseGreet());
