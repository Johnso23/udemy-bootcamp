var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};



var dog = {
	name: "Rusty",
	breed: "Mutt",
	age: 3,
}

var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "terrible post"]
	},
	{
	title: "Cats are actually awesome",
	author: "Cat Luvr",
	comments: ["<3", "Go to hell i hate you"]
}
]




var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"}
	],
	color: "baby blue",
	isEvil:true
};




var movieObject = {
	movies: [
	{name: "The Departed"},
	{name: "Blow"},
	{name: "Labyrinth"}
	],
	rating: [
	{rating: "5 stars"},
	{rating: "4 stars"},
	{rating: "3 stars"},
	{rating: "2 stars"},
	{rating: "1 star"}
	]
	haswatched: [
	{yes: "Has watched"},
	{No: "Has not watched"}]
}



var movies = [
	{title: "In Bruges", 
	hasWatched: true, 
	rating: 5},
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "Les Miserable",
		hasWatched: false, 
		rating: 3.5,
	}
]



movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result +="watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})




