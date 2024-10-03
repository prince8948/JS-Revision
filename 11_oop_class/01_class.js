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