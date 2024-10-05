// here we learn about static keyword and how and why we used statis keyword
/* Static Methods:- 
Static methods are defined using the static keyword and can be called directly on the class.
They cannot be called on instances of the class.
Typically used for utility functions that are relevant to the class but do not need to access instance data.
Static Properties:-
Static properties are also defined using the static keyword and belong to the class itself, not to any instance.
Static properties are shared across all instances of the class.

*/

class User{
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email 
    }
    showDetails(){
        console.log(`username: ${this.name}, Age: ${this.age}, emial, ${this.email}`)
    }
    createdID(){
        console.log('user Id -> ', Math.floor(Math.random()*10 + 1))
    }
    // suppose if you dont want to createdID() everyone can used so you used static keyword
    static createdID(){
        console.log('user Id -> ', Math.floor(Math.random()*10 + 1))
    }
}
const user1 = new User('raj', 21, 'raj@fb.com')
user1.showDetails()

// if you create static method you access like this
console.log(User.createdID());


// lets inherit the properties of user 
class student extends User{
    constructor(name, age, email){
        super(name, age, email)
    }
    studentDetails(){
        console.log(`Student name: ${this.name}, Age: ${this.age}, email, ${this.email}`)
    }
}
const std = new student('Rakul', 22, 'rakul.com')
std.studentDetails();
//now we are checking child cladd can access static method of parent class
std.createdID(); // r=return false because it can not be instanciat with object