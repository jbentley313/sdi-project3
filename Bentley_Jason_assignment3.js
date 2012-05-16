//alert("JavaScript works!");

// Assignment: Project 3
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 3: Night Out with coworkers

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
	beerPrice : 15,
	takeMoney : function(money, beers) {
	return (money - (bar.beerPrice * beers));
	}
};

var moneyLeft = bar.takeMoney(100, 5);
console.log(moneyLeft);

// bar.barName = "Hooligans";
// console.log(bar.barName);



var taxi = {
	name : "Yellow Cab",
	driver : "Zach",
	price : 40,
	getDriverName : function() {
		return (taxi.driver);
	},
	mutateDriver : function(newDriver) {
		taxi.driver = newDriver;	
	}
	
	
};
var rememberName = taxi.getDriverName();
console.log(rememberName);
taxi.mutateDriver("Alien Dude");

console.log(taxi.driver);

var canWeAfford = function() {
		if (taxi.price <= moneyLeft) {
			canWe = ("Sweet! We don't have to walk home!");
		} else {
			canWe = ("UhOh");
		}
		return canWe;
};
var canWe = canWeAfford();
console.log(canWe);
