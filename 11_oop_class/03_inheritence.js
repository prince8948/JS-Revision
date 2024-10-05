// here we learn about the inheritance in java scripts
class user{
    constructor(username){
        this.username = username;
    }

    view(){
        console.log(this.username)
    }
}

// now lets inherit the properties of user

class teacher extends user{
    constructor(username, email, password){
        super(username) // here we inheritthe properties of user class
        this.email = email;
        this.password = password;
    }
    addCourse(courseName){
        console.log(" new course is -> ",courseName)
    }
}
const person2 = new teacher()
person2.addCourse('Java');

//user object
const person = new user("prince")
person.view();
console.log(person2 === person) // here return false because both intances are belong to different classes
console.log(person2 === teacher) // it will also returns false
// for checking the object which class belong so we used instanceof keywaord
// OR comparision of class object
console.log(person2 instanceof teacher)


