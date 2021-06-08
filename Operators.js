// + - / * % 
// a*b-c+d/c
// ((a*(b-c)+d))/c
// var num1 = 7;
// var num2 = 6;
// console.log(num1 + num2);
// var answer = num1 < num2;
// console.log(answer);
// D = ((listPrice-sellingPrice)/listPrice)*100
// a + ((b * c) / d) * e
var sellingPrice = 299;
var listingPrice = 599;
 var discountPercent =((listingPrice - sellingPrice)/listingPrice)*100;
 console.log("discount Percent is :"+discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + " % off");