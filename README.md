# JavaScript Object Oriented Programming Complete Note

#### 1. JavaScript Object
An Object is a unique entity that contains properties like.
- Variable type properties
- Methods properties
- Object properties
- Array properties
- And more....

```sh
let person = {
    //Properties
    first_name: 'Jhon',
    last_name: 'Dee',
    //method
    getName:()=> {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    }
}
console.log(person.getName());
```

#### 2. Class & Object
Classes are blueprints of an Object
- A class can have many Objects because
- Class is a template while Objects are instances of the class
- Using let or var to declare variables inside a class is unnecessary because class
properties are automatically scoped to the class instance and don't require explicit
variable declarations

```sh
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
```

#### 3. Constructor
Class constructor is a magic method
- Constructor execute automatically when object is created
- Constructor can take parameter
- Constructor method can't return any result

```sh
class Person {
    constructor() {
        console.log('I am a constructor')
    }
}
const person1 = new Person();
```
```sh
class Person {
    constructor(msg) {
        console.log(msg)
    }
}
const person1 = new Person('I am a constructor');
```


#### 4. Static Keyword
Class constructor is a magic method
- The static keyword is used to define a static method or property of a class.
- To call the static method we do not need to create an instance or object of the class.
- We create a static variable in JavaScript to prevent replication
- Fixed configuration, and it is also useful for caches

```sh
class Person {
    //Properties
    static first_name='Jhon'
    static last_name='Dee'
    //method
    static getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }
}
console.log(Person.getName());
```


#### 5. Inheritance
- Keyword "extends" is used to create inherit relationship between class
- For inherit relationship child class can use parent class properties
```sh
class Father {
    //Properties
     first_name='Jhon'
     last_name='Dee'
    //method
     getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }
}

class Son extends Father{

}

const SonObj = new Son();
console.log(SonObj.getName());

```


#### 6. Overriding
- Overriding works for inheritance relationship
- When child class change his parent properties , that is overriding
```sh
class Father {
    //Properties
     first_name='Jhon'
     last_name='Dee'

    //method
     getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }
}

class Son extends Father{
    // Overriding Occurs
    first_name='Jhon Junior'
}
const SonObj = new Son();
console.log(SonObj.getName());
```


#### 7. Method Overloading
- Method overloading allows you to define multiple methods with the same name but different parameter lists
- JavaScript does not natively support method overloading


#### 8. Polymorphism
- The polymorphism is a core concept of an object-oriented paradigm
that provides a way to perform a single action in different forms.
- We already know about Inheritance,Overriding,Overloading - those concepts together represent
polymorphism

#### 9. Abstraction
- Keyword "abstract" use for class abstraction
- You can't create object for abstract class
- Abstract class Always needs its inherited child class to perform
- JavaScript does not have built-in support for abstract

#### Thank You 



