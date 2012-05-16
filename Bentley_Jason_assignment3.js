//alert("JavaScript works!");

// Assignment: Project 3
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 3: Night Out with coworkers
var beerPrice = 15;
var displayJson = function function (json) {
	for (var i = 0; i < json.coworkers.length; i++){
		var coworker = json.coworkers[i];
		console.log(coworker.name + " is " + coworker.age + " years old, and lives in " + coworker.city + ". His favorite beers are:" + coworker.favBeers + ".");
	};
};

displayJson(json);



var bar = {
	barName : "Roxbury",
	serveBeer : true,
	takeMoney : function(money, beers) {
		return (money - (beerPrice * beers));
	}
};

var moneyLeft = bar.takeMoney(100, 5);
console.log(moneyLeft);

// bar.barName = "Hooligans";
// console.log(bar.barName);




