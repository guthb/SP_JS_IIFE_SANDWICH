//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function() {
  // Private variable to store the price
  var totalPrice = 0;
  // Return the public interface that other code can interact with
  // expext to pass into this iffe the function to call for the sandwich
  //components and the event triggered from dom
  return {
    //add topings to order
    addTopping: function(toppingPrice ) {
      totalPrice += toppingPrice
    },
    //subtract toppings from order
    subtractTopping: function(toppingPrice) {
      totalPrice -= toppingPrice
    },
    sandwichPrice: function() {
      return totalPrice;
    }
  };
})(SandwichMaker || {});

