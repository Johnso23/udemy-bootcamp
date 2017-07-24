// // // //Stalker exercise

// // // // var firstName = prompt("What is your first name?");
// // // // var lastName = prompt("What is your last name?");
// // // // var age = prompt("What is your age");
// // // // var fullName = (firstName + " " + lastName);
// // // // console.log(age);
// // // // console.log(fullName + " is a cool dude");
// // // // console.log(fullName + " is " + age + " years of age");



// // // //Age Calculator

// // // //Enter your age and figure out how many days you've been alive

// // // var ageCalc= prompt("What is your age?");
// // // var alive = console.log(ageCalc * 365);



// // //18 and Over

// // var age = prompt("what is your age?");

// // if(age < 18){
// // alert("You cannot enter!");
// // }

// // else if(age < 21){
// // 	alert("You can enter, but cannot drink");
// // }

// // else if(age % 3 == 0){
// // 	alert("You are odd");
// // }

// // else{
// // 	alert("You can enter, and Drink!");
// // }


// //Number Guessing Game

// //create secret number

// var secretNumber = 4;

// //ask user for guess
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);


// //check guess

// if(Number(guess) === secretNumber){
// alert("You got it right");
// }


// //check if number is higher
// else if(Number(guess) > secretNumber){
// 	alert("Number is too high. Guess again.")
// }
// else {
// 	alert("Too low. Guess again")
// }



// var num = 1;

// while(num <= 10) {
// 	console.log(num);
// 	num += 2;
// } //only logs odd numbers less than 10


// var num = 1;

// while(num <= 20){
// 	if(num % 4 === 0){
// 		console.log(num);
// 	} 
// num++; 

// }\




console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter+=2;
}

// while(counter <= 40){
// 	if(counter % 2 === 0){
// 		console.log(counter);
// 	}
// 	counter+=1;
// }

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}




console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}