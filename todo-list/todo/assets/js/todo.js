// //CHeck Off specific TODOS by Clicking
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		console.log("It is currently gray")
		
// 		//TURN IT BLACK
// 		$(this).css("color", "black");
// 	}
// 	//else
// 	else {
// 	//turn it gray
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	})
// 	}
// 	$(this).css({
// 		color:"gray",
// 		textDecoration: "line-through"
// 	});
// });



//Check Off Specific Todos By Clicking/Rehash code ^^^
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
}); //only listening to li's in code

//Click on X to delete Todo

$("ul").on("click", "span", function(event){ //clicks only when a span is clicked
	$(this).parent().fadeOut(500, function(){
		$(this).remove;
	});
	event.stopPropagation();//stops bubble phenomeon 
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		///create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>")
	}
});

$("fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});
