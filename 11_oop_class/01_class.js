class student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course
    }

    showStdDetails(){
        console.log(`name : ${this.name} id : ${this.id} course : ${this.course}`);
    }
}

const std = new student(11, 'prince', 'MCA')
std.showStdDetails()


// lets see how it work behind the seen

function User(username, age, email){
    this.username = username;
    this.age = age;
    this.email = email
}
//behind the sceen showdetails created like this
User.prototype.showStdDetails = function(){
    // return `name : ${this.username} age : ${this.age} Email : ${this.email}`
    // also do this
    console.log(`name : ${this.username} age : ${this.age} Email : ${this.email}`)
}
const user1 = new User('prince', 23, 'prince@.com')
//console.log(user1) // Now instead of using log used showdetails
// console.log(user1.showStdDetails()) 
user1.showStdDetails()





