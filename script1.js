 //3.Write a “person” class to hold all the details.

 class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getname(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Shenaz", "sheik",24, "civil", "shenazva@gmail.com", 9150485661, "coimbatore");
let person2 = new Person("Mamtha","kumari", 23, "civil", "mamtha13@gmail.com", 7639782192, "chennai");

console.log(person1.getname());
console.log(person2.getname());