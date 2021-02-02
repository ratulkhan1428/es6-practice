class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = "sName";
        this.school = "BIAM"
    }
}

const Student1 = new Student(12, "Ratul");
const Student2 = new Student(22, "Misty");
console.log(Student1, Student2);