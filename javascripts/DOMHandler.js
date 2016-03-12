// Requirement: You should create an additional JavaScript file that handles interacting 
// with the form elements and determining which method should be called.

// Variables to hold final price
var finalSandwichPrice = 0;

// Get a reference to the <select> element that has all the sandwich options
var meatChooser = document.getElementById("meat");
var stuffChooser = document.getElementById("stuff");
var veggieChooser = document.getElementById("veggie");
var cheeseChooser = document.getElementById("cheese");
var breadChooser = document.getElementById("bread");
var sandwichDom = document.getElementById("outputSandwich") //dom location for price
console.log("in DOM Handler" );

 // Add the topping to the SandwichMaker to increase the total price
function buildSandwichCost(updatedCost){
  console.log("in Build Sandwich" );
  finalSandwichPrice = updatedCost;
  console.log("finalSandwichPrice", finalSandwichPrice);
  console.log(sandwichDom)
  sandwichDom.textContent = finalSandwichPrice;
  console.log("built sandwich",finalSandwichPrice );
};

/*  A <checkbox> element broadcasts a change event, so you listen for it
and get the value of the topping from your augmented IIFE
grab the cost from the checkbox through IIFE and pricing function */
meatChooser.addEventListener("change", function(event){
console.log("Dom Handler for Meat" );
var priceCaptured = SandwichMaker.addTopping('addMeat', event);
  buildSandwichCost(priceCaptured)
  console.log("meatChooser", priceCaptured);
  // Determine the price of the topping chosen
});

//add addtional choosers:






