/* Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
*/
export default class currency {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }
    //getting code
    get code() {
        return this._code;
    }
    //seting code
    set code(newCode) {
        this._code = newCode;
    }
    //get code
    get name() {
        return this._name;
    }

    //set code
    set name(newName) {
        this._name = newCode;


    }
    //displaying currency in the format of "Name Code"
    displayFullCurrency() {
        return (`${this._name} ${this._code}`)
    }
}