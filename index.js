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
    for(var i = 0; i < cart.length; i++)
    {
      inCart += `${cart[i].}`;
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
