const User={
    _name:'Prince',
    userId:'121',
    userEmail:'prince@121.com',
    //here we create getter setter for name 
    get name(){
        return this._name.toUpperCase();
    },
    set name(userName){
        this._name = userName;
    }
    //here creates for user id



    //here creates for userEmails
    
}
console.log(User.name);
