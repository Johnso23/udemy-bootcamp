var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){
	if (isBlue){
		body.style.background = "white";
} else {

	body.style.background = "#3498db";

}
isBlue = !isBlue;
}, 1000);




// var tag = document.getElementById("highlight");
// document.getElementsByClassName("bolded");



// var tags = getElementsByTagName("li");






// var h1 = document.querySelector("h1")

// var li = document.querySelector("#hightlight");

// var li = document.querySelector(".bolded");


// var lis = document.querySelectorAll("li");



// var h1 = document.getElementById("#highlight")

// var p = document.getElementById("first");

// var a = document.getElementByClass("special")


// var p = document.getElementById("last");


// document.querySelector("#first");

// document.getElementsByClassName("special")

// document.querySelector(".special");

// document.getElementsByCLassName("p")

// document.querySelectorAll("p")[0];



//Select the <P> tag:

var tag = document.querySelector("p");

//Retrieve The textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:

tag.textContent = "blah blah blah";