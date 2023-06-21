//Object Literal
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
