class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    _firstname = "";
    _lastname = "";

    getFullName() {
        return this._firstname + this._lastname;
    }
}

let person = new Person();
console.log(person);
person.getFullName();