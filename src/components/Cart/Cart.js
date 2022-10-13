import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const {cart} = props;
   // const price = cart.reduce((previous, current)=> {return previous + current.price}, 0);
   let price = 0;
   let shipping = 0;
   let quantity = 0;
   for(const product of cart){
      quantity += product.quantity;
      price = price + product.price * product.quantity;
      shipping += product.shipping;
   }
   const tax = parseFloat((price * 0.1).toFixed(2));
   return (
      <div className="cart">
         <h4>Order Summary</h4>
         <div className="calculate">
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: {price+shipping+tax}</h2>
         </div>
      </div>
   );
};

export default Cart;
