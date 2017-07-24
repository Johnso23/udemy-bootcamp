var button = document.querySelector("button");
var isPurple = false;
var isWhite = true;

// button.addEventListener("click", function(){

// 	if(isPurple){
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	} else {
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// 	//if white
// 		//make it purple
// 	//else 
// 		//mak
// });


button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})
