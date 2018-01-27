var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100) + 1;
 cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code 
  if(cart.length === 0 )
  {
    console.log("Your shopping cart is empty.");
  }else{
    var inCart = "In your cart, you have ";
    var itemNames = Object.keys(cart);
    for(var i = 0; i < cart.length; i++)
    {
      inCart += `${itemNames[i]} at $${prices[i]}`;
      if(cart.length >= 3 && i < cart.length - 1)
      {
        inCart += ', ';
      }
      if(cart.length >= 2 && i === cart.length -2){
        inCart += 'and ';
      }
    }
    inCart += '.';
    console.log(inCart);
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  var prices = Object.values(cart);
  for(var i = 0; i < cart.length; i++){
    totalPrice += prices[i];
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
