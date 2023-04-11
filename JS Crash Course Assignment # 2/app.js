// JS Crash Course Assignment # 2

// Q no 1

// function abc(num1){
//     return function (num2){
//        return num1 + num2
//     }
// }
// let number = abc(5);
// console.log(number(10));
// console.log(number(3));

// Q no 2

// function  recursive(num) {
//     if (num > 1) {
//         return num *  recursive(num - 1);
//     }
//     return 1
// }
// var abc =  recursive(5);
// console.log(abc);

// Q no 3
// (A)

// function addParagraph(text){
//     let para = document.querySelector("p");
//     para.innerHTML = text;

// }
// addParagraph("Hallo World");


// (B)
// function addParagraph(text) {
//     var newParagraph = document.createElement("p");
//     var paragraphText = document.createTextNode(text);
//     newParagraph.appendChild(paragraphText);
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph("Hello, world!");  

// Q no 4

// function addListItem(text){
//     let list = document.querySelector("ul");
//     let newItem = document.createElement("li");
//     let itemText = document.createTextNode(text);
//     newItem.appendChild(itemText);
//     list.appendChild(newItem);
// }
// addListItem("hallo")  
// addListItem("zeehsna")  
 
// Q no 5

// function changBgColor(bgColor,textColor){
//     let elememt = document.querySelector("h1");
//     elememt.style.backgroundColor = bgColor
//     elememt.style.color = textColor

// }
// changBgColor("blue","white")

// Q no 6

// let priStdData = localStorage.getItem("Student Bio");
// let std = priStdData ? JSON.parse(priStdData): [];
// function studentsData (){
//     let studentBio = {
//         name: prompt("Enter your name"),
//         rollNum: +prompt("Enter your roll number"),
//         teacher: prompt("Enter your teacher name"),
//         class: prompt("Enter your class name"),
//     }
//     std.push(studentBio);
//     console.log(std);
//     let stringify = JSON.stringify(std);
//     localStorage.setItem("Student Bio",stringify);
// }

// Q no 7

// function getData(key){
//     let item = localStorage.getItem(key);
//     if(item){
//         return JSON.parse(item)
//     }else{
//         return null
//     }
// }
// let myObject = getData("Student Bio");
// console.log(myObject);

// Q no 8






