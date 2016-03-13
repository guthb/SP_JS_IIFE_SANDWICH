// Requirement: You should create an additional JavaScript file that handles interacting 
// with the form elements and determining which method should be called.

// Variables to hold final price
var finalSandwichPrice = 0;

// Get a reference to the <select> element that has all the sandwich options
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggies");
var stuffChooser = document.getElementById("stuff");
var breadChooser = document.getElementById("bread");
var sandwichDom = document.getElementById("outputSandwich") //dom location for price
console.log("in DOM Handler" );

 
/*  A <checkbox> element broadcasts a change event, so you listen for it
and get the value of the topping from your augmented IIFE
grab the cost from the checkbox through IIFE and pricing function */
meatChooser.addEventListener("change", function(event){
console.log("Dom Handler for Meat" );
var priceCaptured = SandwichMaker.addTopping("addMeat", event);
  buildSandwichCost(priceCaptured)
  console.log("meatChooser", priceCaptured); 
});

//add addtional choosers:
//cheese
cheeseChooser.addEventListener("change", function(event){
console.log("Dom Handler for Cheese" );
var priceCaptured = SandwichMaker.addTopping("addCheese", event);
  buildSandwichCost(priceCaptured)
  console.log("cheeseChooser", priceCaptured);  
});
//veggies
veggieChooser.addEventListener("change", function(event){
console.log("Dom Handler for Veggies" );
var priceCaptured = SandwichMaker.addTopping("addVeggie", event);
  buildSandwichCost(priceCaptured)
  console.log("cheeseChooser", priceCaptured);  
});
//stuff
stuffChooser.addEventListener("change", function(event){
console.log("Dom Handler for Veggies" );
var priceCaptured = SandwichMaker.addTopping("addStuff", event);
  buildSandwichCost(priceCaptured)
  console.log("cheeseChooser", priceCaptured);  
});
//bread
breadChooser.addEventListener("change", function(event){
console.log("Dom Handler for Bread" );
var priceCaptured = SandwichMaker.addTopping("addBread", event);
  buildSandwichCost(priceCaptured)
  console.log("breadchooser", priceCaptured);  
});

// Determine the price of the topping chosen
// Add the topping to the SandwichMaker to increase the total price
function buildSandwichCost(updatedCost){
  console.log("in Build Sandwich" );
  finalSandwichPrice = updatedCost;
  console.log("finalSandwichPrice", finalSandwichPrice);
  console.log(sandwichDom)
  sandwichDom.textContent = finalSandwichPrice;
  console.log("built sandwich",finalSandwichPrice );
};


