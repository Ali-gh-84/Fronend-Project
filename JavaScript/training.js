//alert("hello");
/*
console.time("c");
    let a ;
    a ="ali";
    console.log(a);
    let b = "abbas";
    console.log(b);
console.timeEnd("c");

console.table([1,2,3,4]);
*//*
const a = {
    name : "ali",
    age : 30
}
a.name = "abbas";
a.age = 10;

console.log(a);
*//*
const num = [1,2,3,4];
num.push(10);
console.log(num);
*//*
const a = "ali";
console.log(a);
console.log(a.length);
console.log(typeof a);
*//*
let a;
a = String(new Date());
console.log(a);
console.log(a.length);
console.log(typeof a);
*//*
let a;
a = parseFloat(100.56478);
console.log(a);
console.log(a.toFixed(1));
console.log(typeof a);
*//*
const a = 50;
const b = 60;
var c = a * b ;
console.log(c);
*//*
var a;
a = Math.sqrt(16);
a = Math.pow(5,2);
a = Math.round(5.3);
a = Math.random() *100 +1;
a = Math.floor(Math.random() *100 +1);
console.log(a);
*//*
const name = "ali";
const name2 = "ghafari";
var a = name + " " + name2 ;
console.log(a);

a = `hello my name is ${name}`;
console.log(a);

var a = name.length;
console.log(a);

var a = name2.charAt(name2.length-1);
console.log(a);
var a = name2.split(",");
console.log(a);
*//*
const num = [1,2,3,4,5,6,7,8,9];
const num2 = [10,11];
var b = num.pop();
console.log(b);
var a = num.sort(function(x,y){
    return x-y;
});
console.log(a);
*//*
const a = {
    firstename : "ali",
    lastname : "gafari",
    age : 15,
    getbirthday : function(){
        return 2023 - this.age;
    }
}
var b;
b = a.getbirthday();
console.log(b);
*//*
const id = 75;
if(id>40 && id<=60){
    console.log('yes');
}else if(id>70 && id<=80){
    console.log('i do no');
}else{
    console.log('no');
}*//*
const color = 'red';
switch(color){
    case 'blue' :
        console.log('blue');
        break;
        case 'red' :
            console.log('red');
        break;
        default:
            console.log('not calor');
}
*//*
function a(x,y){
    return x/y;
}
console.log(a(45,9));
*//*
const a = (x = 1,y = 2) => (x*y);
console.log(a());
*//*
for(let i = 0 ; i< 5 ; i++){
    console.log("number " + i);
}
let i = 0;
while(i<5){
    console.log("number " + i);
    i++;
}*//*
const cars = ["toyota","camary","pride"];
for(let i=0 ; i<cars.length ; i++){
    console.log(cars[i]);
}

cars.forEach(function(M){
    console.log(M);
});
*//*
const a = new Map();
a.set("ali",{
    first : "b" , 
    last : "t"
});
a.set("abbas",{
    first : "c" , 
    last : "d"
});
console.log(a.has("ali"));
console.log(a);
*//*
const a = new Set(/*[100 , "ali" , true]);
a.add(100);
a.add("ali");
// console.log(a.delete(100));
console.log(a);*/
/*let a,b;
[a,b,...rest] = [10,20,30];
console.log(rest);*//*
const a = ["ali" , "abbas"];
const [person1,person2] = a;
console.log(person1,person2);*//*
const players = [{name:"messi" , team:"barselona"},{
    name:"ronaldo" , team:"manunt"
},{
    name:"haland" , team:"mancit"
}];
const a = players.find(function(player){
    return player.name == "ronaldo";
})
console.log(a);
*//*
export function ali(x,y){
   return (x*y);
}
export const a = 20;
export const b = 40;
*/
// const a = prompt();
// console.log(" hello : " , a);
// if(a == "ali ghafari"){
//     console.log("yes");
// } else{
//     console.log("no");
// }
// for(var i=0 ; i<5 ; i++){
//     console.log(a[i]);
// }
// if(confirm("do you ready ?")){
//     console.log(prompt());
// } else{
//     console.log(prompt());
//  }
// let a;
// a = window.innerHeight;
// console.log(a);

