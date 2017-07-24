// $("button").on("click", function(){
// 	$('div').fadeOut(1000, function(){
// 		$(this).remove();
// 	});
// 	$("div").remove();
// });


$("button").on("click", function(){
	$('div').slideToggle(500, function(){
		$(this).remove();
	});
}); 	