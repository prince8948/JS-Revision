//In this we learn about call keyword and how to used this keyword

 function setUser(username){
    this.username = username;
 }

 function createUser(name, age, email){
    //lets call the setuser name here 
    setUser() // here we call function but it not give any output
    setUser(name) // in both function is called but not gives any value
    this.age = age;
    this.email = email;
 }

 const user  =  new createUser('Prince', 23, 'prince@gmail.com')
 console.log(user)



 // we used call keyword for resolving this problem call is explicitily called the setUser()

 function getUser(username){
    //let suppose here in complex solution
    this.username = username;
 }

 function createNewUser(name, age, email){
    getUser.call(this, name) // this is called explicitily calling of getUser()
    this.age  = age;
    this.email = email
 }

 // create object  
 const newUser = new createNewUser('prince', 24, 'p@gmail.com')
 console.log(newUser);
 