// const a = document.querySelector(".ali");
// a.style.padding = "100px";
// const h2 = document.createElement("h2");
// h2.class = "abbas";
// h2.appendChild(document.createTextNode("hello mammad"));
// document.querySelector(".ali").appendChild(h2);
// const a = document.querySelector(".ali");
// const b = document.getElementsByTagName("p");
// a.replaceChild(h2,b);

// const a = document.querySelector(".ali");
// a.remove();

// document.querySelector(".clear-tasks").addEventListener('click' , onclick);
// function onclick(){
//     console.log("hello ali");
// }

// document.querySelector(".clear-tasks").addEventListener("click" , function(){
//     console.log("hrllo ali");
// });

// document.querySelector(".clear-tasks").addEventListener("click" , onclick);
// function onclick(e){
//     e.preventDefault();
//     let a;
//     a = e.offsetclient;
//     console.log(a);
// }

// const a = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
//     card.addEventListener("mousemove" , run);
// function run(e){
    // console.log(`event type : ${e.type}`);
    // b.textContent = `mouse x : ${e.offsetX} mouse y : ${e.offsetY}`;
    // // console.log(b);
    // document.body.style.backgroundcolor = `rgb(${e.offsetX} , ${e.offsetY} , 40)`;
// }
/*
const a = document.querySelector("form");
const b = document.querySelector("h5");
const c = document.getElementById("task");

a.addEventListener("submit" , run);
c.addEventListener("keydown",run);
c.addEventListener("keyup",run);
c.addEventListener("input",run);
c.addEventListener("cut",run);
c.addEventListener("blur",run);

function run(e){
    console.log(`event type : ${e.type}`);
    console.log(e.target.value);
    b.textContent = e.target.value;

    e.preventDefault();
}*/

// localStorage.setItem("name","ali");
// localStorage.removeItem("name");

// document.querySelector("form").addEventListener("submit",function(e){
//     const task = document.getElementById("task").value;
//     let a;
//     if(localStorage.getItem("task") === null){
//         a = [];
//     }else{
//         a = JSON.parse(localStorage.getItem("a"));
//     }
//     a.push(task);

//     localStorage.setItem("a" , JSON.stringify(a));

//     alert("saved");

//     e.preventDefault();
// });
 /////********* ///////// ********/ //////* /**/*/ */ */

   // نظریه دوم
   
//  function findstring(x,y){
//      if(x.length == y.length){
//        let ax =  x.split("").sort();
//        let ay = y.split("").sort();
//             for(let i=0 ; i<x.length ; i++){
//                 if(ax[i] == ay[i]){
//                     console.log("two string are equal word !!");
//                 }
//             }
//      }else{
//          console.log("word string are different");
//     }
// }
// findstring("mahdi" , "hamid");


/******************************************************** */
// نظریه اول

// function findstring(x,y){
//     if(x.length == y.length){
//         if((x.split("").sort()) == (y.split("").sort())){
//             console.log("yesss");
//         }
//     }else{
//         console.log("nooo");
//     }
// }
// findstring("hamid" , "mahdi");

/************************************ */

// let a = "ali";
// let b = a.split("").sort();
// console.log(b);

// function dark(){
//     const element = document.body;
//     element.classList.toggle("dark");
// }
// function displaymenu(subName){
//     if(subName.style.display == "none"){
//         subName.style.display = "";
//     }else{
//         subName.style.display = "none";
//     }
// }

// let string = 'code';
// let string2 = 'doce';

// // for…in استفاده از حلقه

// for (let i in string) {
//   if(string[i] == string2[i]){
//     console.log("yes");
//   }
// }

/************************** */
          //yesssssssssss

// function findstring(x,y){

//   if(x.length !== y.length){
//     console.log("string are different");
//     return false;
//   }

//   for(let i of x){
//     if(x[i] !== y[i]) {
//       console.log("string are different");
//       return false;
//     }
//   }
//   console.log("two string are equal word !!");
// }

// findstring("fadas","sural");

/********************************** */

function findstring(x, y) {
    if (x.length !== y.length) {
      console.log("Strings are different");
      return false;
    }
  
    for (let i of x) {
        if (!y.includes(i)) {
          console.log("Strings are different");
          return false;
        }
      }      
  
    console.log("Two strings are equal!");
  }
  
  findstring("ali", "lia");
  
// let height = 5;
// let wight = 50;
// let bmi = wight/(height*height);
// console.log(bmi);

