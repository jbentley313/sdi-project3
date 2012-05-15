//alert("JavaScript works!");

// Assignment: Project 3
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 3: Bar hopping with coworkers

var displayJson = function function (json) {
	for (var i = 0; i < json.coworkers.length; i++){
		var coworker = json.coworkers[i];
		console.log(coworker.name + " is " + coworker.age + " years old, and lives in " + coworker.city + ". His favorite beers are:" + coworker.favBeers + ".");
	};
};

displayJson(json);

