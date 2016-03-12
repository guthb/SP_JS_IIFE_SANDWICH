//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function(maker){
  // Private variable to store the different stuff prices as an object
  var stuffPrices={
    "oil":0.10,
    "vinegar":0.15,
    "dijionMustard":0.35,
    "none":0.0
  };
  // this is a setter method, it is setting a new property
  // on the sandwich with the price from the private object
  // through this public interface
  maker.addStuff = function(checkedDomStuff){
    return stuffPrices[checkedDomStuff];
  }
  //this is the getter method as it returns the stuff prices
  maker.getStuff = function(){
    return StuffPrices;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});