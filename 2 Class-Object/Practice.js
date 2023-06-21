class Person {

    //Properties
    first_name='Jhon'
    last_name='Dee'

    //method
    getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }
}

const person1 = new Person();
console.log(person1.getName());
