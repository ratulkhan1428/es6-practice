class Parent {
    constructor() {
        this.fatherName = "Jerry";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Bob");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());