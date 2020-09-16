class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._fullname = firstname + lastname;
    }

    _firstname = "";
    _lastname = "";

    getFullName() {
        return _fullname;
    }
}

let person = new Person();
console.log(person);

person.getFullName();