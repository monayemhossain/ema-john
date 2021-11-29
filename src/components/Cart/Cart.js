import React from 'react';
import "./Cart.css";


const Cart = ({ cart}) => {
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let beforeTax = 0;
    let orderTotal = 0;
     for (const product of cart) {
         total = total + product.price;
         if (total > 100) {
             shipping = 10;
         }
         else {
             shipping = 5 ;
         }
          tax = total * 0.05;
         beforeTax = total + shipping;
         orderTotal = total + shipping + tax;
     }
     
    return (
        <div className="cart">
            <h3>Order Summary </h3>
            <h4> Items Ordered:{cart.length}</h4>
            <p>Items Price: $ {Math.round(total)}</p>
            <p>Shipping &amp; Handling : $ { shipping}</p>
            <p>Total Before Tax : $ {Math.round(beforeTax)} </p>
            <p>Estimated Tax : $ {Math.round(tax)}</p>
            <h5>Order Total : $ {Math.round(orderTotal) } </h5>
            <button className="btn-regular"> Review your order</button>
        </div>
    );
};

export default Cart;