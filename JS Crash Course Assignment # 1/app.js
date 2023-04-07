// JS Crash Course Assignment # 1

// Q no 1

// let userInputNum1 = Number(prompt("Enter First Number:"));
// let userInputNum2 = Number(prompt("Enter Second Number:"));

// if (userInputNum1 > userInputNum2 || userInputNum2 > userInputNum1) {
//     console.log(userInputNum1 + " and " + userInputNum2 + " is grater number " + userInputNum1);
// }
// else if (userInputNum2 > userInputNum1) {
//     console.log(userInputNum1 + " and " + userInputNum2 + " is grater number " + userInputNum2);
// }
// else {
//     console.log("Your input is invalied:");

// }

// Q no 2

// let userInputNum1 = prompt("Enter a Number:");

// if (userInputNum1 < 0 ) {
//     alert(userInputNum1  + "\n The number you enter is Negative:");
// }
// else if (userInputNum1 > 0 ) {
//     alert(userInputNum1  + "\n The number you enter is Positive:");
// }
// else{
//     alert(userInputNum1 +" Zero NUmber:")
// }

// Q no 3 (A);

// let num1 = Number(prompt("Enter First NUmber"));
// let num2 = Number(prompt("Enter Second NUmber"));
// let num3 = Number(prompt("Enter Third NUmber"));
// let num4 = Number(prompt("Enter Forth NUmber"));
// let num5 = Number(prompt("Enter Fivth NUmber"));

// let largest = Math.max(num1, num2, num3, num4, num5);
// console.log(num1+" "+num2+" "+num3+" "+num4+" "+num5+" largest number is "+largest)


// Q no 3 (B);

//  num1 = Number(prompt("Enter First NUmber"));
//  num2 = Number(prompt("Enter Second NUmber"));
//  num3 = Number(prompt("Enter Third NUmber"));
//  num4 = Number(prompt("Enter Forth NUmber"));
//  num5 = Number(prompt("Enter Fivth NUmber"));

// let arr = [num1, num2, num3, num4, num5];
// let largeNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largeNum) {
//         largeNum = arr[i];
//     }
// }
// console.log(arr.join(" ") + " Grater NUmber is: " + largeNum);

// Q no 4

// for (let i = 0; i <= 15; i++) {

//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }

// Q no 5

// let tottleNum = Number(prompt("ENter Your totle number:"));
// let obtainedNum = Number(prompt("ENter Your obtained number:"));
// let result = obtainedNum / tottleNum * 100;
// let grade;
// if (result >= 90) {
//     grade = "A"
//     console.log(result.toFixed(2) + " % Grade "+grade);
// }
// else if (result >= 80) {
//     grade = "B"
//     console.log(result.toFixed(2) + " % Grade "+grade);
// }
// else if (result >= 70) {
//     grade = "C"
//     console.log(result.toFixed(2) + " % Grade "+grade);
// }
// else if (result >= 60) {
//     grade = "D"
//     console.log(result.toFixed(2) + " % Grade "+grade);
// }
// else if (result < 60) {
//     grade = "F"
//     console.log(result.toFixed(2) + " % Grade "+grade);
// }
// else{
//     alert("Your input is Wrong:");
// }

// Q no 6 ???//

// Q no 7


// for (let i = 1; i <= 5; i++) {
//     let row = "";
    
//     for (let j = 1; j <= i; j++) {
//         row += "+ ";
//     }
    
//     document.write(row+"<br>");
// }