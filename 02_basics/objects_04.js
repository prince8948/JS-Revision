// day to  revising objects in JS

//how create object singleton or using constructor
//const newUser = new Object() //singletom object

const newUser = {} //empty object
newUser.name = "Raj prajapati"
newUser.score = 100
newUser.age = 24
newUser.course = "MCA"
newUser.isLogedIn = true
// console.log(newUser)

//how to create and access object inside object

const childDetails = {
    email:"raj@gmail.com",
    userName : {
        fullName :{
            firstName :"Prince",
            lastName : "Prajapati"
        }
    }
}
//access like this
// console.log(childDetails.userName.fullName.firstName, childDetails.userName.fullName.lastName);

// how to merge to obj
 //assign(pra1, para2)

 const obj1 = {1:"raj", 2:"prince", 3:"rahul"};
 const obj2 = {4:"Ranjana", 5:"Sandhya", 6:"Vijeta"}
 //merge obj 1 methods
 const obj3 = {obj1,obj2}
 console.log(obj3)
// 2nd methos t o merge objects
 const obj4 = Object.assign({}, obj1, obj2)
 console.log(obj4);
 
// 3rd with spread operators
const obj5 = {...obj1, ...obj2}
console.log(obj5)



//access obj when it have many users datails 
 const user = [
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"p@gmail.com"
    },
    {
        id:3,
        email:"p@gmail.com"
    },
    {
        id:4,
        email:"p@gmail.com"
    },
    {
        id:5,
        email:"p@gmail.com"
    },
    {
        id:6,
        email:"p@gmail.com"
    },
    {
        id:7,
        email:"p@gmail.com"
    }
];
user[4].email = "h@gmail.com";
console.log(user);


// access all keys
console.log(Object.keys(newUser))


// get all value 
console.log(Object.values(newUser))


//we check the given properties are available in object or not
console.log(newUser.hasOwnProperty('name'));