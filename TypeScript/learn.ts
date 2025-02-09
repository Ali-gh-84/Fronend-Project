// console.log("hello world");

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


export class Person {  
    private name: string;  
    private age: number;  

    constructor(name: string, age: number) { 
        this.name = name;  
        this.age = age;  
    }  

    public isAdult() {
        if (this.age > 15) {  
            console.log("is adult");  
        } else {  
            console.log("is not adult");  
        }  
    }  
}  



