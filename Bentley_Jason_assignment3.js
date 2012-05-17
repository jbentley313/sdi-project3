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
	barName : "The Roxbury",
	beerPrice : 15,
	takeMoney : function(money, beers) {
	return (money - (bar.beerPrice * beers));
	}
};
console.log("The coworkers decided to go out to " + bar.barName + " to get some drinks.");
console.log("They have some money, but they need to leave enough money for the taxi ride home.");

var moneyLeft = bar.takeMoney(275, 14);
console.log("After spending $ " + bar.beerPrice + " per drink, they had " + "$" + moneyLeft + " left for the ride home.");


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

console.log("They hailed a " + taxi.name + " driven by a weird looking guy named " + rememberName  + ".");

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

console.log("They checked to see if the taxi was dirty, and to see if they had enough money leftover to be able to pay for the ride.");

var canWe = canWeAfford(taxi.isDirty);
console.log(canWe);


console.log("They got in and began the ride home. " + taxi.driver + " mutated into an alien while the taxi was in motion.  Everyone was scared at first, but the alien turned out to be cool.");

taxi.mutateDriver("Alien Dudey");

console.log('"My name is ' + taxi.driver + '", said the new taxi driver.');


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

console.log("The coworkers realized every single person lost three items.");

var itemsLost = loseBelongings(peronalBelongins);
console.log(itemsLost);

var newFriend = {
    name : "Bob",
    city : "East LA",
    getinfo : function () {
    	return (this.name + " from " + this.city);
    }
    
};

var randomNewFriend = newFriend.getinfo();

console.log("They finally made it back to their homes.  They all couldn't wait to tell " + randomNewFriend + " what had happened.");







