const User={
    _name:'Prince',
    _userId:'121',
    _userEmail:'prince@121.com',
    //here we create getter setter for name 
    get name(){
        return this._name.toUpperCase();
    },
    set name(userName){
        this._name = userName;
    },
    //here creates for user id
    get userId(){
        return this._userId;
    },
    set userId(id){
        this._userId = id
    },
    //here creates for userEmails
    get userEmail(){
        return this._userEmail
    },
    set userEmail(email){
        this._userEmail = email
    } 

}
console.log(User.name);
console.log(User.userId);
console.log(User.userEmail);
// let do logs in one line 
console.log(`My name : ${User.name} & Emp Id : ${User.userId} & email : ${User.userEmail}`);

