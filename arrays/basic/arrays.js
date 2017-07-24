//printReverse()

//Write a function printReverse() that takes an array as an argument and prints out
//the elements in the array in reverse order(dont actually reverse the array itself)

//printReverse([1, 2, 3, 4]);
//4
//3
//2
//1

//printReverse(["a", "b", "c"]);
//"c"
//"b"
//"a"




function printReverse(x){
	var ret = new Array; 
	for(var i = 0; i < x.length - 1; i >= 0; i++){
		ret.push(x[i]);
	}
	return ret;

}

var a = [3,5,6,8]
var b = printReverse(a);


function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}

}

printReverse([3, 6, 2, 5])








//isUniform()

//write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

//isUniform([1, 1, 1, 1]);			//true
//isUniform([2, 1, 1, 1]);			//false
//isUniform(["a", "b", "p"]);		//false
//isUniform(["b", "b", "b"]);		//true



	var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
	var sorted_arr = arr.slice().sort();


	function isUniform(){
		var identical = [];
		for(var i = 0; i < arr.length - 1; i++)
			if(sorted_arr[i + 1] == sorted_arr[i]) {
				results.push(sorted_arr[i]) 
			}
	}
	 console.log(identical)

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);


function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}


// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;	
// 		}
// 	});
// 	return true;
// }


//sumArray()

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numers in the array


function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total
}



//sumArray([1, 2, 3]);			//6
//sumArray[(10, 3, 10, 4)];		//27
//sumArray([-5, 100)];			//95



var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); // 6


//max()

//Write a function max() that accepts an array of numbers and returns the maximum number in the array

//max([1, 2, 3]); 		//3
//max([10, 3, 10, 4]);	//10
//max([-5, 100]);		//100


var max = [1, 2, 3, 4].max(max);

function max(a, b){
	return (a > b);
}



function max(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

