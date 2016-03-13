//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function(maker){
  console.log("In Cheese");
  // Private variable to store the different cheese prices as an object
  var cheesePrices={
    "harvarti":0.75,
    "swiss":0.35,
    "limburger":0.85,
    "none":0.0
  };
  // Augment the original object with another method
  // this is a setter method, it is setting a new property
  // on the sandwich with the price from the private object
  // through this public interface
  maker.addCheese = function(checkedDomCheese){
    return cheesePrices[checkedDomCheese];
  }
  //this is the getter method as it returns the cheese prices
  maker.getCheese = function(){
    return cheesePrices;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});