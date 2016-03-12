//create a sandwich module Sandwich Maker IIFE
//requirement: ingredents can not be accessed by other modules..
//except through getter function 
//ach IIFE should expose, in its public interface, a method 
//named add{ingredient} that accepts a single argument. 
//That argument's value should be the ingredient selected by the user.
var SandwichMaker = (function() {
  // Private variable to store the price
  console.log("In SandwichMaker");
  var totalPrice = 0;
  // Return the public interface that other code can interact with
  // expext to pass into this iffe the function to call for the sandwich
  //components and the event triggered from dom
  return {
    //add topings to order
    addTopping: function(toppingSelected, checkBoxEvent) {
    //varible to hold sandwich choices
    var pickedTopping = checkBoxEvent.target.value;
    console.log("picked Topping",pickedTopping );
    //varible to hold price from IFFE
    var priceOfTopping = SandwichMaker[toppingSelected](pickedTopping);
    console.log("Price of Topping", priceOfTopping );
    //varible to hold if none was checked
    var checkedTopping = checkBoxEvent.target.checked;
    console.log("topping checked",checkedTopping );
    //test for price of topping( insure toppings were picked)
    if (!checkedTopping) {
      priceOfTopping = 0 - priceOfTopping;
    };
    //sum up the toppings for the sandwich
    totalPrice += priceOfTopping; 

    return totalPrice;
  }
};

})(SandwichMaker || {});

