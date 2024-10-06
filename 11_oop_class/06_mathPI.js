// in this  lecturre we learn about we can change math.pi value or not if change then how if not then why we cannot change


// this show your pi descriptor and we can not this properties thats why pi is unchangable
const changeMathValue = Object.getOwnPropertyDescriptor(Math, 'PI')

// this used to define property of your ong objects
// Object.defineProperty(Math, 'PI',{
//     writable:true,
//     enumerable:true
// })


// lets create own object and defines its proterties
const user = {
    name:'Prince',
    age :23,
    id:111,
    class:'MCA'
}

// here defines the those properties with our object
Object.defineProperty(user, 'name',{
    writable:false,
    enumerable:false
});

const userDescriptor = Object.getOwnPropertyDescriptors(user, 'NAME')
console.log(userDescriptor);
user.name = "Raj"
console.log(user.name)


//lets understand how to used  for of loop with objects
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}


// if object has function so lets see how to used forof with objects
const person ={
    id:22,
    name:'Raj',
    dept:'soft',
    details:function(){
        console.log(`Emp Id: ${this.id}, name:${this.name}, department : ${this.dept} `)
    }
}
//it return with functions
for (const [key,value] of Object.entries(person)) {
    console.log(`${key} : ${value}`)
}

//when we do like this it returns same function as it so we used id condition to ingore this
for (const [key,value] of Object.entries(person)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}
