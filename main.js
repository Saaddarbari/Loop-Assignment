//1: Creating a Lesson Plan(Using for loop );
// let myWork:{name:string,status:boolean}[] = [];
// for (let i = 1; i < 10; i++) {
//     let lesson = {
//         name:`lesson ${i}`,
//         status: i % 2 !== 0 ? true :false
//     }    
//     myWork.push(lesson)
// };
// console.log(myWork);
// 2. Guessing Game (Using while loop ):
// let maximumNum = 20;
// const randomNum = Math.floor(Math.random() * maximumNum) + 1;
// console.log(`Generated random number: ${randomNum}`);
// let userGuess = false;
// let predifinedGuess = [2, 5, 17, 1,9];
// let i = 0;
// while (!userGuess && i < predifinedGuess.length) {
//     const UserGuess = predifinedGuess[i];
//     console.log(`User guess number: ${UserGuess}`);
// if (UserGuess === randomNum) {
//     console.log("Congratulation you Guess correct number!");
//     userGuess = true
// } else if(UserGuess > randomNum){
//     console.log("Too high! Try a lower number.");
// } else{
//     console.log("Too low! Try a higher number."); 
// }
//     i++
// };
// if (!userGuess) {
//     console.log("You've run out of guesses. Better luck next time!");
// };
// 3. Counter Incrementer (Using do while loop ):
// let counter = 0;
// let step = 1;
// do {
//  console.log(`Value: ${counter}`);
//   counter += step ;
// } 
// while (counter < 100);
// console.log(`Loop Finished! ${step}`);
// 4.Exploring Objects with for...in Loop:
// let myObject = {
//     item1:"Mango",
//     item2:"orange",
//     item3:"Strawberry",
// };
// for (let i in myObject) {
//     console.log(i,myObject[i]);
// };
// 5.Exploring Arrays with Loops(Using loop ):
// Create an empty array:
var myArray = [];
// Run a loop 10 times, adding a new incrementing value to the array:
for (var i = 1; i < 10; i++) {
    myArray.push(i);
}
;
// Log the array into the console:
console.log(myArray);
// Use the for loop to iterate through the array:
for (var i = 0; i < myArray.length; i++) {
    console.log("Element at index ".concat(i, ": ").concat(myArray[i]));
}
;
// Use the for...of loop to output the value into the console from the array:
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var x = myArray_1[_i];
    console.log(x);
}
