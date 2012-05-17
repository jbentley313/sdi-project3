//alert("JavaScript works!");

// Assignment: Project 3
// Author: Jason Bentley
// Created for: SDI Online 1205
// First assignment: Project 3: Night Out with coworkers

var peronalBelongins = ["Wallets", 
						"Car Keys", 
						"Phones", 
];


var displayJson = function function (json) {
	for (var i = 0; i < json.coworkers.length; i++) {
		var coworker = json.coworkers[i];
		console.log(coworker.name + " is " + coworker.age + " years old, and lives in " + coworker.city + ". His favorite beers are:" + coworker.favBeers + ".");
	};
};

displayJson(json);



var bar = {
	barName : "Roxbury",
	beerPrice : 15,
	takeMoney : function(money, beers) {
	return (money - (bar.beerPrice * beers));
	}
};

var moneyLeft = bar.takeMoney(1000, 5);
console.log(moneyLeft);





var taxi = {
	name : "Yellow Cab",
	driver : "Zach",
	isDirty : false,
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




var lostBelongings = [];
var loseBelongings = function(items) {
	var ii = 0;
	while (ii < items.length) {
	var loseItems = (items[ii]);
	lostBelongings.push(loseItems);
	ii++; 
	 
	};
	return lostBelongings;
};

var itemsLost = loseBelongings(peronalBelongins);
console.log(itemsLost);





var canWeAfford = function(dirtCheck) {
	if (dirtCheck===true) {
			canWe = ("This cab is nasty!  Let's Walk.");
			return canWe;
	} else {
		if (taxi.price <= moneyLeft) {
			canWe = ("Sweet! We don't have to walk home!");
		} else {
			canWe = ("It looks like we are going to be walking home tonight.");
		}
		return canWe;
	};
};
var canWe = canWeAfford(taxi.isDirty);
console.log(canWe);

var newFriend = {
    name : "Bob",
    city : "East LA"
    
};
console.log(newFriend);







