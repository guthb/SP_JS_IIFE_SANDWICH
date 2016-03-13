//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function(maker){
  console.log("In Bread");
  // Private variable to store the different bread prices as an object
  var breadPrices={
    "wheat":0.35,
    "rye":0.45,
    "sourdough":0.25,
    "none":0.0
  };
  // Augment the original object with another method
  // this is a setter method, it is setting a new property
  // on the sandwich with the price from the private object
  // through this public interface
  maker.addBread = function(checkedDomBread){
    return breadPrices[checkedDomBread];
  }
  //this is the getter method as it returns the cheese prices
  maker.getBread = function(){
    return breadPrices;
  }
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});