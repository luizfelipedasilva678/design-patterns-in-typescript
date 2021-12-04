function Person(name, age) {
  this.firstName = name;
  this.age = age;
}

const person = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
Person.prototype = Object.create(person);
Person.prototype.constructor = Person;

function SubPerson(firstName, age, lastName) {
  Person.call(this, firstName, age);
  this.lastName = lastName;
}

const person2 = new Person('Mariana', 30);

console.log(person2.fullName());
