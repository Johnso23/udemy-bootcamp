//Write a javascript fucntion isEven() which takes a single  numerical argument and returns true if  the number is even, and false othervs

function isEven(num){
	
		if(num % 2 === 0) {
			return true;
		} else {
			return false;
		}

}


//Write a function that passes a number that returns its factorial

function factorial(num){
	//define result variable
	var result = 1;
	//calculate factorial and store value in result 
	for(var i = 2; i <= num; i++){
		result *= i;
	}

	//return result variable
	return result;
}

// //factorial(4) 4 * 3 * 2 * 1
// (4)
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24


function fact(num){

	if(num === 0) {
		return 1;
	}

    var result = num;

    for(var i = num - 1; i >= 1; i--){
    	result *= i;
    }

    return result;
}


//reverse factorial

function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}