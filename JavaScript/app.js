/*import {b ,a}  from "./training.js";

console.log(a);

import * as ali from "./training.js";
console.log(ali.a);
*/

// const form = document.querySelector('#task-form');
// const taskInput = document.querySelector('#task');
// const filter = document.querySelector('#filter');
// const taskList = document.querySelector('.list-group');
// const clearBtn = document.querySelector('.clear-tasks');


// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
 
//   // DOM Load event
//   document.addEventListener('DOMContentLoaded', getTasks);

//   // Add task event
//   form.addEventListener('submit', addTask);

//   // Remove task event
//   taskList.addEventListener('click', removeTask);

//   // Clear task
//   clearBtn.addEventListener('click', clearTask);

//   // Filter task
//   filter.addEventListener('keyup', filterTask);

// }

// // Get Tasks from LS
// function getTasks() {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task) {

//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(task));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//   });
// }

// // Add task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('برای افزودن تسک در ابتدا تسک را وارد کنید');
//   } else {
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(taskInput.value));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//     // Store in LS
//     storeTaskInLocalStorage(taskInput.value);

//     // Clear input
//     taskInput.value = '';

//     e.preventDefault();

//   }

// }

// // Store Task
// function storeTaskInLocalStorage(task) {
//   // console.log(task);

//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Remove task
// function removeTask(e) {

//   if (e.target.classList.contains('delete-item')) {
//     if (confirm('آيا مطمن هستی برای حذف تسک')) {
//       e.target.parentElement.remove();
//       // Remove from LS
//       removeTaskFromLocalStorage(e.target.parentElement);
//     }
//   }

// }

// //  Remove from LS
// function removeTaskFromLocalStorage(taskItem) {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task, index) {
//     if (taskItem.textContent === task) {
//       tasks.splice(index, 1);
//     }
//   });

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Clear task
// function clearTask() {
//   taskList.innerHTML = '';
//   // Clear from LS
//   clearTasksFromLocalStorage();
// }


// // Clear Tasks from LS
// function clearTasksFromLocalStorage() {
//   localStorage.clear();
// }

// // Filter task
// function filterTask(e) {
//   const text = e.target.value.toLowerCase();
//   // console.log(text);

//   document.querySelectorAll('.list-group-item').forEach(function (task) {
//     // console.log(task);
//     const item = task.textContent;
//     // console.log(item);

//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.classList.add("d-flex");
//     } else {
//       task.classList.remove("d-flex");
//       task.style.display = 'none';
//     }

//   });

// }


// روال ها 

//روال 

// function findstring(x,y){
//     if(x.length === y.length){
//       let ax =  x.split("").sort();
//       let ay = y.split("").sort();
//            for(let i=0 ; i<1 ; i++){
//                if(ax[i] === ay[i]){
//                    console.log("two string are equal word !!");
//                }
//            }
//     }else{
//         console.log("word string are different");
//    }
// }
// findstring("rasul" , "ralus");

/******************* */
     //روال 

// const a = prompt();
// const b = prompt();

// function findstring(a,b){
//     if(a.length === b.length){
//         let ax = a.split("").sort();
//         let ay = b.split("").sort();
//          for(let i=0 ; i<1 ; i++){
//                  if(ax[i] === ay[i]){
//                      alert("two string are equal word !!");
//                            }
//                         }
//                  }else{
//                      alert("word string are different");
//                 }
//             }

// findstring(a,b);
// function dark(){
//      const element = document.body;
//      element.classList.toggle("ali");
// }

