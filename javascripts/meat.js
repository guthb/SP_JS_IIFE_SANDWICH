//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function(maker){
  // Private variable to store the different meat prices as an object
  console.log("In Meats" );
  var meatPrices={
    "balonaga":3.25,
    "salami":1.35,
    "chicken":1.25,
    "none":0.0
  };
  // Augment the original object with another method
  // this is a setter method, it is setting a new property
  // on the sandwich with the price from the private object
  // through this public interface
  maker.addMeat = function(checkedDomMeat){
    return meatPrices[checkedDomMeat];
  }
  //this is the getter method as it returns the meat prices
  maker.getMeat = function(){
    return meatPrices;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
