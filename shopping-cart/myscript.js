/*
1) The user will need to input their name. 
2) The user will need input 3 product names and 
their prices for the products. 3 different prompts will be need to be created for each
individual products as well as the prices.
3) If the user input the first price of the product to 0 then, tell the user
it can't be 0 and to enter a valid price.
4) Calculate the subtotal of the items.
5) Log the subtotal to the console.
6) Calculate the grand total by adding a tax of 6.25%.
7) Display the message to "customerName, your grand total is $grandTotal" to the console.
*/

let userName = prompt ("What is your name?"); 
let productOne = prompt("What is the first product that you would like to purchase?");
let productTwo = prompt ("What is the second product that you would like to purchase?");
let prouductThree = prompt ("What is the third product that you would like to purchase?");
let basedPrice1 = prompt("What is the first product price?"); 
let basedPrice2 = prompt("What is the second product price?");
let basedPrice3 = prompt("What is the third product price?")
let basedPricecheck = prompt ("0");
let baseMessage1 = `Thank you for shopping. Your ${basedPrice1} costs cannot be ${basedPricecheck}.`
let taxrate = "0.0625";
let subTotal="Your final order:" + basedPrice1 + " " + basedPrice2 + " " + $ + " " + basedPrice3;
let grandTotal="Your final order:" + "subtotal" + "taxrate";

if (basedPrice1=== 0){
    baseMessage1=baseMessage1+"Please enter the valid price for your item.";
}





