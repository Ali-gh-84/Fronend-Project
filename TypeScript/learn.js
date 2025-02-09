"use strict";
// console.log("hello world");
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// function log (message) {
//     console.log(message);
// }
// let message = "hi ali !";
// log(message);
// let message;
// message = 'abc';
// let endwithc = (<string>message).endsWith('c');
// let endwitthc2 = (message as string).endsWith('c');
// let log = function (message) {
//     console.log(message);
// }
// let log2 = (message) => console.log(message);
// interface Point {
//     name: string,
//     age: number
// }
// let draw = (point : Point) => {
//     //....
// }
// draw({
//     name: "ali",
//     age: 20
// })
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.isAdult = function () {
        if (this.age > 15) {
            console.log("is adult");
        }
        else {
            console.log("is not adult");
        }
    };
    return Person;
}());
exports.Person = Person;
